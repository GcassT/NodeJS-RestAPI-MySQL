//Importamos la app 
import app from './app.js';
//Importamos el puerto 
import { PORT } from './config.js';

//Ruta por defecto
app.listen(PORT);
console.log('Server on port', PORT);
