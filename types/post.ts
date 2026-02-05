interface Post {
    id: string;
    title: string;
    slug: string;
    content: string;
    image?: string | null;
    published: boolean;
    createdAt: Date | string;
    updatedAt: Date | string;
    authorId: string;
}

interface PostStaticParams {
    slug: string;
    title: string;
    content: string;
    image?: string | null;
}

export type { Post, PostStaticParams };