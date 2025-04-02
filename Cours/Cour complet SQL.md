# Cours Complet SQL pour Débutants

## Introduction

Le SQL (Structured Query Language) est un langage standard utilisé pour gérer des bases de données relationnelles (RDBMS). Il permet de créer, lire,
mettre à jour et supprimer des données (opérations souvent appelées CRUD).

---

## 1. Création de base de données et tables

### Créer une base

```sql
CREATE DATABASE boutique;
USE boutique;
```

### Créer une table

```sql
CREATE TABLE produits (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nom VARCHAR(100),
  prix DECIMAL(6,2),
  en_stock BOOLEAN DEFAULT true
);
```

### Types de données courants

- `INT` : nombre entier
- `VARCHAR(n)` : texte de longueur variable
- `TEXT` : grand bloc de texte
- `DECIMAL(p,s)` : nombre décimal (précision, scale)
- `BOOLEAN` : vrai ou faux
- `DATE`, `TIME`, `DATETIME`

---

## 2. Manipulation des données (CRUD)

### Créer (INSERT)

```sql
INSERT INTO produits (nom, prix, en_stock)
VALUES ('Clavier', 39.99, true);
```

### Lire (SELECT)

```sql
SELECT * FROM produits;
SELECT nom, prix FROM produits WHERE en_stock = true;
```

### Mettre à jour (UPDATE)

```sql
UPDATE produits
SET prix = 45.99
WHERE nom = 'Clavier';
```

### Supprimer (DELETE)

```sql
DELETE FROM produits WHERE id = 1;
```

---

## 3. Filtres, tris et limites

### WHERE

```sql
SELECT * FROM produits WHERE prix > 50;
```

### ORDER BY

```sql
SELECT * FROM produits ORDER BY prix DESC;
```

### LIMIT

```sql
SELECT * FROM produits LIMIT 10;
```

### BETWEEN, IN, LIKE

```sql
SELECT * FROM produits WHERE prix BETWEEN 30 AND 60;
SELECT * FROM produits WHERE nom IN ('Clavier', 'Souris');
SELECT * FROM produits WHERE nom LIKE '%ordi%';
```

---

## 4. Fonctions d’agrégation et GROUP BY

### Fonctions :

- `COUNT()` : compter les lignes
- `SUM()` : somme
- `AVG()` : moyenne
- `MIN()`, `MAX()` : minimum, maximum

```sql
SELECT COUNT(*) FROM produits;
SELECT AVG(prix) FROM produits;
```

### GROUP BY

```sql
SELECT en_stock, COUNT(*) FROM produits GROUP BY en_stock;
```

---

## 5. Jointures entre tables (JOIN)

### Exemple de structure :

```sql
CREATE TABLE clients (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nom VARCHAR(100)
);

CREATE TABLE commandes (
  id INT PRIMARY KEY AUTO_INCREMENT,
  client_id INT,
  FOREIGN KEY (client_id) REFERENCES clients(id)
);
```

### Jointure (INNER JOIN)

```sql
SELECT commandes.id, clients.nom
FROM commandes
JOIN clients ON commandes.client_id = clients.id;
```

### Autres types de jointures

- `LEFT JOIN` : prend tout à gauche, même sans correspondance
- `RIGHT JOIN` : l'inverse
- `FULL OUTER JOIN` (parfois indisponible selon le SGBD)

---

## 6. Contraintes SQL

- `PRIMARY KEY` : identifiant unique
- `FOREIGN KEY` : clé étrangère
- `NOT NULL` : champ obligatoire
- `UNIQUE` : valeur unique
- `DEFAULT` : valeur par défaut
- `CHECK` : vérification sur la valeur (ex: prix > 0)

---

## 7. Création / modification de tables

### Ajouter une colonne

```sql
ALTER TABLE produits ADD categorie VARCHAR(50);
```

### Modifier un type de colonne

```sql
ALTER TABLE produits MODIFY prix DECIMAL(8,2);
```

### Supprimer une colonne

```sql
ALTER TABLE produits DROP COLUMN categorie;
```

---

## 8. Vues (VIEWS)

Permettent de créer des vues virtuelles sur des requêtes

```sql
CREATE VIEW produits_disponibles AS
SELECT * FROM produits WHERE en_stock = true;
```

```sql
SELECT * FROM produits_disponibles;
```

---

## 9. Transactions

Utiles pour grouper plusieurs opérations ensemble

```sql
START TRANSACTION;
UPDATE produits SET prix = prix + 10;
DELETE FROM produits WHERE prix > 1000;
COMMIT;
-- ROLLBACK; pour annuler
```

---

## 10. Index

Accélèrent les recherches

```sql
CREATE INDEX idx_nom ON produits(nom);
```

---

## Conclusion

Avec ces commandes SQL, tu peux gérer efficacement une base de données relationnelle. Continue à pratiquer avec des cas concrets (catalogue produits,
gestion utilisateurs, commandes clients) pour bien maîtriser le langage SQL !

