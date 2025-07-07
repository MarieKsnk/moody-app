# Moody

> **Carnet de recettes digital & personnel**

---

## Sommaire

1. [Contexte et objectifs](#contexte-et-objectifs)
2. [Fonctionnalités principales](#fonctionnalités-principales)
3. [Stack technique](#stack-technique)
4. [Installation et lancement](#installation-et-lancement)
5. [Structure du projet](#structure-du-projet)
6. [Accessibilité](#accessibilité)
7. [RGPD et sécurité](#rgpd-et-sécurité)
8. [Axes d'amélioration](#axes-damélioration)

---

## Contexte et objectifs

Moody est une application web full‑stack conçue dans le cadre du titre de Développeur Web Fullstack à la 3W Academy, présentée le 9 juillet 2025.

- **Problématique** : centraliser ses recettes issues de divers supports (réseaux sociaux, carnets, livres) et les retrouver facilement.
- **Objectifs** : offrir un espace personnel pour ajouter, classer, filtrer (type de plat, régime, origine, mood) et partager des recettes, le tout sur une application moderne, sécurisée et agréable à utiliser au quotidien.

---

## Fonctionnalités principales

- Authentification sécurisée (Inscription / Connexion / JWT)
- CRUD complet des recettes (avec validation de l'admin)
- Filtres avancés : type, ingrédients, origine, régime, mood
- UI responsive (mobile‑first) et design system
- Rôles user / admin avec backoffice de modération

---

## Stack technique

- **Frontend** : React, Next.js, TypeScript, SCSS, Atomic Design, TanStack Query, Zustand, React Hook Form
- **Backend** : Node.js, Express, PostgreSQL, Prisma ORM, JWT, bcrypt, Multer, ImageKit
- **Tests** : Jest, React Testing Library, Supertest
- **Déploiement** : Vercel (front), Render (back)

---

## Installation et lancement

### 1. Clonez le dépôt

```bash
git clone https://github.com/MarieKsnk/moody-app.git
cd moody-app
```

### 2. Installez les dépendances

```bash
# Frontend
cd frontend
npm install

# Backend
cd ../backend
npm install
```

### 3. Configurez les variables d’environnement

Créez deux fichiers `.env` dans `frontend` et `backend`, selon les modèles `.env.example`.

### 4. Lancez les serveurs

```bash
# Backend
cd backend
npm run dev

# Frontend
cd ../frontend
npm run dev
```

### 5. Accédez à l’application

[http://localhost:3000](http://localhost:3000)

---

## Structure du projet

```bash
moody-app/
├─ frontend/
│  ├─ public/
│  │  ├─ assets/
│  │  ├─ fonts/
│  │  ├─ icons/
│  │  └─ img/
│  ├─ src/
│  │  ├─ api/
│  │  ├─ components/
│  │  │  ├─ atoms/
│  │  │  ├─ layouts/
│  │  │  ├─ molecules/
│  │  │  └─ organisms/
│  │  ├─ hooks/
│  │  ├─ pages/
│  │  ├─ providers/
│  │  ├─ stores/
│  │  ├─ styles/
│  │  │  ├─ abstracts/
│  │  │  ├─ base/
│  │  │  ├─ components/
│  │  │  └─ layout/
│  │  ├─ types/
│  │  ├─ utils/
│  │  └─ wrappers/
│  ├─ .browserslistrc
│  ├─ eslint.config.mjs
│  ├─ next.config.ts
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ tsconfig.json
│  └─ .gitignore
├─ backend/
│  ├─ config/
│  ├─ controllers/
│  ├─ database/
│  ├─ middlewares/
│  ├─ prisma/
│  ├─ routes/
│  ├─ index.js
│  ├─ package-lock.json
│  ├─ package.json
│  └─ .gitignore
```

---

## Accessibilité

- HTML sémantique (`<header>`, `<nav>`, `<main>`, `<button>`, `<form>`)
- WCAG 2.1 niveau AA : contrastes > 4.5:1, labels associés aux inputs, `aria-labels`
- Navigation clavier fluide (tabindex, focus)
- `alt` text pour toutes les images descriptives

---

## RGPD et sécurité

- Consentement RGPD à l’inscription (checkbox obligatoire)
- Mots de passe hachés avec bcrypt
- Authentification par JWT
- Sécurisation du backend : rate-limiting, Helmet, CORS
- Validation des données en entrée (express-validator)

---

## Axes d'amélioration

- Notifications (emails, alertes push)
- Favoris & notation des recettes
- Galerie photo après réalisation
- Modération semi‑automatique et importation des recettes instagram (IA)

---

_Merci !_
