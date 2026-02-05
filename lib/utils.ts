import prisma from "./prisma"
import { compileMDX } from "next-mdx-remote/rsc"
import remarkGfm from "remark-gfm"
import remarkToc from "remark-toc"
import rehypeSlug from "rehype-slug"
import rehypeKatex from "rehype-katex"

export async function getArticleBySlug(slug: string) {
    const article = await prisma.post.findUnique({
        where: { slug },
        include: {
            tags: {
                include: { tag: true }
            }
        }
    })

    if (!article) return null

    // Compile MDX + frontmatter
    const { content, frontmatter } = await compileMDX({
        source: article.content,
        options: {
            parseFrontmatter: true,
            mdxOptions: {
                remarkPlugins: [remarkGfm, remarkToc],
                rehypePlugins: [rehypeSlug, rehypeKatex],
            },
        },
    })

    // Récupération des tags du frontmatter
    const frontmatterTags = frontmatter.tags || []

    // Mise à jour auto en BD si tags changent
    if (frontmatterTags.length > 0) {
        await prisma.$transaction([
            prisma.articleTag.deleteMany({ where: { articleId: article.id } }),
            prisma.tag.createMany({
                data: frontmatterTags.map((name) => ({ name })),
                skipDuplicates: true
            }),
            prisma.articleTag.createMany({
                data: frontmatterTags.map((name) => ({
                    articleId: article.id,
                    tagId: undefined // On récupère après avec connect
                }))
            })
        ])
    }

    // Articles liés basés sur tags
    const relatedArticles = await prisma.post.findMany({
        where: {
            id: { not: article.id },
            tags: {
                some: {
                    tag: {
                        name: { in: frontmatterTags }
                    }
                }
            }
        },
        take: 3,
        orderBy: { createdAt: "desc" }
    })

    return {
        content,
        frontmatter,
        article,
        tags: frontmatterTags,
        relatedArticles,
    }
}
export async function getAllArticleSlugs() {
    const articles = await prisma.post.findMany({
        select: { slug: true }
    })
    return articles.map((article) => article.slug)
}

export async function getAllArticles() {
    const articles = await prisma.post.findMany({
        orderBy: { createdAt: "desc" }
    })
    return articles
}

export async function getMetadata() {

}

export async function getArticlesByTag(tagName: string) {
    const articles = await prisma.post.findMany({
        where: {
            tags: {
                some: {
                    tag: {
                        name: tagName
                    }
                }
            }
        },
        orderBy: { createdAt: "desc" }
    })
    return articles
}