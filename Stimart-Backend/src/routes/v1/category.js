import { createCategoryController, deleteCategoryController, getCategoryAllController, getCategoryByIdController, updateCategoryController } from "../../controller/categoryController.js";
import { isAuthenticated } from "../../middleware/isAuthmiddleware.js";
import express from 'express'
import { authorizeRoles } from "../../middleware/rolemiddleware.js";

const router = express.Router();

router.post('/create',isAuthenticated,authorizeRoles('admin'),createCategoryController);
router.delete('/delete/:id',isAuthenticated,authorizeRoles('admin'),deleteCategoryController);
router.put('/update/:id',isAuthenticated,authorizeRoles('admin'),updateCategoryController);
router.get('/get/:id',getCategoryByIdController);
router.get('/getall',getCategoryAllController);


export default router;