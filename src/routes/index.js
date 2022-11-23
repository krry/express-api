import express from 'express';
import { envar } from '../settings';

const indexRouter = express.Router();

indexRouter.get('/', (req, res) => res.status(200).json({ message: envar }));

export default indexRouter;
