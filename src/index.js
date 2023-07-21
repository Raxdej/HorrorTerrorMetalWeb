// Librerías
import express from 'express';
import ejs from 'ejs';
import morgan from 'morgan';
import {dirname, join} from 'path';
import { fileURLToPath } from 'url';

// Aux & Temporal function here
/*
import { getConnection } from './database/connection.js';

export const getProducts = async (req, res) => {
    const pool = await getConnection();
    // Temp line code
    const result = await pool.request().query("SELECT 1");
    console.log(result);
};


getProducts();*/

// Rutas de navegación de la pág.
import indexRoutes from './routes/index.js';

// Objeto de express | inidio del proyecto
const app = express();
// Importamos la dirección del proyecto y se establece como estática
const __dirname = dirname(fileURLToPath(import.meta.url));

app.set('port', process.env.PORT || 3000);
app.set('views', join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(morgan('dev'));

app.use(indexRoutes);
app.use(express.static(join(__dirname, 'public')));



app.listen(app.get("port"));
//console.log('Server is listening on port ', app.get("port"));
//console.log(join(__dirname, 'views'));