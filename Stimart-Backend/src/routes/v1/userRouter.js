import express from 'express'
import { register, SigninController } from '../../controller/userController.js';
import { isAuthenticated } from '../../middleware/isAuthmiddleware.js';

const router = express.Router();

router.post('/signup',register);
router.post('/signin',SigninController);

export default router;