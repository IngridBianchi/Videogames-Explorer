const { Router } = require('express');
const router = Router();

// Importar rutas
const videogameRoute = require('./juegos');
const generoRoute = require('./generos');
const testRoutes = require('./test');

// Asignar rutas
router.use('/videogames', videogameRoute);
router.use('/generos', generoRoute);
router.use('/test', testRoutes);

module.exports = router;
