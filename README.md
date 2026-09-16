# 🎂 Site d'Anniversaire des 18 ans de Camille 💕

Un site web romantique, interactif et festif créé spécialement pour célébrer les 18 ans de Camille et lui annoncer son cadeau surprise : **une escapade à la Vallée des Singes avec nuitée en chambre d'hôte à 10 minutes** avant le week-end du 18 octobre.

---

## 🌟 Fonctionnalités du Site

1. **Ambiance Romantique & Festive** :
   - Pluie de cœurs et d'étincelles douces en arrière-plan (Canvas).
   - Couleurs douces et chaleureuses (rose poudré, or champagne, blanc crème).
   - Lecteur audio discret avec égaliseur animé pour votre chanson à deux.
   - 100% adapté aux smartphones (iPhone/Android) et ordinateurs.

2. **Compteur d'Amour & Rétrospective** :
   - Compteur automatique du nombre de jours passés ensemble depuis votre rencontre.
   - Galerie de 4 clichés façon **Polaroids réalistes** avec effet d'inclinaison et petites anecdotes.

3. **Mini-Quiz Complice & Blagues Privées** :
   - 4 questions interactives pour tester votre complicité et rigoler ensemble.
   - Réponses personnalisées avec des feedbacks humoristiques.
   - Jauge de déverrouillage pour ouvrir l'accès au cadeau.

4. **Le Grand Dévoilement du Cadeau (Climax)** :
   - Boîte cadeau interactive avec ruban doré et animation pulsante.
   - Explosion de feux d'artifice de confettis au clic !
   - **Billet d'Évasion VIP / Boarding Pass** détaillant le week-end :
     - 🐒 **La Vallée des Singes** (immersion nature avec 450+ primates en liberté).
     - 🏡 **Chambre d'hôte cocooning** à 10 minutes du parc.
     - 📅 **Dates** : à choisir ensemble avant le week-end du 18 octobre (inclus).
   - Bouton pour imprimer ou enregistrer le Pass VIP comme souvenir papier !

---

## 🛠️ Comment Personnaliser le Site

Tout a été conçu pour être modifiable en quelques secondes sans toucher au code complexe !

### 1. Remplacer les photos par les vôtres
Dépose tes photos préférées dans le dossier `assets/images/` :
- `photo1.jpg` : Vos débuts
- `photo2.jpg` : Un fou rire / moment drôle
- `photo3.jpg` : Une sortie / voyage
- `photo4.jpg` : Une jolie photo d'elle ou de vous deux
*(Tu peux aussi mettre des photos réelles de la Vallée des Singes ou de votre chambre d'hôte !)*

Ouvre ensuite `config.js` pour ajuster les noms de fichiers si nécessaire :
```javascript
timeline: [
  {
    title: "Le tout début",
    subtitle: "Le coup de foudre",
    caption: "Là où tout a commencé...",
    image: "assets/images/photo1.jpg", // Mets le nom de ton image ici
    ...
  }
]
```

### 2. Ajouter votre chanson douce (Optionnel)
1. Télécharge votre chanson préférée au format `.mp3`.
2. Dépose-la dans `assets/audio/notre-chanson.mp3`.
3. Le lecteur audio sur le site jouera automatiquement ce morceau quand elle cliquera sur le bouton musical !

### 3. Modifier les textes, les blagues et le quiz
Ouvre le fichier [`config.js`](config.js) avec n'importe quel éditeur de texte (Bloc-notes, VS Code, etc.).
Tu pourras modifier :
- `partnerName` : Ton prénom ou surnom.
- `relationshipStartDate` : La date exacte de votre rencontre (`"AAAA-MM-JJ"`) pour que le compteur soit parfait au jour près.
- `quiz` : Les questions, réponses et messages humoristiques.
- `gift` : Le message d'amour final ou les petites attentions incluses.

---

## 🚀 Comment Mettre le Site en Ligne sur GitHub Pages (.io)

Pour que Camille puisse y accéder directement sur son téléphone via un lien du type `https://ton-pseudo.github.io/anniv-camille` :

### Étape 1 : Créer le dépôt sur GitHub
1. Connecte-toi sur [github.com](https://github.com).
2. Clique sur **New repository** (Nouveau dépôt).
3. Donne un nom, par exemple : `anniv-camille` (ou le nom de ton choix).
4. Laisse-le en **Public** (GitHub Pages gratuit nécessite un dépôt public, ou privé si tu as GitHub Pro).
5. Ne coche pas "Initialize with README" car nous avons déjà tous les fichiers.
6. Clique sur **Create repository**.

### Étape 2 : Envoyer le code depuis ton terminal
Dans ce dossier `c:\Ashi\Dev\AnnivCamille`, exécute les commandes suivantes :

```bash
git add .
git commit -m "Site anniversaire 18 ans Camille"
git branch -M main
git remote add origin https://github.com/TON-PSEUDO-GITHUB/anniv-camille.git
git push -u origin main
```

*(Remplace `TON-PSEUDO-GITHUB` et `anniv-camille` par tes vrais identifiants).*

### Étape 3 : Activer GitHub Pages
1. Sur la page de ton dépôt GitHub, clique sur l'onglet **Settings** (en haut à droite).
2. Dans le menu de gauche, clique sur **Pages**.
3. Dans la section **Build and deployment** :
   - **Source** : Sélectionne `Deploy from a branch`.
   - **Branch** : Choisis `main` et laisse le dossier sur `/ (root)`.
   - Clique sur **Save**.
4. Attends environ 1 à 2 minutes : GitHub affichera un bandeau vert avec le lien magique :  
   `https://TON-PSEUDO.github.io/anniv-camille/`

Tu n'as plus qu'à envoyer le lien à Camille le jour J ! 🎉

---

## 💻 Prévisualisation Locale

Pour tester le site immédiatement sur ton écran :
- Double-clique simplement sur le fichier `index.html` pour l'ouvrir dans ton navigateur web.
- Ou lance une prévisualisation locale avec Python : `python -m http.server 8000` puis rends-toi sur `http://localhost:8000`.
