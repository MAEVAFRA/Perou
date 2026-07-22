# 🏔️ Pérou Planner Pro - Version Professionnelle

Application web collaborative pour planifier un voyage au Pérou à plusieurs.

## ✨ Features Principales

### 🔐 Sécurité
- Authentification par mot de passe
- Gestion multi-utilisateurs (Maeva, Briac, Solene, Maze)
- Données sécurisées sur serveur

### 🎯 Fonctionnalités
- **Header personnalisable** - Upload photo de fond
- **Upload photos** - Jusqu'à 5 photos par activité
- **Carousel** - Navigation fluide entre les photos
- **Likes/Dislikes** - Chaque utilisateur peut voter
- **Commentaires** - Discussions par activité
- **Catégories modifiables** - Ajoutez vos propres catégories
- **Budget en temps réel** - Calcul automatique par personne
- **Export TXT** - Sauvegardez votre liste

### 📱 Design Pro
- Interface moderne et responsive
- Accessible sur mobile, tablet, desktop
- Optimisé pour production

---

## 🚀 Installation Locale

```bash
# Cloner/télécharger
cd perou-pro

# Installer dépendances
npm install

# Lancer le serveur
npm start

# Accéder via http://localhost:3000
```

**Mot de passe par défaut**: `perou2024`

---

## 🌐 Déployer en Ligne

### Render (Recommandé - Gratuit)

1. Push le repo sur GitHub
2. Va sur [render.com](https://render.com)
3. "New Web Service" → Connecte GitHub
4. Sélectionne ce repo
5. Deploy automatique!

### Railway

1. Push sur GitHub
2. Va sur [railway.app](https://railway.app)
3. Importe GitHub repo
4. Prêt!

---

## 📊 Structure

```
perou-pro/
├── server.js           # Backend Express
├── package.json        # Dépendances
├── public/
│   └── index.html      # Frontend complet
├── data/               # Sauvegardé auto
│   ├── activities.json
│   └── config.json
├── .env                # Config
└── README.md
```

---

## 🔧 Configuration

### Changer le mot de passe

Dans `server.js`, modifier:
```javascript
password: 'votre_nouveau_mdp'
```

Relancer le serveur.

### Ajouter utilisateurs

Dans `server.js`, modifier:
```javascript
users: ['Maeva', 'Briac', 'Solene', 'Maze', 'Nouveau']
```

---

## 📝 Utilisation

1. **Connexion** - Entrez le mot de passe
2. **Sélectionner utilisateur** - Choisir votre nom
3. **Parcourir activités** - Par catégories
4. **Sélectionner** - Cocher les activités
5. **Commenter & Voter** - Likes/commentaires
6. **Ajouter** - Créer vos propres activités
7. **Exporter** - Télécharger la liste

---

## 🎨 Personnalisation

- Changer la photo header (bouton 📷)
- Uploader des photos pour chaque activité
- Créer des catégories personnalisées
- Modifier le mot de passe de connexion

---

## 🤝 Multi-utilisateurs

Parfait pour:
- Voyages en groupe
- Planification collaborative
- Partage budget
- Votes collectifs

Tous les changements sont synchronisés en temps réel!

---

## 📞 Support

Questions? Checkez le code ou les commentaires!

**Bon voyage au Pérou! 🏔️🦙**
