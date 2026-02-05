import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

const config: Config = {
    darkMode: 'class',
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './mdx-components.tsx',
    ],
    theme: {
        colors: {
            ...defaultTheme.colors,
            "primary": "#4299E1", // Muted Blue as per request
            "background-light": "#F9F9F9",
            "background-dark": "#101622",
            "text-primary-light": "#1A202C",
            "text-primary-dark": "#F7FAFC",
            "text-secondary-light": "#718096",
            "text-secondary-dark": "#A0AEC0",
        },
        fontFamily: {
            display: ["Inter", "sans-serif", ...defaultTheme.fontFamily.sans],
        },
        borderRadius: {
            ...defaultTheme.borderRadius,
            DEFAULT: '0.25rem',
            lg: '0.5rem',
            xl: '0.75rem',
            full: '9999px',
        },
    },
    plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}

export default config
