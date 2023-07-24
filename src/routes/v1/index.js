import express from 'express';

// eslint-disable-next-line import/extensions
import testRoute from './testRoute.js';

const v1Router = express.Router();

v1Router.use('/test', testRoute);

v1Router.use("/auth", );

export default v1Router;
