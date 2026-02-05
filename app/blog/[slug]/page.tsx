import Image from 'next/image'
import type { Metadata } from 'next'

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import prisma from '@/lib/prisma'

import { formatDate } from '@/lib/formatDate';
import ArticleContent from '@/components/ArticleContent';

export async function generateStaticParams() {
    const posts = await prisma.post.findMany({
        where: { published: true },
        select: { slug: true },
    });

    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>
}): Promise<Metadata> {
    const { slug } = await params;
    const post = await prisma.post.findUnique({
        where: { slug },
        select: {
            title: true,
            content: true,
            image: true,
        },
    });

    if (!post) {
        return {
            title: 'Article non trouvé',
        };
    }

    const description = post.content.slice(0, 160) + '...';

    return {
        title: post.title,
        description,
        openGraph: {
            title: post.title,
            description,
            images: post.image ? [post.image] : [],
            type: 'article',
        },
    };
}

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params;
    const post = await prisma.post.findUnique({
        where: { slug },
        include: { author: true },
    });

    if (!post) {
        return <div>Article non trouvé</div>;
    }

    const content = post.content;

    return (
        <div className="relative flex min-h-screen w-full flex-col group/design-root overflow-x-hidden">
            <div className="layout-container flex h-full grow flex-col">
                <div className="flex flex-1 justify-center">
                    <div className="layout-content-container flex flex-col w-full max-w-5xl px-4 md:px-8">

                        <Header />

                        <main className="flex-1 py-12">
                            <article className="max-w-3xl mx-auto">
                                {/* Hero Image */}
                                {post.image && (
                                    <div className="relative w-full h-96 mb-8 rounded-lg overflow-hidden">
                                        <Image
                                            src={post.image}
                                            alt={post.title}
                                            fill
                                            className="object-cover"
                                            priority
                                        />
                                    </div>
                                )}

                                {/* Article Header */}
                                <header className="mb-8">
                                    <h1 className="text-4xl font-bold text-text-primary-light dark:text-text-primary-dark mb-4">
                                        {post.title}
                                    </h1>
                                    <div className="flex items-center gap-4 text-sm text-text-secondary-light dark:text-text-secondary-dark">
                                        <span>Par {post.author.name || post.author.email}</span>
                                        <span>•</span>
                                        <time dateTime={new Date(post.createdAt).toISOString()}>
                                            {formatDate(new Date(post.createdAt))}
                                        </time>
                                    </div>
                                </header>

                                {/* Article Content */}
                                <ArticleContent content={content} />
                            </article>
                        </main>

                        <Footer />
                    </div>
                </div>
            </div >
        </div >
    )
}
