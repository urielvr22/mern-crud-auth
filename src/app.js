import express from "express";
import morgan from "morgan"; //this is to DEV to watch the requests that the server received
import authRoutes from './routes/auth.routes.js';
import tasksRoutes from './routes/tasks.routes.js';
import cookieParser from 'cookie-parser';
import cors from "cors"


const app = express();

app.use(cors({
    origin: ['http://192.168.100.20:5173','http://localhost:5173'],
    credentials: true
}));
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

app.use('/api',authRoutes);
app.use('/api',tasksRoutes);

export default app;

/*
{
    "email": "test16@test.com",
    "password": "test16Pass"
}
{
    "title": "my second task updated",
    "description": "tarea user 16"
}
*/