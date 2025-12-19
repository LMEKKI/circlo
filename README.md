# Circlo

Circlo est une application moderne permettant d'importer, stocker et gérer des photos, captures d'écran, vidéos, et textes (notes, extraits, etc.). Elle vise à centraliser et organiser vos contenus multimédias de façon simple et sécurisée.

## Fonctionnalités principales

- 📸 Import de photos, captures d'écran et vidéos
- 📝 Import de textes (notes, extraits, etc.) — pratique pour centraliser des informations ou des idées
- 🔒 Authentification sécurisée (Better Auth)
- 🏷️ Gestion des tags et recherche
- 🗄️ Stockage PostgreSQL performant
- 🧑‍💻 API REST moderne (TypeScript, Express)
- 🖥️ Interface web réactive (React + Vite)
- 🛠️ Outils de développement avancés (Drizzle ORM, Drizzle Studio)

## Stack technique

- **Monorepo** : pnpm workspaces
- **Backend** : Node.js, Express, TypeScript, Drizzle ORM, PostgreSQL
- **Frontend** : React, Vite, TypeScript
- **Authentification** : better-auth
- **ORM** : drizzle-orm, drizzle-kit
- **Gestion d'env** : dotenv
- **Dev tools** : tsx, concurrently, Docker, Drizzle Studio

## Prérequis

- Node.js >= 18
- pnpm >= 8
- Docker (pour la base de données)

## Installation

```bash
pnpm install
```

## Lancer le projet en développement

### 1. Démarrer la base de données (PostgreSQL)

```bash
docker compose up -d
```

### 2. Lancer le backend et le frontend

```bash
pnpm dev
```

- Accès API : http://localhost:3001 (par défaut)
- Accès web : http://localhost:3000

## Build & production

```bash
pnpm build
pnpm start
```

## Migrations & ORM

- Générer/appliquer les migrations :
  ```bash
  pnpx drizzle-kit push --filter ./apps/server
  ```
- Lancer Drizzle Studio (visualisation DB) :
  ```bash
  pnpx drizzle-kit studio --filter ./apps/server
  ```

## Variables d'environnement

clé api utiliser pour dev en aucun cas en production
Créez un fichier `.env` à la racine :

```
BETTER_AUTH_SECRET=...  peut étre genere depuis : [better-auth](https://www.better-auth.com/docs/installation)
BETTER_AUTH_URL=http://localhost:3000
DATABASE_URL=postgresql://admin:password@localhost:5432/circlo_db
POSTGRES_DB=circlo_db
POSTGRES_USER=admin
POSTGRES_PASSWORD=password
```

## Structure du monorepo

```
circlo/
├── apps/
│   ├── server/   # API, ORM, migrations
│   └── web/      # Frontend React
├── shared/       # Types et utilitaires partagés
├── docker-compose.yml
├── .env
├── .gitignore
└── ...
```

## Contribution

- Forkez le repo, créez une branche, ouvrez une PR !
- Code style : TypeScript, conventions modernes, clean code

## TODO & évolutions possibles

- [ ] Upload direct depuis mobile
- [ ] OCR sur images/screenshots
- [ ] Partage de collections
- [ ] Notifications
- [ ] Amélioration de la recherche full-text

---

**Circlo** — Un projet moderne pour centraliser et organiser vos contenus multimédias et textes, open-source et évolutif.
