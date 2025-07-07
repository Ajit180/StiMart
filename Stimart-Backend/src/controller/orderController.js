import { StatusCodes } from "http-status-codes";
import {getAllOrders,getOrderById,updateOrder,deleteOrder, createOrderService } from "../service/orderService.js";
import {
  internalErrorResponse,
  successResponse,
} from "../utils/Common/CommonResponse.js";
import { getproductbyId } from "../service/productRepository.js";

// Create Order
export const createOrderController = async (req, res) => {
  try {
    
    const { products, shippingAddress, paymentMethod } = req.body;
    const userId=req.user._id;

   // const user = await userRepository.getUserById(userId);

    if (!products || products.length === 0) {
      return res.status(400).json({ message: "No products provided" });
    }

    let totalPrice = 0;
    const orderProducts = [];

    for (let item of products) {
      const productData = await getproductbyId(item.product); // Fetch from service

      if (!productData) {
        return res.status(404).json({ message: `Product not found: ${item.product}` });
      }

      totalPrice += Number(productData.price) * item.quantity;

      orderProducts.push({
        product: item.product,
        quantity: item.quantity,
      });
    }

    const order = await createOrderService({
      user: userId, // From auth middleware
      products: orderProducts,
      shippingAddress,
      paymentMethod,
      totalPrice,
    });

    return res.status(StatusCodes.CREATED).json(successResponse(order));
  } catch (error) {
    console.log("Create order error:", error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json(internalErrorResponse(error));
  }
};

// Get All Orders
export const getAllOrdersController = async (req, res) => {
  try {
    const orders = await getAllOrders();
    return res.status(StatusCodes.OK).json(successResponse(orders));
  } catch (error) {
    console.log("Get all orders error:", error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json(internalErrorResponse(error));
  }
};

// Get Order by ID
export const getOrderByIdController = async (req, res) => {
  try {
    const order = await getOrderById(req.params.id);

    return res.status(StatusCodes.OK).json(successResponse(order));
  } catch (error) {
    console.log("Get order by ID error:", error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json(internalErrorResponse(error));
  }
};

// Update Order
export const updateOrderController = async (req, res) => {
  try {
    const updatedOrder = await updateOrder(req.params.id, req.body);
    return res.status(StatusCodes.OK).json(successResponse(updatedOrder));
  } catch (error) {
    console.log("Update order error:", error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json(internalErrorResponse(error));
  }
};

// Delete Order
export const deleteOrderController = async (req, res) => {
  try {
    const deletedOrder = await deleteOrder(req.params.id);
    return res.status(StatusCodes.OK).json(successResponse(deletedOrder));
  } catch (error) {
    console.log("Delete order error:", error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json(internalErrorResponse(error));
  }
};
