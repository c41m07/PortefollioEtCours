# Cours Complet JavaScript pour Débutants

## Introduction
Ce cours JavaScript a pour but de fournir une base solide en JavaScript moderne (ES6+) pour les développeurs débutants et juniors. Il couvre les notions fondamentales, la manipulation du DOM, la POO avec classes, l'asynchrone, et les fonctions avancées.

---

## 1. Variables et Types

### Déclaration
```js
let nom = "Kevin";     // modifiable
const age = 34;         // constante
var ancien = true;      // obsolète, à éviter
```

### Types de données
```js
let chaine = "du texte";   // string
let nombre = 42;           // number
let booleen = true;        // boolean
let rien = null;           // null
let inconnu;               // undefined
let tableau = [1, 2, 3];   // array
let objet = { cle: "valeur" }; // object
```

### Hoisting (remontée)
```js
console.log(test); // undefined, pas d'erreur !
var test = "Bonjour";
```

---

## 2. Opérateurs

### Arithmétiques / Comparaison / Logiques
```js
let a = 5 + 2;
a > 4; // true
true && false; // false
```

### Comparaison stricte vs faible
```js
5 == "5";  // true (valeur)
5 === "5"; // false (valeur + type)
```

---

## 3. Structures de Contrôle

### if / else / switch
```js
if (a > 10) {
  console.log("grand");
} else {
  console.log("petit");
}
```

```js
switch (jour) {
  case "lundi":
    console.log("Debut semaine");
    break;
  default:
    console.log("Jour normal");
}
```

---

## 4. Fonctions

### Classique
```js
function saluer() {
  console.log("Bonjour");
}
```

### Fléchée
```js
const saluer = () => console.log("Bonjour");
```

### Callback
```js
setTimeout(() => console.log("3 secondes passées"), 3000);
```

### Closures
```js
function compteur() {
  let count = 0;
  return () => ++count;
}
const clic = compteur();
clic(); // 1
```

---

## 5. Tableaux

### Manipulation
```js
let fruits = ["pomme", "banane"];
fruits.push("kiwi");
```

### Parcours
```js
fruits.forEach(fruit => console.log(fruit));
let nouveaux = fruits.map(fruit => fruit.toUpperCase());
```

### Fonctions utiles
```js
fruits.filter(f => f !== "pomme");
fruits.includes("kiwi");
```

---

## 6. Objets

### Déclaration / Accès
```js
const voiture = {
  marque: "Peugeot",
  modele: "208"
};
console.log(voiture.marque);
```

### Déstructuration
```js
const { marque } = voiture;
```

### Spread / Rest
```js
const copie = { ...voiture, couleur: "bleu" };
```

---

## 7. DOM - Manipulation Web

### Accès aux éléments
```js
const bouton = document.getElementById("btn");
```

### Ajouter des événements
```js
bouton.addEventListener("click", () => alert("cliqué"));
```

### Créer / Supprimer
```js
const p = document.createElement("p");
p.textContent = "Texte dynamique";
document.body.appendChild(p);
p.remove();
```

### Modifier style / classe
```js
div.style.color = "red";
div.classList.add("active");
```

---

## 8. JSON

### Convertir objet → JSON
```js
const obj = { nom: "Kevin" };
const json = JSON.stringify(obj);
```

### Convertir JSON → objet
```js
const objet = JSON.parse(json);
```

---

## 9. JavaScript Asynchrone

### setTimeout / setInterval
```js
setTimeout(() => console.log("1s"), 1000);
setInterval(() => console.log("boucle"), 2000);
```

### Promesse
```js
const promesse = new Promise((resolve, reject) => {
  resolve("Succès");
});

promesse.then(res => console.log(res));
```

### async / await
```js
async function fetchData() {
  const res = await fetch("https://api.exemple.com");
  const data = await res.json();
  console.log(data);
}
```

---

## 10. Programmation Orientée Objet (POO)

### Classe
```js
class Voiture {
  constructor(marque, modele) {
    this.marque = marque;
    this.modele = modele;
  }
  demarrer() {
    console.log(`Démarrage ${this.marque}`);
  }
}
```

### Héritage
```js
class Electrique extends Voiture {
  constructor(marque, modele, batterie) {
    super(marque, modele);
    this.batterie = batterie;
  }
}
```

### Propriétés privées (encapsulation)
```js
class Compte {
  #solde = 0;
  deposer(x) {
    this.#solde += x;
  }
}
```

---

## 11. Stockage local

### localStorage
```js
localStorage.setItem("pseudo", "kevin");
let pseudo = localStorage.getItem("pseudo");
```

### sessionStorage
```js
sessionStorage.setItem("session", "actif");
```

---

## 12. Gestion des erreurs
```js
try {
  JSON.parse("erreur");
} catch (e) {
  console.error("Erreur attrapée :", e);
}
```

---

## Conclusion
Tu connais maintenant les bases du JavaScript moderne et de nombreux concepts clés ! Continue à pratiquer avec des mini-projets (formulaires, todo-lists, quiz, API, jeux...) pour consolider ta compréhension. Et surtout : n'aie pas peur de faire des erreurs, c'est comme ça qu'on progresse !

