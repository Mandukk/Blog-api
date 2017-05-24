import express from 'express';

const routes = express();

//Import controllers
import postController from './controllers/postController';
import userController from './controllers/userController';
import commentController from './controllers/commentController';

//Post routes
routes.get('/posts', postController.getAll);
routes.post('/posts/new', postController.post);

//User routes
routes.post('/register', userController.post);

//Comment routes
routes.post('/comment', commentController.post);


export default routes;
