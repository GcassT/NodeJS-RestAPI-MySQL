//Importamos el modulo router de exporess
import { Router } from 'express';
//Importamos el controlador get de empleados
import { getEmployees,
         getEmployee,
         createEmployee, 
         updateEmployee,
         deleteEmployee } from '../controllers/employees.controller.js';

const router = Router();

//Endpoints
router.get('/employees', getEmployees);

//Endpoint get para obtener un empleado por id
router.get('/employees/:id', getEmployee); //:id es un parametro

router.post('/employees',createEmployee);

router.patch('/employees/:id', updateEmployee);
//Put es para actualizar todo el objeto y patch es para actualizar solo una parte del objeto

router.delete('/employees/:id', deleteEmployee);

export default router;