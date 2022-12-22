//Importamos el módulo mysql
import { createPool } from 'mysql2/promise';


//Creamos la conexión a la base de datos
export const pool = createPool({
    host: 'localhost', //localhost
    user: 'root',//usuario
    password: 'gi18052930',//contraseña
    port: 3306,//puerto
    database: 'companydb',//nombre de la base de datos
})