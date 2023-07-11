import express from 'express';

const router = express.Router()
const EmployeeController = require('../controllers/userController')



export default (router: express.Router) => {
  router.post('/auth/register', EmployeeController.register);
  router.get('/auth/users', EmployeeController.getAllUsers);
  router.put('/auth/updateUser/:id', EmployeeController.updateUser);   // PATH PARAM
  router.delete('/auth/deleteUser', EmployeeController.deleteUser);     // QUERY PARAM
};