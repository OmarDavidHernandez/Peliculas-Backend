import { Router } from "express";
import multer from 'multer';
import { verificacion } from "../Controllers/Middleware.js";
import { getPeliculas,savePeliculas,updatePeliculas,deletePeliculas,addReview } from "../Controllers/PeliculasController.js";

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'./public/uploads')
    },
    filename:(req,file,cb)=>{
        const ext = file.originalname.split('.').pop()
        cb(null,Date.now()+'.'+ext)
    }
});

const filtro = (req,file,cb) =>{
    if(file && (file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg' || file.mimetype === 'image/png')){
        cb(null, true);
    }else{
        cb(null, false);
    }
}

const subir = multer({storage: storage, fileFilter:filtro});

const router = Router();
router.get('/peliculas',getPeliculas);
router.get('/peliculas/:id',getPeliculas);
router.post('/peliculas',verificacion,subir.single('imagen'),savePeliculas);
router.put('/peliculas/:id',verificacion,subir.single('imagen'),updatePeliculas);
router.delete('/peliculas/:id',verificacion,deletePeliculas);
router.put('/review/:id',addReview);

export default router;
