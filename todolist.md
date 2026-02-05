# TODO LIST --- Projet Blog CMS Next.js

## 🧩 Étape 1 --- Setup du projet

-   [x] Créer un projet Next.js : `npx create-next-app@latest`
-   [x] Installer Prisma : `npm install prisma @prisma/client`
-   [x] Initialiser Prisma : `npx prisma init`
-   [x] Configurer le fichier `schema.prisma`
-   [x] Lancer les migrations : `npx prisma migrate dev`
-   [x] Installer Tailwind CSS
-   [x] Configurer `/lib/prisma.ts`

## 🔐 Étape 2 --- Authentification (NextAuth)

-   [ ] Installer NextAuth : `npm install next-auth`
-   [ ] Configurer un provider Credentials
-   [ ] Créer la route `/api/auth/[...nextauth]`
-   [ ] Créer la page `/auth/register`
    -   [ ] Formulaire email / password / confirm password\
    -   [ ] Hash avec bcrypt\
-   [ ] Créer la page `/auth/login`
-   [ ] Redirection vers `/dashboard` après login
-   [ ] Ajouter un bouton Logout dans la navbar

## 📰 Étape 3 --- Pages publiques du blog

-   [ ] Créer `/blog/page.tsx` (liste d'articles)
-   [ ] Composant `PostCard`
-   [ ] Récupérer les posts via Prisma
-   [ ] Page article : `/blog/[slug]/page.tsx`
    -   [ ] Rendu Markdown (`react-markdown`)
    -   [ ] Gestion des images
-   [ ] Ajouter SEO dynamique avec `generateMetadata`

## 🛠️ Étape 4 --- Dashboard (CRUD complet)

### 📋 Pages Dashboard

-   [ ] Page `/dashboard`
-   [ ] Liste des posts de l'utilisateur `/dashboard/posts`
-   [ ] Page de création : `/dashboard/posts/new`
-   [ ] Page d'édition : `/dashboard/posts/[id]`

### ✏️ Formulaires

-   [ ] Formulaire :
    -   [ ] Titre\
    -   [ ] Slug (auto-généré)\
    -   [ ] Contenu (éditeur Markdown)\
    -   [ ] Image (Cloudinary ou simple URL)\
    -   [ ] Bouton "Publier / Dépublier"

### 🔧 API Routes / Server Actions

-   [ ] POST --- créer un post\
-   [ ] PATCH --- éditer un post\
-   [ ] DELETE --- supprimer un post\
-   [ ] GET --- récupérer un post (pour la page d'édition)

## 📤 Étape 5 --- Upload d'images (optionnel)

-   [ ] Installer Cloudinary
-   [ ] Ajouter clé API dans `.env`
-   [ ] Créer route `/api/upload`
-   [ ] Stocker l'URL dans la DB

## 🎨 Étape 6 --- UI & UX

-   [ ] Navbar (liens vers Blog, Dashboard, Login/Logout)
-   [ ] Footer simple
-   [ ] Dashboard propre en Tailwind
-   [ ] Indicateur : Article publié / brouillon
-   [ ] Composants réutilisables (inputs, boutons, etc.)

## ⚙️ Étape 7 --- Optimisation

-   [ ] Utiliser Server Components au maximum
-   [ ] Activer l'ISR pour `/blog`
-   [ ] Cache Prisma en Server Actions
-   [ ] Optimiser les images via `next/image`
-   [ ] Ajouter plugins Markdown (rehype/remark)

## 🚀 Étape 8 --- Déploiement

-   [ ] Publier sur GitHub
-   [ ] Déployer sur Vercel
-   [ ] Configurer variables d'environnement (DB_URL, NEXTAUTH_SECRET,
    CLOUDINARY_URL...)
-   [ ] Vérifier pages after build
-   [ ] Ajouter une base PostgreSQL via Vercel ou Supabase
-   [ ] Migrer la DB en prod

## 🎁 Bonus

### 🔍 Recherche

-   [ ] Barre de recherche par titre / slug
-   [ ] Filtre par "publié / brouillon"

### 👥 Rôles

-   [ ] Ajouter champ `role` dans User
-   [ ] Dashboard réservé aux admins

### 💬 Commentaires

-   [ ] Système de commentaires simple
-   [ ] Temps réel (Pusher) --- optionnel
