//Importamos el módulo mysql
import { createPool } from 'mysql2/promise';
//Importamos las variables de entorno
import { HOST, 
         USER, 
         PASSWORD, 
         DATABASE, 
         PORT_DB } from './config.js';


//Creamos la conexión a la base de datos
export const pool = createPool({
    host: HOST, //localhost
    user: USER,//usuario
    password: PASSWORD,//contraseña
    port: PORT_DB,//puerto
    database: DATABASE,//nombre de la base de datos
})