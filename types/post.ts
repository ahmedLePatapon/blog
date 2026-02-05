interface Post {
    id: string;
    title: string;
    slug: string;
    content: string;
    image?: string | null;
    published: boolean | false;
    createdAt: Date;
    updatedAt: Date;
    authorId: string;
    metadata: {
        title: string;
        description?: string;
        keywiords?: string[];
        slug?: string;
    };
}

interface PostStaticParams {
    slug: string;
    content: string;
    metadata: {
        title: string;
        description?: string;
        keywiords?: string[];
        slug?: string;
    };
    image?: string | null;
}

export type { Post, PostStaticParams };