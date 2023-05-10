const express = require("express");

// création de l'instance express
const app = express();

// importation des routes
const declarationRoutes = require("./routes/declaration.route");

// définition des middlewares
app.use(express.json());

// définition des routes
app.use("/api/declaration", declarationRoutes);

module.exports = app;
