# Cours JavaScript pour Débutants

## 1. Variables

### Déclaration de variables
- Utilisation de `let` pour une variable modifiable :
```js
let boite = 'ma boite';
```

- Utilisation de `const` pour une constante :
```js
const etagere = 'mon étagère';
```

### Portée des variables
```js
if (boite === 'ma boite') {
  let boite2 = 'ma boite';
  // Accessible uniquement à l'intérieur de ce bloc
}
// console.log(boite2); // Erreur, boite2 non définie ici
```

---

## Tableaux

### Créer et manipuler un tableau
```js
let marquesVoiture = ['Peugeot', 'Citroen'];
marquesVoiture.push('Audi'); // Ajoute 'Audi' au tableau
```

### Parcourir un tableau

- Avec `for of` (accède aux valeurs) :
```js
for (const marque of marquesVoiture) {
  console.log(marque);
}
```

- Avec `for in` (accès aux indices) :
```js
for (const index in marquesVoiture) {
  console.log(index, marquesVoiture[index]);
}
```

- Avec boucle classique `for` :
```js
for (let i = 0; i < marquesVoiture.length; i++) {
  console.log(marquesVoiture[i]);
}
```

---

## Fonctions

### Exemple : Calculer une moyenne avec une fonction

```js
function calculMoyenne(notes) {
  let totalNote = 0;
  for (const note of notes) {
    totalNote += note;
  }
  return (totalNote / notes.length).toFixed(2);
}

const notesLaurent = [10, 15, 8, 12, 14.5, 13.5];
console.log(calculMoyenne(notesLaurent));
```

---

## Manipulation du DOM

### Exemple d'interaction avec le DOM

```html
<div id="ma-div">Cliquez-moi</div>
```

```js
const maDiv = document.getElementById('ma-div');

maDiv.addEventListener('click', (event) => {
  event.currentTarget.classList.toggle('clicked');
});
```

### Modifier les styles au survol
```js
const carreBleus = document.querySelectorAll('body > div.carre-bleu');

carreBleus.forEach((carreBleu) => {
  carreBleu.addEventListener('mouseover', (event) => {
    event.currentTarget.style.background = 'green';
  });

  carreBleu.addEventListener('mouseleave', (event) => {
    event.currentTarget.style.removeProperty('background');
  });
});
```

### Bloquer l'action par défaut d'un lien
```js
const googleLink = document.querySelector('#google-link');

googleLink.addEventListener('click', (event) => {
  event.preventDefault();
  document.getElementById('ma-div').classList.add('clicked');
});
```

---

## Exercice pratique

### Multiplier deux nombres saisis par l'utilisateur

**HTML** :
```html
<input type="number" id="number1">
<input type="number" id="number2">
<div id="resultat"></div>
```

**JavaScript** :
```js
const input1 = document.getElementById('number1');
const input2 = document.getElementById('number2');
const resultatDiv = document.getElementById('resultat');

function calculerProduit() {
  const resultat = input1.value * input2.value;
  resultatDiv.textContent = 'Résultat : ' + resultat;
}

// Appelle la fonction dès qu'une valeur change
input1.addEventListener('input', calculerProduit);
input2.addEventListener('input', calculerProduit);
```

---

Ce cours reprend les fondamentaux du JavaScript adaptés à un débutant.
