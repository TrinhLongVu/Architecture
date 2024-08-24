import 'dotenv/config.js';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import compression from 'compression';
import router from './routes/index.js'
import connect_mysql from './dbs/mysql.dbs.js'
import connect_redis from './dbs/redis.dbs.js'

const app = express();

// use cors 
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
    allowedHeaders: ['Content-Type'],
}))

//Init middleware 
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

app.use(morgan('dev')) // Change color status in terminal
app.use(compression()) // Decrease load data

// connect database
connect_mysql;

app.use('/v1/api/auth', router)

app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error)
})

app.use((error, req, res, next) => {
    const statusCode = error.status || 500;
    return res.status(statusCode).json({
        status: 'error',
        code: statusCode,
        message: error.message || 'Internal Server Error'
    });
});

export default app;