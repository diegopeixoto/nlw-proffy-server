import express from 'express';
import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';


const routes = express.Router();
const classesControllers = new ClassesController();
const connectionsController = new ConnectionsController();

routes.get('/', (request, response) => {
  return response.json({ message: 'Welcome to Next Level Week 2'})
})

routes.post('/classes', classesControllers.create)
routes.get('/classes', classesControllers.index)
routes.get('/classes/list', classesControllers.list)

routes.post('/connections', connectionsController.create)
routes.get('/connections', connectionsController.index)

export default routes;