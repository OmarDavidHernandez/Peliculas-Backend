import {conexion} from '../db.js';
import * as fs from 'fs';

export const getPeliculas = async (req,res) => {
    try{
        const {id} = req.params;
        var where = (id === undefined) ? '' : 'WHERE id ="'+id+'" ';
        const [rows] = await conexion.query('SELECT *, date_format(fecha_publicacion, "%d/%m/%Y") as fecha, date_format(fecha_publicacion, "%Y-%m-%d") as fecha2 FROM peliculas '+where);
        return res.json({status:true,data:rows});
    }
    catch(error){
        return res.status(500).json({message:false});
    }
};

export const savePeliculas = async(req,res) => {
    try {
        const {genero,titulo,sinopsis,review,fecha,actores,directores,franquicia} = req.body;
        const imagen = '/uploads/'+req.file.filename;
        var validacion = validar(genero,titulo,sinopsis,fecha,actores,directores,franquicia);
        if(Object.entries(validacion).length === 0){
            await conexion.query(
            'INSERT INTO peliculas(genero,titulo,imagen,sinopsis,review,fecha_publicacion,actores,directores,franquicia) VALUES (?,?,?,?,?,?,?,?,?)',
            [genero,titulo,imagen,sinopsis,'',fecha,actores,directores,franquicia]);
            return res.status(200).json({status:true,message:'Película guardada exitosamente'});
        }
        else{
            return res.status(400).json({status:false,errors:validacion});
        }
    }
    catch (error) {
        return res.status(500).json({status:false,errors:[error.message]});
    }
};
export const updatePeliculas = async(req,res) => {
    try {
        const {id} = req.params;
        const {genero,titulo,sinopsis,fecha,actores,directores,franquicia} = req.body;
        let imagen = '';
        let valores = [genero,titulo,sinopsis,fecha,actores,directores,franquicia,id];
        let colImg = '';
        if(req.file != null){
            imagen = '/uploads/'+req.file.filename;
            colImg = ', imagen = ?';
            valores = [genero,titulo,sinopsis,fecha,actores,directores,franquicia,imagen,id];
            await eliminarImagen(id);
        }
        var validacion = validar(genero,titulo,sinopsis,fecha,actores,directores,franquicia);
        if(Object.entries(validacion).length === 0){
            const [result] = await conexion.query(
            'UPDATE peliculas SET genero = ? , titulo = ? , sinopsis = ? , fecha_publicacion = ? , actores = ? , directores = ? , franquicia = ? '+colImg+' WHERE id = ?',
            valores);
            if(result.affectedRows === 0){
                return res.status(404).json({status:'error',errors:[{id:'No existe el ID'}]});
            }
            return res.status(200).json({status:true,message:'Película modificada exitosamente'});
        }
        else{
            return res.status(400).json({status:false,errors:validacion});
        }
    }
    catch (error) {
        return res.status(500).json({status:false,errors:[error.message]});
    }
};
export const deletePeliculas = async(req,res) => {
    try {
        const {id} = req.params;
        await eliminarImagen(id);
        const [result] = await conexion.query('DELETE FROM peliculas WHERE id = ?',[id]);
        if(result.affectedRows === 0){
            return res.status(404).json({status:'error',errors:[{id:'No existe el ID'}]});
        }
        return res.status(200).json({status:true,message:'Película eliminada'});
    }
    catch (error) {
        return res.status(500).json({status:false,errors:[error.message]});
    }
};

function validar(genero,titulo,sinopsis,fecha,actores,directores,franquicia){
    var errors =[];
    if(genero === undefined || genero.trim() === '' || genero.lenght > 100){
        errors.push(
            'El genero de la película NO debe estar vacío y debe tener máximo 100 caracteres'
        );
    }
    if(titulo === undefined || titulo.trim() === '' || titulo.lenght > 100){
        errors.push(
            'La título de la película NO debe estar vacío y debe tener máximo 100 caracteres'
        );
    }
    if(sinopsis === undefined || sinopsis.trim() === '' || sinopsis.lenght > 250){
        errors.push(
            'La sinopsis de la película NO debe estar vacía y debe tener máximo 250 caracteres'
        );
    }
    if(fecha === undefined || fecha.trim() === '' || fecha.lenght > 10){
        errors.push(
            'La fecha de publicación de la película NO debe estar vacía y debe tener máximo 10 caracteres'
        );
    }
    if(actores === undefined || actores.trim() === '' || actores.lenght > 250){
        errors.push(
            'La película debe tener actores y como máximo 250 caracteres'
        );
    }
    if(directores === undefined || directores.trim() === '' || directores.lenght > 250){
        errors.push(
            'La película debe tener directores y como máximo 250 caracteres'
        );
    }
    if(franquicia === undefined || franquicia.trim() === '' || franquicia.lenght > 100){
        errors.push(
            'La franquicia de la película NO debe estar vacía y debe tener máximo 100 caracteres'
        );
    }
    return errors;
}
const eliminarImagen = async(id) =>{
    const [rows] = await conexion.query('SELECT imagen FROM peliculas WHERE id= "'+id+'" ');
    const img = rows[0].imagen;
    fs.unlinkSync('./public'+img)
}

export const addReview = async(req,res) => {
    try {
        const {id} = req.params;
        const {review} = req.body;
        if(review !== undefined || review.trim() !== ''){
            const [result] = await conexion.query(
            'UPDATE peliculas SET review = (CONCAT(review, ?))  WHERE id = ?',
            [(review+' *-* '),id]);
            if(result.affectedRows === 0){
                return res.status(404).json({status:'error',errors:[{id:'No existe el ID'}]});
            }
            return res.status(200).json({status:true,message:'Gracias por dejar tu reseña'});
        }
        else{
            return res.status(400).json({status:false,errors:['Debes escribir una reseña']});
        }
    }
    catch (error) {
        return res.status(500).json({status:false,errors:[error.message]});
    }
};