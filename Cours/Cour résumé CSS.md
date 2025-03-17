**Cours CSS**

## 1. Sélecteurs CSS

Les sélecteurs CSS ciblent des éléments HTML précis afin d'appliquer des styles spécifiques.

- `.classe` : sélectionne tous les éléments avec la classe spécifiée. Exemple : `.bouton { color: blue; }`
- `#id` : sélectionne l'élément possédant l'ID spécifié (unique). Exemple : `#titre { font-size: 24px; }`
- `element` : sélectionne tous les éléments du même type. Exemple : `p { margin-bottom: 10px; }`
- `element.classe` : sélectionne uniquement les éléments du type spécifié possédant la classe donnée. Exemple : `button.submit { background-color: green; }`
- `element#id` : sélectionne uniquement l'élément du type spécifié avec l'ID donné. Exemple : `div#header { height: 100px; }`
- `*` : sélectionne tous les éléments HTML. Exemple : `* { box-sizing: border-box; }`

## 2. Flexbox

Flexbox permet un agencement flexible et adaptatif d'éléments sur une seule dimension (ligne ou colonne).

```css
.container {
  display: flex; /* active Flexbox */
  flex-direction: row; /* disposition horizontale, utilisez 'column' pour verticale */
  justify-content: space-between; /* espace les éléments horizontalement */
  align-items: center; /* centre verticalement les éléments */
  flex-wrap: wrap; /* permet aux éléments de passer à la ligne */
}
```

## 3. Grid

Grid facilite la création de mises en page complexes sur deux dimensions (colonnes et rangées).

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* crée trois colonnes égales */
  grid-gap: 20px; /* espace entre les éléments de la grille */
}
```

## 4. Box Model

Le modèle de boîte comprend la marge, la bordure, le padding et le contenu.

```css
.element {
  margin: 10px; /* espace externe autour de l'élément */
  border: 1px solid black; /* cadre de l'élément */
  padding: 20px; /* espace interne entre le contenu et la bordure */
}
```

## 4. Animations CSS

Permet d'ajouter des animations visuelles sur les éléments.

```css
@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

.element {
  animation: fadeIn 2s ease-in-out;
}
```

## 5. Variables CSS

Les variables permettent de centraliser les valeurs réutilisables.

```css
:root {
  --couleur-principale: #007bff;
}

.bouton {
  background-color: var(--couleur-principale);
}
```

## 6. Media Queries

Les Media Queries rendent votre site responsive en adaptant les styles à différentes tailles d'écran.

```css
@media screen and (max-width: 768px) {
  .element {
    width: 100%; /* pleine largeur sur mobile */
  }
}
```

## 6. Transformations

Les transformations permettent de manipuler visuellement les éléments.

```css
.element {
  transform: rotate(45deg); /* rotation de l'élément */
}

.element:hover {
  transform: scale(1.2); /* agrandit l'élément au survol */
}
```

## 7. Effets visuels

Ajoutent des styles visuels intéressants tels que des ombres ou des effets de flou.

```css
.element {
  box-shadow: 0 4px 8px rgba(0,0,0,0.2); /* ombre portée */
  filter: blur(2px); /* applique un flou à l'élément */
}
```

Ce guide détaillé est conçu pour vous aider à maîtriser les concepts essentiels du CSS de façon claire et progressive.

