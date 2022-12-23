//Importamos el modulo router de exporess
import { Router } from 'express';
import { ping } from '../controllers/indes.controller.js';


const router = Router();

//Endpoint
router.get('/ping', ping);

export default router;

