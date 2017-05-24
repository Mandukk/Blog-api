import express from 'express';

const routes = express();

//Import controllers
import postController from './controllers/postController';
import userController from './controllers/userController';

routes.get('/post', postController.get);
routes.post('/post/new', postController.post);
routes.post('/signup', userController.post);


export default routes;
