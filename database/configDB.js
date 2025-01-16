// récupération de la dépendance
const mysql = require ('mysql2')

// création d'une connexion avec les identifiants nécessaires
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password:'33231993',
  database:'shop',
});

// connexion à la base de données
connection.connect((err) => {
  if (err) throw err;
  console.log("connecté à la base de données");
  
});

// export de la connexion
module.exports = connection;