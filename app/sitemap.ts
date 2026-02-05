import { getAllPosts } from "@/lib/posts";

export default async function sitemap() {
    const baseUrl = "https://lerucherdahmed.fr";

    const posts = await getAllPosts();

    return posts.map(post => ({
        url: `${baseUrl}/articles/${post.slug}`,
        lastModified: post.updatedAt,
        changeFrequency: "monthly",
        priority: 0.8
    }));
}
