import express from 'express';
import { displayHello } from '../controllers/textController';

const TextRouter = express.Router();

TextRouter.route('/hello').get(displayHello);

export default TextRouter;
