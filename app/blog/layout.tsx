import '../globals.css'
import React from 'react'


export const metadata = {
    title: 'MyBlog - A Modern Blog for Today\'s Developer',
    description: "Exploring the latest trends in technology, design, and software development.",
}


export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className="light">
            <head />
            <body className="bg-background-light dark:bg-background-dark font-display text-text-primary-light dark:text-text-primary-dark">
                {children}
            </body>
        </html>
    )
}