import expres from 'express';
import morgan from 'morgan';
import cors from 'cors';
import peliculas from './Routes/peliculas.routes.js';
import auth from './Routes/auth.routes.js'
const app = expres();
app.use(cors());
app.use(morgan('dev'));
app.use(expres.json());
app.use(expres.static('public'));
app.use('/',peliculas);
app.use('/',auth);
app.use( (req,res,next) => {
    res.status(404).json({message:'Página no encontrada'});
});

export default app;