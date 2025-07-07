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

Moody est une application web full‑stack conçue dans le cadre du titre de Développeur Web Fullstack a la 3W Academy, presentée le 9 juillet 2025.

- **Problématique** : centraliser ses recettes issues de divers supports (réseaux sociaux, carnets, livres) et les retrouver facilement.
- **Objectifs** : offrir un espace personnel pour ajouter, classer, filtrer (type de plat, régime, origine, mood) et partager des recettes, le tout sur une application moderne, securisée et agréable a utiliser au quotidien.

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

1. Clonez le dépôt :

bash
git clone https://github.com/votre‑org/moody.git
cd moody

2. Installez les dépendances :

bash

# Frontend

cd frontend && npm install

# Backend

cd ../backend && npm install

3. Configurez les variables d’environnement dans .env (voir .env.example)
4. Lancez les serveurs :

bash

# Backend

npm run dev

# Frontend

npm run dev

5. Accédez à l’application : http://localhost:3000

---

## Structure du projet

moody-app/
├─ frontend/
│ ├─ public/
│ │ ├─ assets/
│ │ ├─ fonts/
│ │ ├─ icons/
│ │ └─ img/
│ ├─ src/
│ │ ├─ api/
│ │ ├─ components/
│ │ │ ├─ atoms/
│ │ │ ├─ layouts/
│ │ │ ├─ molecules/
│ │ │ └─ organisms/
│ │ ├─ hooks/
│ │ ├─ pages/
│ │ ├─ providers/
│ │ ├─ stores/
│ │ ├─ styles/
│ │ │ ├─ abstracts/
│ │ │ ├─ base/
│ │ │ ├─ components/
│ │ │ └─ layout/
│ │ ├─ types/
│ │ ├─ utils/
│ │ └─ wrappers/
│ ├─ .browserslistrc
│ ├─ eslint.config.mjs
│ ├─ next.config.ts
│ ├─ package-lock.json
│ ├─ package.json
│ ├─ tsconfig.json
│ └─ .gitignore
└─ backend/
├─ config/
├─ controllers/
├─ database/
├─ middlewares/
├─ prisma/
├─ routes/
├─ index.js
├─ package-lock.json
├─ package.json
└─ .gitignore

---

## Accessibilité

- HTML sémantique (<header>, <nav>, <main>, <button>, <form>)
- WCAG 2.1 niveau AA : contrastes > 4.5:1, labels associés aux inputs, aria‑labels
- Navigation clavier fluide (tabindex, focus)
- Alt text pour toutes les images descriptives

---

## RGPD et sécurité

- Consentement RGPD à l’inscription (checkbox obligatoire)
- Mots de passe hachés avec bcrypt
- JWT
- Rate‑limiting, Helmet, CORS configurés
- Validation des données (express‑validator)

---

## Axes d'amélioration

- Notifications (emails, notifications)
- Favoris & notes
- Galerie photo après réalisation
- Modération semi‑automatique (IA)

---

_Merci !_
