import express from "express";
import { isAuthenticated } from "../../middleware/isAuthmiddleware.js";
import { authorizeRoles } from "../../middleware/rolemiddleware.js";
import { createCartController, getallCartController, getCartByIdController } from "../../controller/cartController.js";


const router = express.Router();

// Create or update a cart
router.post("/create",isAuthenticated,authorizeRoles('customer'), createCartController);
router.get("/getallcart",isAuthenticated,authorizeRoles('customer'),getallCartController);
router.get('/getcartbyId/:id',isAuthenticated,authorizeRoles('customer'),getCartByIdController);


export default router;
