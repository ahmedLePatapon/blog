import type { MDXComponents } from 'mdx/types'
import React from 'react'
import { highlight } from 'sugar-high'

function slugify(str: string) {
    return str
        .toString()
        .toLowerCase()
        .trim() // Remove whitespace from both ends of a string
        .replace(/\s+/g, '-') // Replace spaces with -
        .replace(/&/g, '-and-') // Replace & with 'and'
        .replace(/[^\w\-]+/g, '') // Remove all non-word characters except for -
        .replace(/\-\-+/g, '-') // Replace multiple - with single -
}

function createHeading(level: number) {
    const Heading = ({ children }: { children: React.ReactNode }) => {
        let slug = slugify(children as string)
        return React.createElement(
            `h${level}`,
            { id: slug },
            [
                React.createElement('a', {
                    href: `#${slug}`,
                    key: `link-${slug}`,
                    className: 'anchor',
                }),
            ],
            children
        )
    }

    Heading.displayName = `Heading${level}`

    return Heading
}

const components: MDXComponents = {
    article: (props) => <article className="prose prose-lg dark:prose-invert max-w-none" {...props} />,
    a: function MDXLink(props) {
        let href = props.href

        if (href.startsWith('/')) {
            return (
                <a href={href} {...props}>
                    {props.children}
                </a>
            )
        }

        if (href.startsWith('#')) {
            return <a {...props} />
        }

        return <a target="_blank" rel="noopener noreferrer" {...props} />
    },
    img: function RoundedImage(props) {
        return <img alt={props.alt} className="rounded-lg" {...props} />
    },
    code: function Code({ children, ...props }) {
        let codeHTML = highlight(children)
        return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
    },
    h1: createHeading(1),
    h2: createHeading(2),
    h3: createHeading(3),
    h4: createHeading(4),
    h5: createHeading(5),
    h6: createHeading(6),
}

export function useMDXComponents(): MDXComponents {
    return components
}