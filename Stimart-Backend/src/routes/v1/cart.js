import express from "express";
import { isAuthenticated } from "../../middleware/isAuthmiddleware.js";
import { authorizeRoles } from "../../middleware/rolemiddleware.js";
import { createCartController } from "../../controller/cartController.js";


const router = express.Router();

// Create or update a cart
router.post("/create",isAuthenticated,authorizeRoles('customer'), createCartController);


export default router;
