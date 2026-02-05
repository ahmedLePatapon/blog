import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Blog - MyBlog',
    description: "Explorez les derniers articles sur l'apiculture et le monde des abeilles.",
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>
}