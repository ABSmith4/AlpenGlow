import express from 'express';
// eslint-disable-next-line import/extensions
import v1Router from './v1/index.js';

const indexRouter = express.Router();

indexRouter.use('/v1', v1Router);

export default indexRouter;
