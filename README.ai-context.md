# Circlo – Résumé du projet

## Objectif

Circlo est une application web destinée aux designers, SEO, créatifs et professionnels du web pour collecter, organiser et retrouver facilement des inspirations visuelles ou textuelles (captures, images, vidéos, textes, exemples de pubs, sites, designs, etc.) en leur attribuant des catégories, descriptions et tags. Les contenus sont stockés dans le cloud et peuvent être importés ou capturés directement.

## Fonctionnalités principales

- Authentification (inscription, connexion, gestion de session)
- Ajout/import de médias (images, vidéos, captures d’écran, textes)
- Attribution de tags, catégories, descriptions
- Recherche et filtrage avancés
- Gestion des utilisateurs
- Architecture scalable pour l’ajout de nouvelles features (favoris, collections, partage, notifications, etc.)

## Stack technique

- **Frontend** : React + Vite + TypeScript
- **Backend** : API REST (Node.js/Express, Drizzle ORM, etc.)
- **Monorepo** : pnpm workspaces (apps/web, apps/server, shared)
- **Gestion d’état** : React Query
- **Validation** : Zod
- **Authentification** : BetterAuth
- **UI** : Radix UI, TailwindCSS

## Structure du monorepo

- `apps/web` : Application front-end (React)
- `apps/server` : API backend (Node.js/Express)
- `shared` : Types, schémas, helpers partagés entre front et back

## Structure du frontend (apps/web/src)

- `app/` : Entrée de l’application, providers, routes globales
- `assets/` : Fichiers statiques
- `components/` : Composants UI partagés
- `config/` : Configurations globales
- `features/` : Modules par fonctionnalité (auth, images, tags, users, etc.)
- `hooks/` : Hooks partagés
- `lib/` : Librairies utilitaires
- `stores/` : Stores globaux
- `testing/` : Mocks et helpers de test
- `types/` : Types partagés
- `utils/` : Fonctions utilitaires partagées

## Convention de code

- Architecture inspirée de bulletproof-react (feature-based)
- Imports centralisés dans `shared/src/index.ts`
- ESLint bloque les imports croisés entre features

## Exemples d’usage

- Un designer capture une pub inspirante, l’importe, la tague et la retrouve plus tard via la recherche.
- Un SEO sauvegarde des exemples de landing pages et les classe par thématique.

## Scalabilité

Le projet est conçu pour accueillir facilement de nouvelles features (favoris, collections, partage, notifications, etc.) et pour être maintenable par une équipe ou une IA.
