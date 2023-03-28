const conexion= require('../database/db');

exports.save = (req,res)=>{

    const estudiante= req.body.estudiante;
    const rut = req.body.rut;
    const curso =req.body.curso;
    const nivel=req.body.nivel;
    conexion.query('INSERT INTO estudiantes (nombre, rut, curso, nivel) VALUES ($1, $2, $3, $4)', [estudiante, rut, curso, nivel], (error, results) => {
        if (error) {
          console.log(error);
        } else {
          res.redirect('/');
        }
      })
}
