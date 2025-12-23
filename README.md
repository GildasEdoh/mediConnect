# MediConnect - Plateforme d'Approvisionnement Pharmaceutique

## Description

MediConnect est une plateforme web professionnelle pour l'approvisionnement pharmaceutique au Togo. Elle permet aux pharmaciens de consulter les catalogues de médicaments, gérer leurs stocks et passer des commandes d'approvisionnement auprès des grossistes.

**Note importante** : Cette application web est destinée aux professionnels (pharmaciens et administrateurs). La fonctionnalité de commande grand public est disponible uniquement sur l'application mobile.

## Fonctionnalités Principales

### Pour les Pharmaciens
- Consultation du catalogue complet de médicaments avec prix et disponibilités
- Gestion des stocks avec alertes de réapprovisionnement
- Commandes d'approvisionnement en gros auprès des fournisseurs
- Tableau de bord avec statistiques de stocks
- Assistant pharmaceutique IA pour informations sur les médicaments

### Pour les Administrateurs
- Vue d'ensemble de la plateforme
- Statistiques des pharmacies partenaires
- Suivi des commandes d'approvisionnement
- Gestion du réseau de pharmacies
- Analyse du volume de transactions

### Fonctionnalités Communes
- Carte interactive du réseau de pharmacies au Togo
- Recherche avancée de médicaments par catégorie
- Assistant IA disponible 24/7
- Interface responsive et moderne

## Installation et Démarrage

### Prérequis

- **Node.js** version 18.17 ou supérieure
- **npm** ou **yarn**

### Étape 1 : Installation

```bash
# Installer les dépendances
npm install
```

### Étape 2 : Lancer en développement

```bash
# Démarrer le serveur de développement
npm run dev
```

### Étape 3 : Accéder à l'application

Ouvrez votre navigateur à l'adresse :

```
http://localhost:3000
```

## Structure du Projet

```
mediconnect/
├── app/
│   ├── page.tsx              # Page d'accueil
│   ├── medicines/            # Catalogue médicaments
│   ├── pharmacies/           # Réseau de pharmacies
│   ├── chat/                 # Assistant IA
│   ├── pharmacy/             # Interface pharmacien
│   ├── admin/                # Tableau de bord admin
│   ├── layout.tsx            # Layout principal
│   └── globals.css           # Styles globaux
├── components/
│   ├── ui/                   # Composants UI (shadcn/ui)
│   └── navigation.tsx        # Navigation principale
├── public/                   # Assets statiques
├── README.md                 # Documentation
├── package.json              # Dépendances
└── next.config.mjs           # Configuration Next.js
```

## Technologies Utilisées

- **Framework** : Next.js 16 (App Router)
- **UI Library** : React 19
- **Composants** : shadcn/ui
- **Styles** : Tailwind CSS v4
- **Langage** : TypeScript
- **Icons** : Lucide React

## Commandes Disponibles

```bash
# Développement
npm run dev          # Démarrer le serveur de développement

# Production
npm run build        # Créer un build de production
npm run start        # Démarrer le serveur de production

# Code Quality
npm run lint         # Vérifier le code
```

## Configuration

### Données Mock

L'application utilise actuellement des données mockées pour la démonstration :

- **Catalogue médicaments** : `app/medicines/page.tsx`
- **Réseau pharmacies** : `app/pharmacies/page.tsx`
- **Inventaire** : `app/pharmacy/page.tsx`
- **Commandes** : `app/admin/page.tsx`

### Intégration Base de Données

Pour connecter une vraie base de données (Supabase, Neon, PostgreSQL) :

1. Créer un fichier `.env.local` avec vos variables d'environnement
2. Configurer les connexions API dans `lib/`
3. Remplacer les données mock par des appels API

Exemple `.env.local` :
```env
DATABASE_URL=your_database_url
NEXT_PUBLIC_API_URL=your_api_url
```

## Navigation

- **Accueil** (`/`) : Présentation des services
- **Catalogue** (`/medicines`) : Consultation des médicaments disponibles
- **Réseau** (`/pharmacies`) : Carte des pharmacies partenaires
- **Assistant IA** (`/chat`) : Support pharmaceutique intelligent
- **Espace Pharmacien** (`/pharmacy`) : Gestion des stocks
- **Admin** (`/admin`) : Tableau de bord administrateur

## Workflow Pharmacien

1. **Consulter le catalogue** : Parcourir les médicaments avec filtres
2. **Vérifier les stocks** : Identifier les produits à réapprovisionner
3. **Passer commande** : Commander en gros auprès des fournisseurs
4. **Suivre les livraisons** : Monitorer le statut des commandes
5. **Utiliser l'assistant IA** : Obtenir des informations pharmaceutiques

## Responsive Design

L'application est optimisée pour :

- Mobile (320px+)
- Tablette (768px+)
- Desktop (1024px+)

## Sécurité

- Headers de sécurité Next.js configurés
- Protection CSRF intégrée
- Validation des données côté client et serveur
- Variables d'environnement pour données sensibles

## Déploiement

### Sur Vercel (Recommandé)

1. Pusher le code sur GitHub
2. Connecter le repository à Vercel
3. Configurer les variables d'environnement
4. Déployer automatiquement

### Build Local

```bash
npm run build
npm run start
```

## Dépannage

**Problème** : Erreur lors de `npm run dev`
- **Solution** : Vérifier la version de Node.js (`node --version` >= 18.17)

**Problème** : Styles ne s'affichent pas
- **Solution** : Nettoyer le cache Next.js (`rm -rf .next && npm run dev`)

**Problème** : Dépendances manquantes
- **Solution** : Réinstaller (`rm -rf node_modules && npm install`)

## Différences Web vs Mobile

| Fonctionnalité | Web (Pharmaciens) | Mobile (Patients) |
|----------------|-------------------|-------------------|
| Consultation catalogue | ✅ | ✅ |
| Commande médicaments | ❌ (approvisionnement uniquement) | ✅ |
| Gestion stocks | ✅ | ❌ |
| Géolocalisation | ✅ | ✅ |
| Assistant IA | ✅ | ✅ |
| Livraison à domicile | ❌ | ✅ |

## Contribution

Les contributions sont bienvenues :

1. Fork le projet
2. Créer une branche : `git checkout -b feature/nouvelle-fonctionnalite`
3. Commit : `git commit -m 'Ajout nouvelle fonctionnalité'`
4. Push : `git push origin feature/nouvelle-fonctionnalite`
5. Ouvrir une Pull Request

## Licence

MIT License

## Contact

Pour toute question ou support :
- Email : contact@mediconnect.tg
- Site web : https://mediconnect.tg

---

**Développé pour améliorer l'accès aux soins de santé au Togo**
