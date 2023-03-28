//llama la librería de express y le asigna una constante
const express = require('express');
//Asigna una variable para la express y le asigna una constante
const router = express.Router();

//invocamos a la coneccion que se hace a traves de cliente
const conexion= require('./database/db');

//Configura la ruta principal
router.get('/', (req, res) => {
    conexion.query('SELECT * FROM estudiantes ORDER BY id ASC', (error, results) => {
    if (error) {
        throw error;
    } else {
        res.render('index', { results: results.rows });
    }
    });
});

//ruta para crear registros

router.get('/create',(req,res)=>{
    res.render('create');
})
//lamamos el crud en controllers de la exportacion exports.save
const crud= require('./controllers/crud');
router.post('/save',crud.save);

//ruta para editar los registros
router.get('/edit/:id', (req,res)=>{
    const id =req.params.id;
    conexion.query('SELECT * FROM estudiantes WHERE id=$1',[id] , (error, results) => {
        console.log(id);
        if (error) {
            throw error;
        }else{
            res.render('edit', {est:results.rows});
        }
    });
});

router.get('/edit/:id', (req, res) => {
    const id = req.params.id;
    conexion.query('SELECT * FROM estudiantes WHERE id=$1', [id], (error, results) => {
        if (error) {
            throw error;
        } else {
            res.render('edit.ejs', { est: results.rows });
        }
    });
});

router.get('/delete/:id', (req, res) => {
    const id = req.params.id;
    conexion.query('DELETE FROM estudiantes WHERE id = $1',[id], (error, results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/');
        }
    })
});

router.post('/save', crud.save);
router.post('/update', crud.update);

//vamos a exportar el archivo router.js
module.exports = router
