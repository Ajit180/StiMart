import { StatusCodes } from "http-status-codes";
import { createCartService, getCartByUserId, addProductToCart, removeProductFromCart, updateCart, deleteCart } from "../service/cartService.js";
 // Assuming you have utility functions for response formatting
 import { successResponse,internalErrorResponse } from "../utils/Common/CommonResponse.js";
import { getproductbyId } from "../service/productRepository.js";

// Create or update the user's cart
export const createOrUpdateCartController = async (req, res) => {
  try {
  
    const { products, shippingAddress, paymentMethod } = req.body; // Data from the request body
    const userId = req.user._id; // User ID from the authenticated user (middleware)
    if (!userId) {
        return res.status(400).json({ message: "User ID is missing" });
      }

    // Check if no products are provided
    if (!products || products.length === 0) {
      return res.status(StatusCodes.BAD_REQUEST).json({ message: "No products provided" });
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

    const cartData = {
      totalPrice,  
      products,
      shippingAddress,
      paymentMethod,
    };

    const cart = await createCartService(cartData, userId);

    return res.status(StatusCodes.CREATED).json(successResponse(cart));
  } catch (error) {
    console.log("Create/Update Cart Error:", error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(internalErrorResponse(error));
  }
};

// Get the cart of a specific user
export const getCartController = async (req, res) => {
  try {
    const userId = req.user._id; // User ID from the authenticated user (middleware)

    const cart = await getCartByUserId(userId);
    if (!cart) {
      return res.status(StatusCodes.NOT_FOUND).json({ message: "Cart not found" });
    }

    return res.status(StatusCodes.OK).json(successResponse(cart));
  } catch (error) {
    console.log("Get Cart Error:", error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(internalErrorResponse(error));
  }
};

// Add product to the user's cart
export const addProductToCartController = async (req, res) => {
  try {
    const userId = req.user._id; // User ID from the authenticated user (middleware)
    const { productId, quantity } = req.body; // Data from the request body

    if (!productId || !quantity) {
      return res.status(StatusCodes.BAD_REQUEST).json({ message: "Product ID and quantity are required" });
    }

    const updatedCart = await addProductToCart(userId, productId, quantity);

    if (!updatedCart) {
      return res.status(StatusCodes.NOT_FOUND).json({ message: "Cart not found for the user" });
    }

    return res.status(StatusCodes.OK).json(successResponse(updatedCart));
  } catch (error) {
    console.log("Add Product to Cart Error:", error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(internalErrorResponse(error));
  }
};

// Remove product from the user's cart
export const removeProductFromCartController = async (req, res) => {
  try {
    const userId = req.user._id; // User ID from the authenticated user (middleware)
    const { productId } = req.params; // Data from the request parameters

    if (!productId) {
      return res.status(StatusCodes.BAD_REQUEST).json({ message: "Product ID is required" });
    }

    const updatedCart = await removeProductFromCart(userId, productId);

    if (!updatedCart) {
      return res.status(StatusCodes.NOT_FOUND).json({ message: "Cart not found for the user" });
    }

    return res.status(StatusCodes.OK).json(successResponse(updatedCart));
  } catch (error) {
    console.log("Remove Product from Cart Error:", error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(internalErrorResponse(error));
  }
};

// Update cart (e.g., updating product quantity or cart details)
export const updateCartController = async (req, res) => {
  try {
    const userId = req.user._id; // User ID from the authenticated user (middleware)
    const { products, shippingAddress, paymentMethod } = req.body; // Data from the request body

    const updatedCart = await updateCart(userId, { products, shippingAddress, paymentMethod });

    if (!updatedCart) {
      return res.status(StatusCodes.NOT_FOUND).json({ message: "Cart not found for the user" });
    }

    return res.status(StatusCodes.OK).json(successResponse(updatedCart));
  } catch (error) {
    console.log("Update Cart Error:", error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(internalErrorResponse(error));
  }
};

// Delete the user's cart
export const deleteCartController = async (req, res) => {
  try {
    const userId = req.user._id; // User ID from the authenticated user (middleware)

    const deletedCart = await deleteCart(userId);

    if (!deletedCart) {
      return res.status(StatusCodes.NOT_FOUND).json({ message: "Cart not found for the user" });
    }

    return res.status(StatusCodes.OK).json(successResponse({ message: "Cart deleted successfully" }));
  } catch (error) {
    console.log("Delete Cart Error:", error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(internalErrorResponse(error));
  }
};
