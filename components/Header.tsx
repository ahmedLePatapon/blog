'use client'
import clsx from 'clsx'

export default function Header() {
    return (
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-gray-200/80 dark:border-gray-800/80 py-4">
            <div className="flex items-center gap-3">
                <div className="text-primary size-7">
                    {/* <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z"></path>
                    </svg> */}
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 6H42L36 24L42 42H6L12 24L6 6Z" fill="currentColor"></path>
                    </svg>
                </div>
                <h2 className="text-lg font-bold tracking-tight">Mon blog Apiculture</h2>
            </div>


            <div className="flex items-center gap-6">
                <div className="hidden md:flex items-center gap-6">
                    <a className="text-sm font-medium text-text-secondary-light dark:text-text-secondary-dark hover:text-text-primary-light dark:hover:text-text-primary-dark transition-colors" href="#">Blog</a>
                    <a className="text-sm font-medium text-text-secondary-light dark:text-text-secondary-dark hover:text-text-primary-light dark:hover:text-text-primary-dark transition-colors" href="#">Dashboard</a>
                </div>


                <button className={clsx('flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-9 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[-0.01em] hover:opacity-90 transition-opacity')}>
                    <span className="truncate">Login</span>
                </button>
            </div>
        </header>
    )
}

// <header
//     class="flex items-center justify-between whitespace-nowrap border-b border-solid border-[#E5E7EB] dark:border-gray-800 px-4 sm:px-10 py-3">
//     <div class="flex items-center gap-4 text-[#111827] dark:text-white">
//         <div class="size-6 text-primary">
//             <svg fill="none" viewbox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M6 6H42L36 24L42 42H6L12 24L6 6Z" fill="currentColor"></path>
//             </svg>
//         </div>
//         <h2
//             class="text-[#111827] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">
//             ModernBlog</h2>
//     </div>
//     <div class="hidden sm:flex flex-1 justify-end gap-8">
//         <div class="flex items-center gap-9">
//             <a class="text-[#111827] dark:text-gray-300 hover:text-primary dark:hover:text-primary text-sm font-medium leading-normal"
//                 href="#">Home</a>
//             <a class="text-[#111827] dark:text-gray-300 hover:text-primary dark:hover:text-primary text-sm font-medium leading-normal"
//                 href="#">All Articles</a>
//             <a class="text-[#111827] dark:text-gray-300 hover:text-primary dark:hover:text-primary text-sm font-medium leading-normal"
//                 href="#">About</a>
//         </div>
//     </div>
// </header>