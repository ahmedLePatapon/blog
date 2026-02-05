import Image from 'next/image'

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import prisma from '@/lib/prisma'

import { formatDate } from '@/lib/formatDate';
import ArticleContent from '@/components/ArticleContent';

// export async function generateStaticParams() {
//     const posts = await getPosts();
//     return posts.map((post) => ({
//         slug: post.slug,
//         title: post.metadata.title,
//         description: post.metadata.description || metadata.description,
//     }))
// }

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


                        <Footer />
                    </div>
                </div>
            </div >
        </div >
    )
}
