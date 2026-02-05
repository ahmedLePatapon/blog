import { Post, PostStaticParams } from '@/types/post'
import ImageCard from './ImageCard'


export default async function ArticleGrid({ posts }: { posts: Post[] }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((p) => (
                <div className="flex flex-col gap-4 group" key={p.title}>
                    <ImageCard src={p.image ?? 'https://lh3.googleusercontent.com/aida-public/AB6AXuAzcd_Vdwao8gwtmQFCwv_uoQ2o2NasM2Z0AWAQg_iK6RAo_fLcTZyDGFCeG02DM1BXWAgmZUXyP4FVgNv8YLSQwbxl-H7L6mVz-vt0h48N5IIfkvjyMXuwIm7HdipfPoR7UOW2_gWo6q-bMSwZK9fRzb7MT9IZ_Q_Cw7kSQTrPcmvrWwBXEWDuS9LRJekr406TgVRa6HWXeZ7nr0wpMEO0ndAV49TqPtJNtkWxbhYpe4ctHCBRKOGd26pONvApQ2kYtZaDJrs9g_w'} alt={p.metadata.title} />
                    <div>
                        <h3 className="text-lg font-bold leading-snug text-text-primary-light dark:text-text-primary-dark">{p.title}</h3>
                        <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm mt-1">{p.description}</p>
                        <a className="inline-flex items-center gap-1 text-primary text-sm font-medium mt-3 group-hover:underline" href={`/blog/${p.slug}`}>
                            Lire l'article <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
                        </a>
                    </div>
                </div>
            ))}
        </div>
    )
}