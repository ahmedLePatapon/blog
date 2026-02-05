import ArticleContent from "@/components/ArticleContent";
import { formatDate } from "@/lib/formatDate";
import Image from "next/image";

export default function ArticlePage(data: any) {
    const { params } = data;
    const post = data.post;
    const content = data.content;

    return (
        <main className="grow">
            {/* PageHeading */}
            <div className="flex flex-wrap justify-start gap-3 p-4">
                <h1
                    className="text-[#111827] dark:text-white text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">
                    {params.title}
                </h1>
            </div>

            {/* ListItem (Author Byline) */}
            <div className="flex items-center gap-4 px-4 min-h-14 justify-start mt-4">
                <div className="flex items-center gap-4">
                    <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-10 w-10"
                        data-alt="Author avatar for Jane Doe"
                        style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDGZ5AXWQYyxHHmL50ECPYafLFDghvna2egsG65i_mt5F_gWi4-qG83A4BtcjUM44oipW7oif7VJWdPAXrCaXM_ltR86FPQZx99eVjQVSSsZybtqsAAnwdF6Pa7zKwJ-ipc9XbbF9_Vw81LoqIlveRCRlgiIA9taPs4QDNfezdAwJKATbM8nhf0LTTg8-81rQWNl6t8nlVMG6qCVQvOdj-rJRruxYL3_cXX25WsCeuJCsOVxBJ_KBCJyfELqRhtMzS4OzzJQWWkf_4")` }}
                    >
                    </div>
                    <p
                        className="text-[#111827] dark:text-gray-200 text-base font-medium leading-normal flex-1 truncate">
                        {post?.author?.name}</p>
                </div>
                <div className="shrink-0">
                    <p className="text-[#6B7280] dark:text-gray-400 text-sm font-normal leading-normal">
                        {formatDate(post.createdAt)}
                    </p>
                </div>
            </div>
            {/* HeaderImage */}
            <div className="@container mt-8">
                <div className="@[480px]:px-4 @[480px]:py-3">
                    <Image src={post.image || 'https://lh3.googleusercontent.com/aida-public/AB6AXuBkyPsX58apYr4ELXkm9yh44XxGzf6gGRWBo4Q9XqK-_52y-gXR4FeBZvgPG6WMJLsCvVk1Pj7BxoL3cRazIcwAFdBvXVzNxz_EaNdr4TbLiCHxOt-HVsBJDah2emANVNthGe-aha3A554-cyiskVl4e7hHhlo0avAm_OLuhIor9zqQPynekkHK85wui88Bd2iybsl8q6ttc6wgSF53ZocQBip3_DWp9vPRzu87EFamarVp3BQwAT5M1XThyainGpO-92myvG8RSsc'}
                        alt={post.title}
                        width={1200} height={384}
                        className="w-full bg-center bg-no-repeat aspect-5/2 bg-cover rounded-lg @[480px]:rounded-xl bg-gray-200 dark:bg-gray-800 overflow-hidden" />
                </div>
            </div>
            {/* BodyText */}
            <ArticleContent content={content} />
        </main>
    )
}