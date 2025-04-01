# Cours Complet HTML & CSS

## Introduction

Ce cours complet couvre les bases fondamentales de la création d'une page web avec HTML et CSS. Il est destiné aux développeurs débutants ou juniors qui souhaitent apprendre à structurer et styliser des pages web modernes et responsives.

---

## Partie 1 : HTML

### 1. Structure de base d'un fichier HTML
```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Description de la page web">

    <!-- Meta pour le partage sur les réseaux sociaux -->
    <meta property="og:title" content="Titre de la page">
    <meta property="og:description" content="Description de la page">
    <meta property="og:image" content="url_vers_image.jpg">

    <!-- Favicon -->
    <link rel="icon" href="favicon.ico" type="image/x-icon">

    <!-- Feuille de style personnelle -->
    <link rel="stylesheet" href="styles.css">

    <!-- Bootstrap CDN -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">

    <title>Ma Page Web</title>
</head>
<body>
<!-- Contenu de la page -->
</body>
</html>
```

### 2. Éléments sémantiques HTML
- `<header>` : en-tête de page
- `<nav>` : barre de navigation
- `<main>` : contenu principal
- `<section>` : section de contenu
- `<article>` : article autonome
- `<aside>` : contenu secondaire
- `<footer>` : pied de page

### 3. Contenu HTML courant
- **Titres** : `<h1>` à `<h6>`
- **Paragraphes** : `<p>`
- **Texte important** : `<strong>`, `<em>`, `<mark>`
- **Listes** : `<ul>`, `<ol>`, `<li>`, `<dl>`, `<dt>`, `<dd>`
- **Liens** : `<a href="">` avec l'attribut `target="_blank"` si besoin
- **Images** : `<img src="" alt="">` (toujours renseigner `alt` pour l'accessibilité)
- **Tableaux** : `<table>`, `<thead>`, `<tbody>`, `<tr>`, `<th>`, `<td>`
- **Formulaires** : `<form>`, `<input>`, `<label>`, `<select>`, `<textarea>`, `<button>`
- **Médias** : `<video>`, `<audio>`, `<iframe>`

### 4. Accessibilité et bonnes pratiques
- Utiliser `alt` sur les images.
- Ajouter des `label` explicites pour les champs de formulaire.
- Utiliser `aria-label`, `role`, ou `aria-hidden` si besoin pour les lecteurs d'écran.

### 5. Commentaires HTML
```html
<!-- Ceci est un commentaire HTML -->
```

---

## Partie 2 : CSS

### 1. Syntaxe CSS de base
```css
sélecteur {
  propriété: valeur;
}
```

### 2. Types de sélecteurs
- `.classe` : sélectionne tous les éléments avec cette classe
- `#id` : sélectionne l'élément avec cet identifiant (unique)
- `balise` : sélectionne tous les éléments de ce type
- `balise.classe`, `balise#id`, `*` (tous les éléments)

### 3. Variables CSS
```css
:root {
  --couleur-primaire: #007bff;
  --couleur-secondaire: #6c757d;
  --taille-texte: 16px;
  --fond-clair: #f8f9fa;
}

body {
  background-color: var(--fond-clair);
  font-size: var(--taille-texte);
  color: var(--couleur-secondaire);
}
```

### 4. Box Model
```css
.element {
  margin: 10px;
  padding: 20px;
  border: 1px solid black;
}
```

### 5. Positionnement et z-index
```css
.element {
  position: relative;
  top: 10px;
  left: 10px;
  z-index: 10;
}
```

### 6. Flexbox
```css
.container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}
```

### 7. Grid
```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
```

### 8. Media Queries
```css
@media screen and (max-width: 768px) {
  .element {
    width: 100%;
  }
}
```

### 9. Pseudo-classes et pseudo-éléments
```css
.element:hover {
  background-color: var(--couleur-primaire);
}

.element::before {
  content: "→ ";
}
```

### 10. Animations CSS
```css
@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

.element {
  animation: fadeIn 2s ease-in-out;
}
```

### 11. Transformations
```css
.element {
  transform: rotate(45deg);
}

.element:hover {
  transform: scale(1.2);
}
```

### 12. Transitions
```css
.element {
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.element:hover {
  background-color: var(--couleur-primaire);
  transform: scale(1.05);
}
```

### 13. Effets visuels
```css
.element {
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  filter: blur(2px);
}
```

### 14. Typographie de base
```css
body {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  color: #333;
}
```

### 15. Commentaires CSS
```css
/* Ceci est un commentaire CSS */
```

---

## Partie 3 : Bootstrap - Notions utiles

### Classes utiles de Bootstrap
- Grille : `.container`, `.row`, `.col`, `.col-md-6`, `.col-lg-4`
- Texte : `.text-center`, `.text-muted`, `.text-danger`
- Espacement : `.m-3`, `.p-2`, `.mt-5`, `.mb-4`
- Affichage : `.d-flex`, `.justify-content-between`, `.align-items-center`
- Boutons : `.btn`, `.btn-primary`, `.btn-outline-secondary`

### Exemple d'utilisation d'un bouton :
```html
<button class="btn btn-primary">Clique moi</button>
```

---

## Conclusion

Avec ce cours HTML et CSS, tu possèdes les bases pour créer une page web bien structurée, esthétique, et responsive. Continue à pratiquer, créer de petites pages, t’inspirer d’autres sites, et tu progresseras rapidement !

---

## Checklist responsive finale
- `viewport` bien défini ✅
- `media queries` présents ✅
- Testé sur écrans mobiles ✅
- Utilisation de Flexbox et/ou Grid ✅
- Comportement adapté sur petites résolutions ✅
- Bootstrap intégré pour un style adaptatif rapide ✅

