import express from 'express'

import userRouter from '../v1/userRouter.js'
import productRouter from '../v1/product.js'
import categoryRouter from '../v1/category.js'
import OrderRouter from '../v1/order.js'
import CartRouter from '../v1/cart.js'

const router = express.Router();

router.use('/user',userRouter);
router.use('/product',productRouter);
router.use('/category',categoryRouter);
router.use('/order',OrderRouter);
router.use('/cart',CartRouter);

export default router;