//hacemos la conexion a la base de datos
const { Client } = require('pg');

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'grupal',
  password: '1234',
  port: 5432,
});

client.connect((error) => {
  if (error) {
    console.error('El error de conexión es: ' + error);
    return;
  }
  console.log('¡Conectado a la Base de Datos!');
});
//Exportar la base de datos
module.exports = client;
