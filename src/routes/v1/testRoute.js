import express from 'express';

const testRouter = express.Router();

// eslint-disable-next-line no-unused-vars
testRouter.get('/1', (req, res, next) => res.status(200).json({ message: 'Welcome to the AlpenGlow API' }));

export default testRouter;
