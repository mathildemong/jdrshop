# 🐉 JDR Shop

![React](https://img.shields.io/badge/Frontend-React-blue?logo=react)
![Node.js](https://img.shields.io/badge/Backend-Node.js-green?logo=node.js)
![npm](https://img.shields.io/badge/Package_Manager-npm-red?logo=npm)
![Status](https://img.shields.io/badge/Status-En%20cours-yellow)

> 🛒 Site de vente d’accessoires pour jeux de rôle (Dungeons & Dragons, etc.)

---

## 📖 Description

**JDR Shop** est une application web e-commerce dédiée aux passionnés de jeux de rôle.  
Elle permet d’acheter des accessoires comme des dés, figurines et fiches de personnage.

Le projet utilise une architecture **fullstack avec React (frontend) et Node.js (backend)**.

---

## ✨ Fonctionnalités

- 🛍️ Boutique de produits JDR  
- 👤 Création de compte utilisateur  
- 🔐 Connexion utilisateur  
- 🔄 CRUD utilisateur (Create, Read, Update, Delete)  

---

## 🛠️ Technologies utilisées

- ⚛️ React  
- 🌐 Node.js  
- 📦 npm  

---

## 🚀 Installation

```bash
git clone https://github.com/mathildemong/jdr-shop.git
cd jdr-shop
npm install
npm start
```

---

## 💻 Utilisation

### Exemple CRUD utilisateur

#### Créer un utilisateur

```http
POST /api/users
```

#### Lire les utilisateurs

```http
GET /api/users
```

#### Modifier un utilisateur

```http
PUT /api/users/:id
```

#### Supprimer un utilisateur

```http
DELETE /api/users/:id
```

---

## 📂 Structure du projet

```
/client   → Frontend React  
/server   → Backend Node.js  
```

---

## 🚧 Améliorations possibles

- 🛒 Ajouter un panier  
- 💳 Intégrer un paiement  
- 🔐 Authentification JWT  
- 📦 Gestion des commandes  

---

## 🤝 Contribution

Les contributions sont les bienvenues !

---

## 📜 Licence

Aucune licence définie

---

## 📬 Auteur

👩‍💻 Mathilde Mong  
Projet autour des jeux de rôle 🐲
