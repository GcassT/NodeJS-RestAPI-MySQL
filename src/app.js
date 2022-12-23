//Importamos el modulo de express
import express from 'express';
//Importamnos la ruta de empleados
import employesRoutes from './routes/employees.routes.js';
//Importamos el index de las rutas
import indexRoutes from './routes/index.routes.js';
//Importamos el archivo config
import './config.js';

//Creamos la aplicación
const app = express();

app.use(express.json());//Para que el servidor entienda los datos en formato json

app.use(indexRoutes)
app.use('/api',employesRoutes);

app.use((req, res, next) => {
    res.status(404).json({
        message: 'Endpoint no encontrado'
    })
})

export default app;