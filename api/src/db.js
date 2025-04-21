require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');

// Desestructuramos variables de entorno
const { PGUSER, PGPASSWORD, PGHOST, PGDATABASE, PGPORT, USE_SSL } = process.env;

// Validamos que las variables necesarias estén presentes
if (!PGUSER || !PGPASSWORD || !PGHOST || !PGDATABASE || !PGPORT) {
  throw new Error("Faltan variables de entorno para la conexión a la base de datos. Verifica tu archivo .env.");
}

// Configuración base de conexión
const dbUrl = `postgres://${PGUSER}:${PGPASSWORD}@${PGHOST}:${PGPORT}/${PGDATABASE}`;

// Configuración con o sin SSL dependiendo del entorno
let sequelize;

if (USE_SSL === 'true') {
  const caPath1 = path.resolve(__dirname, 'certificates', 'Microsoft-RSA-Root-Certificate- Authority-2017.crt');
  const caPath2 = path.resolve(__dirname, 'certificates', 'DigiCertGlobalRootG2.crt.pem');
  const caPath3 = path.resolve(__dirname, 'certificates', 'DigiCertGlobalRootCA.crt');

  sequelize = new Sequelize(dbUrl, {
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
        ca: [
          fs.readFileSync(caPath1, 'utf-8'),
          fs.readFileSync(caPath2, 'utf-8'),
          fs.readFileSync(caPath3, 'utf-8')
        ]
      }
    }
  });
} else {
  sequelize = new Sequelize(dbUrl, {
    dialect: 'postgres',
    logging: false, // Quita logs si no quieres ver todas las consultas en consola
  });
}

// Carga de modelos
const basename = path.basename(__filename);
const modelDefiners = [];

fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

// Inyectamos sequelize en los modelos
modelDefiners.forEach(model => model(sequelize));

// Capitalizamos nombres de los modelos
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map(([name, model]) => [name[0].toUpperCase() + name.slice(1), model]);
sequelize.models = Object.fromEntries(capsEntries);

// Relaciones
const { Videogame, Genre } = sequelize.models;
Videogame.belongsToMany(Genre, { through: "Videogames_Genres" });
Genre.belongsToMany(Videogame, { through: "Videogames_Genres" });

// Exportación
module.exports = {
  ...sequelize.models,
  conn: sequelize,
};
