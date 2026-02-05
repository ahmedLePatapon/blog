import Header from '../components/Header'
import Hero from '../components/Hero'
import ArticleGrid from '../components/ArticleGrid'
import Footer from '../components/Footer'

import prisma from '@/lib/prisma'
import { Post } from '@/types/post'


export default async function Page() {

  const posts = await prisma.post.findMany({
    orderBy: {
      createdAt: 'desc',
    },
    take: 6,
  }) as Post[];

  const postsWithExcerpt = posts.map(post => ({
    ...post,
    content: post.content.slice(0, 200) + '...',
  }));
  return (
    <div className="relative flex min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <div className="flex flex-1 justify-center">
          <div className="layout-content-container flex flex-col w-full max-w-5xl px-4 md:px-8">

            <Header />

            <main className="grow">

              <Hero />

              <section className="py-10">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-text-primary-light dark:text-text-primary-dark">Derniers articles</h2>
              </section>

              <ArticleGrid posts={postsWithExcerpt} />

            </main>

            <Footer />

          </div>
        </div>
      </div>
    </div>
  )
}