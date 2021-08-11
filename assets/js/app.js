import express, { json } from 'express';
import morgan from 'morgan';


// initializations
const app = express();

//Middlewares
app.use(morgan('dev'));
app.use(json());

//importing routes
import operationRoutes from './routes/operations';

//routes
app.use('/api/operations',operationRoutes);

export default app;