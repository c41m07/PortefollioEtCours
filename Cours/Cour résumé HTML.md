# Cours HTML et CSS 

## Introduction
Ce cours aborde de façon détaillée les bases nécessaires à la création d'une page web complète à l'aide de HTML et CSS. Idéal pour développeurs juniors débutants.

## Structure d'une page HTML

### Éléments essentiels du HTML :
- **DOCTYPE** : Indique au navigateur que la page est en HTML5.
- **html** : Balise racine qui contient tout le contenu HTML.
- **head** : Section non visible contenant des informations importantes pour le navigateur :
  - meta charset="UTF-8" : Définit l'encodage des caractères.
  - meta name="viewport" : Assure une bonne visualisation sur tous les appareils.
  - meta name="description" : Courte description du contenu de la page.
  - link rel="stylesheet" href="styles.css" : Liaison avec la feuille CSS externe.
- **title** : Titre affiché dans l'onglet du navigateur.
- **body** : Contient tout ce qui est affiché à l'utilisateur.

### Structuration sémantique :
- **header** : En-tête de la page, contient généralement le logo et la navigation.
- **nav** : Menu de navigation permettant de passer facilement d'une page à l'autre.
- **main** : Partie centrale qui présente le contenu principal.
- **footer** : Pied de page contenant souvent des mentions légales, coordonnées ou liens utiles.

## Les éléments HTML courants détaillés :

### Titres :
- **h1 à h6** : Définissent des titres allant du plus important (h1) au moins important (h6).

### Texte :
- **p** : Paragraphe standard de texte.
- **strong** : Rend le texte important en gras.
- **em** : Met l'accent sur du texte en italique.
- **mark** : Met en évidence du texte par un surlignement.
- **blockquote** : Utilisé pour les citations ou extraits.
- **pre** : Texte préformaté, conserve les espaces et retours à la ligne.
- **code** : Présente des extraits de code de façon claire.

### Médias :
- **img** : Intègre des images.
- **video** : Affiche des vidéos.
- **audio** : Permet de lire des sons.
- **iframe** : Intègre des contenus externes (cartes, vidéos YouTube...).

### Listes :
- **ul** : Liste avec puces non ordonnées.
- **ol** : Liste ordonnée avec numéros.
- **dl** : Liste de définitions avec un terme (**dt**) et sa définition (**dd**).

### Formulaires :
- **form** : Permet d'envoyer des informations au serveur.
- **input** : Champ de saisie (texte, email, mot de passe, nombre, date, fichier, checkbox, radio).
- **select** : Liste déroulante avec plusieurs options.
- **textarea** : Zone permettant une saisie de texte étendue.
- **button** : Bouton permettant de soumettre ou réinitialiser le formulaire.

### Tableaux :
- **table** : Définit un tableau.
  - **thead** : En-tête du tableau avec des titres (**th**).
  - **tbody** : Corps du tableau contenant les données (**td**).
  - **tr** : Ligne dans un tableau.
  - **th** : Cellule d'en-tête, généralement en gras et centrée.
  - **td** : Cellule standard contenant des données.

## Initiation détaillée au CSS

### Syntaxe basique du CSS :
```css
sélecteur {
    propriété: valeur;
}
```

### Exemples de mise en forme pratiques :
- **Classe `.mon_texte`** : Personnalisation poussée du texte avec couleur (violet), taille (48px) et police (Verdana).
- **ID `#presentation`** : Stylise spécifiquement une section avec couleur de fond bleue et dimensions précises.
- **Balises spécifiques (`ul`, `h1`, `p`)** : Application directe de styles à des éléments HTML courants pour améliorer leur rendu visuel.

### Liaison entre HTML et CSS :
Lier la feuille CSS au HTML :
```html
<link rel="stylesheet" href="mapage.css">
```

### Méthodes détaillées de sélection :
- **Classe (`.classe`)** : Permet d'appliquer le même style à plusieurs éléments HTML.
- **ID (`#id`)** : Utilisé pour cibler précisément un seul élément.
- **Balise (`balise`)** : Affecte tous les éléments d'une même balise.

## Conclusion
Avec ce cours détaillé, tu as toutes les bases nécessaires pour structurer et styliser efficacement des pages web attractives avec HTML et CSS. Pratique régulièrement pour maîtriser pleinement ces outils.