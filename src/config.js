//Importamos el modulo config de dotenv
import {config} from 'dotenv'

//Configuramos dotenv
config()

//Creamos las variables de entorno
const PORT  = process.env.PORT || 3000;
const HOST = process.env.DB_HOST || 'localhost';
const USER = process.env.DB_USER || 'root';
const PASSWORD = process.env.DB_PASSWORD || 'password';
const DATABASE = process.env.DB_DATABASE || 'companydb';
const PORT_DB = process.env.DB_PORT || 8080;

export {PORT, HOST, USER, PASSWORD, DATABASE, PORT_DB}

