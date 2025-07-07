import express from 'express'
import { register, SigninController } from '../../controller/userController.js';

const router = express.Router();

router.post('/signup',register);
router.post('/signin',SigninController);

export default router;