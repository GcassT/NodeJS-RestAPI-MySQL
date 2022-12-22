//Importamos el modulo de express
import express from 'express';
//Importamnos la ruta de empleados
import employesRoutes from './routes/employees.routes.js';
//Importamos el index de las rutas
import indexRoutes from './routes/index.routes.js';


const app = express();

app.use(indexRoutes)
app.use(employesRoutes);


//Ruta por defecto
app.listen(3000);
console.log('Server on port', 3000);
