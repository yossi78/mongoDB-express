import express from 'express';

const router = express.Router()
const EmployeeController = require('../controllers/userController')



export default (router: express.Router) => {
  router.post('/users/add', EmployeeController.addUser);
  router.get('/users', EmployeeController.getAllUsers);
  router.put('/users/update/:id', EmployeeController.updateUser);   // PATH PARAM
  router.delete('/users/deleteUser', EmployeeController.deleteUser);     // QUERY PARAM
};