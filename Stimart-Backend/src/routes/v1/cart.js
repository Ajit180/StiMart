import express from "express";
import { createOrUpdateCartController,getCartController,addProductToCartController,removeProductFromCartController,updateCartController,deleteCartController } from "../../controller/cartController.js";
import { isAuthenticated } from "../../middleware/isAuthmiddleware.js";
import { authorizeRoles } from "../../middleware/rolemiddleware.js";


const router = express.Router();

// Create or update a cart
router.post("/create",isAuthenticated,authorizeRoles('customer'), createOrUpdateCartController);

// Get cart by user ID
router.get("/", isAuthenticated,authorizeRoles('customer'), getCartController);

// Add product to cart
router.put("/add",isAuthenticated,authorizeRoles('customer'), addProductToCartController);

// Remove product from cart
router.delete("/remove/:productId",authorizeRoles('customer'), isAuthenticated, removeProductFromCartController);

// Update cart
router.put("/update",isAuthenticated,authorizeRoles('customer'), updateCartController);

// Delete cart
router.delete("/", isAuthenticated,authorizeRoles('customer'), deleteCartController);

export default router;
