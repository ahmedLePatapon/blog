import { getAllArticles } from "@/lib/utils";

export default async function sitemap() {
    const baseUrl = "https://lerucherdahmed.fr";

    const posts = await getAllArticles();

    return posts.map(post => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.updatedAt),
        changeFrequency: "monthly" as const,
        priority: 0.8
    }));
}
