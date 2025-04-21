require('dotenv').config();
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const { loadGeneros } = require('./src/Middleware/loadGenres');

const PORT = process.env.PORT || 3001;

conn.sync({ force: false }) // en producción debe ser false
  .then(async () => {
    console.log('🟢 Base de datos sincronizada correctamente');

    try {
      await loadGeneros();
      console.log('📦 Géneros cargados correctamente');
    } catch (err) {
      console.error('❌ Error al cargar géneros:', err);
    }

    server.listen(PORT, () => {
      console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ Error al sincronizar la base de datos:', err);
  });
