# 📘 Cours PHP - Introduction et Fondamentaux

## 🧾 Paragraphe HTML

```html
<p>Ceci est un paragraphe en HTML</p>
```

## 🧾 Paragraphe PHP

```php
<?php
// echo et print permettent d'afficher du texte sur une page web
echo "Ceci est un paragraphe en PHP <br/>";
print "Ceci est un paragraphe en PHP avec print<br/>";
```

- `echo` est plus rapide que `print`.
- `print` retourne `1`, ce qui permet de l’utiliser dans une expression.

## 🔠 Guillemets dans les chaînes

```php
echo "Texte avec guillemets doubles : \"entre guillemets\"<br/>";
echo 'Texte avec guillemets simples : "entre guillemets"<br/>';
```

---

## 🧩 Inclusion de fichiers

```php
include("fichier.php"); // Inclut un fichier sans arrêter l’exécution
require("fichier.php"); // Arrête l’exécution si le fichier est introuvable
```

> ⚠️ On peut inclure un fichier dans un autre fichier déjà inclus ailleurs.

---

## 📌 Syntaxe particulière : les "language constructs"

- `echo`, `print`, `include`, etc. n'ont pas besoin de parenthèses (mais c’est conseillé d’en mettre pour plus de clarté).

---

## 🧪 Les variables en PHP

### 💡 Définition :

Une variable est un conteneur temporaire pour stocker une valeur.

### ✍️ Règles de nommage :

- Commence par `$` suivi d'une lettre ou `_`
- Pas de caractères spéciaux, accents, ni espaces

### 🎭 Types de variables :

```php
$string = "Texte";               // Chaîne de caractères (string)
$nombre = 83;                    // Entier (int)
$decimal = 15.5;                 // Nombre à virgule (float)
$booleen = true;                 // Booléen (true ou false)
$tableau = array(1, 2, 3);       // Tableau (array)
$aucuneValeur = null;            // NULL : variable sans valeur
```

---

## 🖨️ Affichage de variables

```php
echo $string;
echo "Le département est : $string";
echo 'Le département est : ' . $string;
```

> 🧠 Utiliser le point (`.`) pour concaténer une chaîne avec une variable (pas `+` comme en JavaScript).

---

## ➕ Opérations mathématiques

```php
$age = 18;
$age = $age + 1;   // Addition → 19
$age = $age - 1;   // Soustraction → 18
$age = $age * 2;   // Multiplication → 36
$age = $age / 2;   // Division → 18
$age = $age % 2;   // Modulo → 0
```

---

## 🔍 Opérateurs de comparaison

| Opérateur | Signification                 | Exemple     |
|-----------|-------------------------------|-------------|
| `==`      | Égalité (valeur)              | `$a == $b`  |
| `===`     | Égalité stricte (valeur+type) | `$a === $b` |
| `!=`      | Différent (valeur)            | `$a != $b`  |
| `!==`     | Différent (valeur+type)       | `$a !== $b` |
| `>`       | Supérieur                     | `$a > $b`   |
| `<`       | Inférieur                     | `$a < $b`   |
| `>=`      | Supérieur ou égal             | `$a >= $b`  |
| `<=`      | Inférieur ou égal             | `$a <= $b`  |

---

## 🔗 Opérateurs logiques

| Opérateur | Nom | Exemple                 |
|-----------|-----|-------------------------|
| `&&`      | ET  | `true && false` = false |
| `         |     | `                       | OU        | `true || false` = true |
| `!`       | NON | `!true` = false         |

---

## 🔁 Conditions

```php
if ($age == 18) {
    echo "Vous avez 18 ans";
} elseif ($age > 18) {
    echo "Vous êtes majeur";
} else {
    echo "Vous êtes mineur";
}
```

### 💡 HTML dans une condition PHP :

```php
<?php if ($age == 18) { ?>
    <p>Vous avez 18 ans</p>
<?php } else { ?>
    <p>Vous n'avez pas 18 ans</p>
<?php } ?>
```

---

## ⚖️ Condition ternaire

```php
$age = 18;
$autorisation = ($age > 18) ? true : false;
```

> 🧠 Syntaxe : `(condition) ? valeur_si_vrai : valeur_si_faux`
