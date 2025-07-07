import express from 'express'
import { createproductcontroller, deleteProductController, getPoductAllContoller, getPoductByIdContoller, getPresignedUrl, updateProductController } from '../../controller/productController.js';
import { isAuthenticated } from '../../middleware/isAuthmiddleware.js';
import { authorizeRoles } from '../../middleware/rolemiddleware.js';
import { getLimiter } from '../../utils/Common/apilimit.js';

const router = express.Router();

router.post('/createproduct/:categoryId',isAuthenticated,authorizeRoles('admin'),createproductcontroller);
router.get('/getproduct/:productId',getPoductByIdContoller);
router.put('/updateproduct/:id',isAuthenticated,authorizeRoles('admin'),updateProductController);
router.delete('/deleteproduct/:id',isAuthenticated,authorizeRoles('admin'),deleteProductController);
router.get('/getall',getLimiter,getPoductAllContoller);
router.get('/getpre',getLimiter,getPresignedUrl);

export default router;