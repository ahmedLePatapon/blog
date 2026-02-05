export default function Hero() {
    return (
        <div className="flex flex-col items-center justify-center text-center py-20 md:py-32">
            <div className="flex flex-col gap-4 max-w-2xl">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-text-primary-light dark:text-text-primary-dark">Un blog moderne pour les amateurs d'apiculture</h1>
                <h2 className="text-base sm:text-lg text-text-secondary-light dark:text-text-secondary-dark">Venez découvrir les derniers articles sur le monde de l'apiculture et explorerez notre blog pour en apprendre plus.</h2>
            </div>
        </div>
    )
}