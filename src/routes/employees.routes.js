//Importamos el modulo router de exporess
import { Router } from 'express';
//Importamos el controlador get de empleados
import { getEmployees,
         createEmployees, 
         updateEmployees,
         deleteEmployees } from '../controllers/employees.controller.js';

const router = Router();

//Endpoints
router.get('/employees', getEmployees);

router.post('/employees',createEmployees );

router.put('/employees', updateEmployees);

router.delete('/employees', deleteEmployees);

export default router;