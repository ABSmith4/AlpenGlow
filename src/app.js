/* eslint-disable no-console */
import express from 'express';
// import dotenv from 'dotenv';
import cors from 'cors';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
// eslint-disable-next-line import/extensions
import indexRouter from './routes/index.js';

// dotenv.config({ path: './config/config.env' });

// require('./config/settings');

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/api', indexRouter);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

export default app;
