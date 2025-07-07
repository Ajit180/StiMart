import {
  createOrderController,
  getAllOrdersController,
  getOrderByIdController,
  updateOrderController,
  deleteOrderController,
} from "../../controller/orderController.js";
import express from "express";
import { isAuthenticated } from "../../middleware/isAuthmiddleware.js";
import { authorizeRoles } from "../../middleware/rolemiddleware.js";

const router = express.Router();

router.post("/createorder",isAuthenticated,authorizeRoles('admin') ,createOrderController);

// Get all orders
router.get("/getorder",isAuthenticated ,authorizeRoles('customer'), getAllOrdersController);

// Get single order by ID
router.get("/getOrderbyId/:id",isAuthenticated ,authorizeRoles('customer'), getOrderByIdController);

// Update an order by ID
router.put("/updateOrder/:id", isAuthenticated ,authorizeRoles('admin'),updateOrderController);

// Delete an order by ID
router.delete("/deleteOrder/:id",isAuthenticated , authorizeRoles('admin'),deleteOrderController);



export default router;
