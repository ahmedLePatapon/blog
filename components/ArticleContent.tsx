import { CustomMDX } from "./Mdx";

interface ArticleContentProps {
    content: string;
    className?: string;
}

export default function ArticleContent({ content, className = '' }: ArticleContentProps) {

    return (
        <article
            className={`prose prose-lg dark:prose-invert max-w-none px-4 py-8 text-[#111827] dark:text-gray-300 text-base font-normal leading-relaxed ${className}`}
        >
            markdown content here: {content}
            {/* <CustomMDX source={content} /> */}
        </article>
    );
}