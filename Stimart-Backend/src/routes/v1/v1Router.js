import express from 'express'

import userRouter from './userRouter.js'
import productRouter from './product.js'
import categoryRouter from './category.js'
import OrderRouter from './order.js'
import CartRouter from './cart.js'

const router = express.Router();

router.use('/user',userRouter);
router.use('/product',productRouter);
router.use('/category',categoryRouter);
router.use('/order',OrderRouter);
router.use('/cart',CartRouter);

export default router;