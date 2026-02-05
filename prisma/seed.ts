import { PrismaClient, Prisma } from '../app/generated/prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'
import 'dotenv/config'

const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL,
})

const prisma = new PrismaClient({
    adapter,
});

const users = [
    {
        name: 'Alice',
        email: 'alice@lerucherdahmed.fr',
        password: '12345678',
    },
    {
        name: 'Bob',
        email: 'bob@lerucherdahmed.fr',
        password: '12345678',
    },
]
const posts = [
    {
        authorEmail: 'alice@lerucherdahmed.fr',
        title: 'Cycle de vie d\'une colonie d\'abeilles',
        slug: 'cycle-de-vie-dune-colonie-dabeilles',
        content: `
                ---
                title: "Cycle de vie d'une colonie d'abeilles"
                description: "Comprendre l'organisation interne d'une ruche, la hiérarchie des castes et les cycles saisonniers."
                keywords: "colonie abeilles, cycle ruche, reine, ouvrières, apiculture"
                slug: "cycle-colonie"
                tags: ["apiculture", "abeilles", "ruche", cycle de vie", "colonie", "hiérarchie des castes", "cycles saisonniers"]
                ---

                # Cycle de vie d'une colonie d'abeilles

                Une colonie d’abeilles fonctionne comme un super-organisme structuré autour de trois castes.

                ## La reine

                - Une seule par ruche
                - Pond jusqu’à 2 000 œufs / jour
                - Espérance de vie : 3 à 5 ans

                ## Les ouvrières

                | Phase | Âge | Rôle |
                |-------|-----|------|
                | Nettoyeuses | 1–3 jours | Entretien des cellules |
                | Nourrices | 4–10 jours | Nourrissent le couvain |
                | Bâtisseuses | 10–20 jours | Produisent la cire |
                | Gardiennes | 18–25 jours | Défendent la ruche |
                | Butineuses | 25+ jours | Récoltent nectar & pollen |

                ---

                ## Cycle saisonnier

                | Saison | Activité |
                |--------|----------|
                | Printemps | Expansion et ponte |
                | Été | Production de miel |
                | Automne | Stockage et réduction |
                | Hiver | Hivernage |
                `,
        tags: ["apiculture", "abeilles", "ruche", "cycle de vie", "colonie", "hiérarchie des castes", "cycles saisonniers"],
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB18ZIEhy9Xasri7m_0N7qeIW_pjX-uQRnucYQURcmONx8erPJ0z7XO7RuKTNp_nzpf4HJntBQwY01NH0aG20y6_MlQk-5dYeUqnvPL8cjzJsvLJU49o5DAtS5OKOhhdWyatVOqVJMWZoz-rSuE54maKgwpK8TaKFFRd99Sg2eYqTZ9lKmJK2Jv9oiv_EjL7Ip_Bc6-N5MK9Kgj2FKTsnK37Aj1IzhiO0A-ez_EMKVykMlpU28GJiV6jAY-wUlrwaczv4FdLvjS8OU',
    },
    {
        authorEmail: 'alice@lerucherdahmed.fr',
        title: 'Comment installer sa première ruche',
        slug: 'comment-installer-sa-premiere-ruche',
        content: `
                ---
                title: "Comment installer sa première ruche"
                description: "Guide étape par étape pour installer une ruche au bon endroit, choisir l'essaim et préparer les cadres."
                keywords: "installer ruche, démarrer apiculture, emplacement ruche"
                slug: "installer-ruche"
                tags: ["installer ruche", "démarrer apiculture", "emplacement ruche", "choisir essaim", "cadres"]
                ---

                # Comment installer sa première ruche

                L’installation conditionne la santé de la colonie et la facilité de travail.

                ## Choisir l'emplacement

                - Orientation : sud / sud-est
                - À l'abri du vent
                - Près d’une source d’eau
                - Zone calme, peu fréquentée

                ## Acquérir un essaim

                - Achat auprès d'un apiculteur
                - Capture d'essaim (autorisé)
                - Nuclei d'élevage

                ---

                ## Règles légales

                - Déclaration annuelle obligatoire
                - Respect des distances de voisinage
                - Identification sur la ruche
        `,
        tags: ["installer ruche", "démarrer apiculture", "emplacement ruche", "choisir essaim", "cadres"],
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAzcd_Vdwao8gwtmQFCwv_uoQ2o2NasM2Z0AWAQg_iK6RAo_fLcTZyDGFCeG02DM1BXWAgmZUXyP4FVgNv8YLSQwbxl-H7L6mVz-vt0h48N5IIfkvjyMXuwIm7HdipfPoR7UOW2_gWo6q-bMSwZK9fRzb7MT9IZ_Q_Cw7kSQTrPcmvrWwBXEWDuS9LRJekr406TgVRa6HWXeZ7nr0wpMEO0ndAV49TqPtJNtkWxbhYpe4ctHCBRKOGd26pONvApQ2kYtZaDJrs9g_w',
    },
    {
        authorEmail: 'alice@lerucherdahmed.fr',
        title: 'Introduction à l\'apiculture: pourquoi commencer?',
        slug: 'introduction-apiculture-pourquoi-commencer',
        content: `
        ---
        title: "Introduction à l'apiculture : Pourquoi commencer ?"
        description: "Découvrez les bases de l'apiculture, son importance écologique et pourquoi elle attire de plus en plus de passionnés."
        keywords: "apiculture, débuter apiculture, abeilles, ruche, miel"
        slug: "introduction-apiculture"
        tags: ["apiculture", "débuter apiculture", "abeilles", "ruche", "miel", "écologie", "biodiversité"]
        ---

        # Introduction à l'apiculture : pourquoi commencer ?

        L’apiculture est l’art d’élever des abeilles afin de récolter des produits comme le miel, la cire, le pollen et la propolis. Mais son impact dépasse la production : elle joue un rôle essentiel dans la biodiversité grâce à la pollinisation.

        ## Pourquoi l’apiculture est essentielle

        - 70% des plantes à fleurs dépendent des pollinisateurs
        - Maintient la diversité génétique des écosystèmes
        - Soutient l'agriculture locale
        - Permet une production durable et naturelle

        ## Produits de la ruche

        | Produit | Usage | Intérêt |
        |---------|-------|--------|
        | Miel | Aliment naturel | Énergie rapide, antibactérien |
        | Cire | Cosmétique, bougies | Naturelle et modelable |
        | Propolis | Santé naturelle | Anti-inflammatoire |
        | Gelée royale | Nutrition | Revitalisante |

        ---

        ## Conclusion

        L’apiculture est une activité écologique, durable et éducative. Que vous ayez un jardin ou des hectares de terrain, elle peut s'adapter à vos moyens.

        > Dans notre prochain article, découvrez tout le matériel nécessaire pour démarrer.
        `,
        tags: ["apiculture", "débuter apiculture", "abeilles", "ruche", "miel", "écologie", "biodiversité"],
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAzcd_Vdwao8gwtmQFCwv_uoQ2o2NasM2Z0AWAQg_iK6RAo_fLcTZyDGFCeG02DM1BXWAgmZUXyP4FVgNv8YLSQwbxl-H7L6mVz-vt0h48N5IIfkvjyMXuwIm7HdipfPoR7UOW2_gWo6q-bMSwZK9fRzb7MT9IZ_Q_Cw7kSQTrPcmvrWwBXEWDuS9LRJekr406TgVRa6HWXeZ7nr0wpMEO0ndAV49TqPtJNtkWxbhYpe4ctHCBRKOGd26pONvApQ2kYtZaDJrs9g_w',
    },
    {
        authorEmail: 'bob@lerucherdahmed.fr',
        title: 'Matériel indispensable pour débuter en apiculture',
        slug: 'materiel-indispensable-pour-debuter-en-apiculture',
        content: `
                ---
                title: "Quel matériel pour débuter en apiculture ? Guide complet"
                description: "Liste du matériel essentiel pour démarrer en apiculture : ruche, équipement de sécurité, outils et modèles recommandés."
                keywords: "matériel apiculture, ruche, enfumoir, lève-cadres, débuter apiculture"
                slug: "materiel-indispensable-pour-debuter-en-apiculture"
                tags: ["matériel apiculture", "ruche", "enfumoir", "lève-cadres", "débuter apiculture", "équipement de sécurité", "outils apiculteur"]
                ---

                # Matériel indispensable pour débuter en apiculture

                Pour accompagner une colonie en sécurité, un minimum de matériel est indispensable.

                ## Équipement de sécurité

                - Combinaison complète
                - Gants (cuir ou nitrile)
                - Enfumoir + combustible
                - Bottes montantes

                ## Matériel de ruche

                | Équipement | Rôle | Recommandation |
                |------------|------|----------------|
                | Corps de ruche | Habitat de la colonie | Dadant ou Langstroth |
                | Cadres | Support de cire et couvain | Cire gaufrée conseillée |
                | Hausse | Stockage du miel | 1 à 2 pour début |
                | Grille à reine | Évite la ponte dans la hausse | Facultatif |

                ---

                ## Conseils pour bien choisir

                - Évitez les kits bas de gamme
                - Privilégiez le bois non traité
                - Standardisez votre matériel
                `,
        tags: ["matériel apiculture", "ruche", "enfumoir", "lève-cadres", "débuter apiculture", "équipement de sécurité", "outils apiculteur"],
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC3g7YOiNpCD7kXjM5RWJwEPV-05TGHCjrBzMtIhX-QQb0MtAtrEOq0PJM9LSETnygyjpRuhU7MfIwCLZXqeDM4mGydzOHU7od4UeFVud0fyNEOZhbsl8lswgBwIrmAc6hgCsnSIR2uAPaI3LVSqgeeELIQCXHCGVRFVQbUCymPq8cW1ZIAeW1gXsEyjayGOR9Gfu6YsXewA2Y5AVH4UYC1kvl4viINdAGIdCO673tSBEiNa7dQVaL3PvSP6hw1USLOwS26V2bmtT8',
    },
    {
        authorEmail: 'bob@lerucherdahmed.fr',
        title: 'Récolter et extraire son miel',
        slug: 'recolter-et-extraire-son-miel',
        content: `
            ---
            title: "Récolter et extraire son miel"
            description: "Méthode simple et propre pour extraire le miel sans affaiblir sa colonie."
            keywords: "récolte miel, extraction miel, apiculture débutants"
            slug: "recolte-miel"
            tags: ["récolte miel", "extraction miel", "apiculture débutants", "désoperculer", "extraction centrifuge", "filtrage miel"]
            ---

            # Récolter et extraire son miel

            La récolte doit être faite avec soin pour préserver la colonie.

            ## Quand récolter ?

            - Cadres operculés à +80%
            - Température ≥ 20°C
            - Fin de la floraison principale

            ## Étapes

            1. Retirer les hausses
            2. Désoperculer
            3. Extraction centrifuge
            4. Filtrer
            5. Décristallisation éventuelle
            6. Mise en pot

            ---

            ## Attention

            - Ne jamais récolter les cadres du corps
            - Ne pas diluer avec de l’eau
            - Stocker à l’abri de la lumière et de la chaleur
        `,
        tags: ["récolte miel", "extraction miel", "apiculture débutants", "désoperculer", "extraction centrifuge", "filtrage miel"],
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC3g7YOiNpCD7kXjM5RWJwEPV-05TGHCjrBzMtIhX-QQb0MtAtrEOq0PJM9LSETnygyjpRuhU7MfIwCLZXqeDM4mGydzOHU7od4UeFVud0fyNEOZhbsl8lswgBwIrmAc6hgCsnSIR2uAPaI3LVSqgeeELIQCXHCGVRFVQbUCymPq8cW1ZIAeW1gXsEyjayGOR9Gfu6YsXewA2Y5AVH4UYC1kvl4viINdAGIdCO673tSBEiNa7dQVaL3PvSP6hw1USLOwS26V2bmtT8',
    }
]

export async function main() {
    console.log('🔥 Reset database...')
    await prisma.articleTag.deleteMany()
    await prisma.tag.deleteMany()
    await prisma.post.deleteMany()
    await prisma.user.deleteMany()

    console.log('🌱 Seeding database...')
    console.log('👤 Creating users...')
    for (const u of users) {
        await prisma.user.create({ data: u })
    }
    console.log('🏷️ Preparing unique tags...')
    const uniqueTagNames = [
        ...new Set(posts.flatMap((p) => p.tags)),
    ]
    console.log('🏷️ Creating tags...')
    for (const t of uniqueTagNames) {
        await prisma.tag.create({
            data: { name: t },
        })
    }
    console.log('📝 Creating posts + linking tags...')
    for (const p of posts) {
        const author = await prisma.user.findUnique({
            where: { email: p.authorEmail },
        })

        const newPost = await prisma.post.create({
            data: {
                title: p.title,
                slug: p.slug,
                content: p.content,
                image: p.image,
                authorId: author!.id,
            },
        })

        // Relier les tags (table ArticleTag)
        for (const tagName of p.tags) {
            const tag = await prisma.tag.findUnique({
                where: { name: tagName },
            })

            await prisma.articleTag.create({
                data: {
                    articleId: newPost.id,
                    tagId: tag!.id,
                },
            })
        }
    }
    console.log('✅ Seed terminé !')
}

main().catch((e) => {
    console.error(e)
    process.exit(1)
})