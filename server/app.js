import express from 'express';
import routes from './routes';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

const app = express();

//Connect to the database
mongoose.connect('mongodb://Mandukk:123456@ds149501.mlab.com:49501/blog-api', () => {
  console.log('Database connected!');
});

//Middleware
app.use(bodyParser.json())

app.use('/api', routes);

export default app;
