import express from 'express';
import routes from './routes';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import options from './options'

const app = express();

//Connect to the database
mongoose.connect(options.dbUrl, () => {
  console.log('Database connected!');
});

//Middleware
app.use(bodyParser.json())

app.use('/api', routes);

export default app;
