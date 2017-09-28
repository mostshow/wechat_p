
import express from 'express'

let router = express.Router();
import validate from '../controller/validate'

router.use('/validateToken',validate.validateToken);

export default router;

