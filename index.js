// récupération des dépendances
require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');

// récupération de la configuration de la BDD
require("./database/configDB");

// on indique que nous allons utiliser express
app.use(express.json());

// on accepte les requêtes de toutes origines
app.use(
  cors({
    origin: "*",
  })
);

// on indique que l'application va ecouter sur le port 5000 et on retroune dans la console un message
app.listen(5000, () => {
  console.log("app listening on port 5000");
  
});