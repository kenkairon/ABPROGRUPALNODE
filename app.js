//invocar a librería de express
const express = require('express');
const app = express();

//Motor de plantillas
app.set('view engine','ejs');

//Esta función middleware se utiliza para analizar los datos enviados
//en una solicitud HTTP POST o PUT y extraer los datos de la carga útil del cuerpo de la solicitud.//
app.use(express.urlencoded({extended:false}));
/*La función middleware express.json() se utiliza para analizar los datos enviados en una solicitud HTTP en formato JSON. 
Esta función analiza la carga útil del cuerpo de una solicitud HTTP POST o PUT y convierte los datos en un objeto JavaScript 
para que puedan ser procesados en el servidor.*/
//app.use(express(json));

//es para usar en la carpeta app import
app.use('/', require('./router'));

//Escuchamos al servidor
app.listen(5000, ()=>{
	console.log('Servicio corriendo en http://localhost:5000');
});