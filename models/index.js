/*

'use stric/t';

// Importamos los módulos necesarios
const dotenv = require('dotenv'); // Para leer las variables de entorno desde un archivo
const fs = require('fs'); // Para leer los archivos de modelo
const path = require('path'); // Para trabajar con las rutas de los archivos
const Sequelize = require('sequelize'); // La biblioteca de Sequelize

dotenv.config(); // Cargamos las variables de entorno desde el archivo .env

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];

const db = {};

// Creamos una instancia de Sequelize con la configuración de la base de datos
let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

// Inicializamos los modelos de Sequelize
fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

// Conectamos a la base de datos
sequelize
  .authenticate()
  .then(() => {
    console.log('Conexión exitosa. http://localhost:8000/');
  })
  .catch((err) => {
    console.error('Error de conexión:', err);
  });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// Exportamos los elementos necesarios
module.exports = db;

*/