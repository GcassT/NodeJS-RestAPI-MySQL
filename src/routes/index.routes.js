//Importamos el modulo router de exporess
import { Router } from 'express';
//Importamoe el modulo pool de la carpeta db
import { pool } from '../db.js';

const router = Router();

//Endpoint
router.get('/ping', async (req, res) => {
    const [result] = await pool.query('SELECT "Pong" AS result');
    res.json(result[0]);
});

export default router;

