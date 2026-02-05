import { CustomMDX } from "./Mdx";

interface ArticleContentProps {
    content: string;
    className?: string;
}

export default function ArticleContent({ content, className = '' }: ArticleContentProps) {

    return (
        <article
            className={`prose prose-lg dark:prose-invert max-w-none prose-headings:text-text-primary-light dark:prose-headings:text-text-primary-dark prose-p:text-text-secondary-light dark:prose-p:text-text-secondary-dark prose-a:text-primary prose-strong:text-text-primary-light dark:prose-strong:text-text-primary-dark ${className}`}
        >
            <CustomMDX source={content} />
        </article>
    );
}