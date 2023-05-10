require('dotenv').config();
const http    = require("http");
const app     = require("./index");

// création du serveur
const server = http.createServer(app);

// lancement du serveur
server.listen(process.env.port, () =>
    console.log(`Server is running on port ${process.env.port}`)
);
