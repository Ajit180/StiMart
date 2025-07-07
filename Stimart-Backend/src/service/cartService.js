import { CartRepository } from "../repository/cartRepository.js"; // Assuming you will create a CartRepository
import Cart from "../schema/cart.js"; // Assuming you will have a Cart schema

// Create a new cart
export const createCartService = async (data, userId) => {
  try {
    // Check if a cart already exists for the user (to prevent multiple carts per user)
    let cart = await CartRepository.findOne(userId);
    if (cart) {
      // If cart exists, you can update the cart instead of creating a new one
      return await CartRepository.update(cart._id, data);
    } else {
      // If cart doesn't exist, create a new cart
      const newCart = await CartRepository.create({ user: userId, ...data });
      return newCart;
    }
  } catch (error) {
    console.log("Error in creating Cart", error.message);
  }
};

// Get all carts (if needed, e.g., for admin use)
export const getAllCarts = async () => {
  try {
    const carts = await Cart.find();
    return carts;
  } catch (error) {
    console.log("Error in getting all carts", error.message);
  }
};

// Get a cart by user ID
export const getCartByUserId = async (userId) => {
  try {
    const cart = await CartRepository.findOne({ user: userId });
    if (!cart) {
      return null; // If cart does not exist for the user
    }
    return cart;
  } catch (error) {
    console.log("Error in getting Cart by User ID", error.message);
  }
};

// Add products to cart (or update product quantity if it already exists)
export const addProductToCart = async (userId, productId, quantity) => {
  try {
    const cart = await CartRepository.findOne({ user: userId });
    if (!cart) {
      return null; // Cart does not exist for this user
    }

    // Check if the product already exists in the cart
    const productIndex = cart.products.findIndex(
      (item) => item.product.toString() === productId.toString()
    );

    if (productIndex > -1) {
      // If product exists, update the quantity
      cart.products[productIndex].quantity += quantity;
    } else {
      // If product does not exist, add it to the cart
      cart.products.push({ product: productId, quantity });
    }

    // Recalculate total price
    let totalPrice = 0;
    for (let item of cart.products) {
      const productData = await Product.findById(item.product);
      totalPrice += productData.price * item.quantity;
    }

    cart.totalPrice = totalPrice;

    // Save the cart
    await cart.save();
    return cart;
  } catch (error) {
    console.log("Error in adding product to Cart", error.message);
  }
};

// Remove product from cart
export const removeProductFromCart = async (userId, productId) => {
  try {
    const cart = await CartRepository.findOne({ user: userId });
    if (!cart) {
      return null; // Cart does not exist for this user
    }

    // Filter out the product
    cart.products = cart.products.filter(
      (item) => item.product.toString() !== productId.toString()
    );

    // Recalculate total price
    let totalPrice = 0;
    for (let item of cart.products) {
      const productData = await Product.findById(item.product);
      totalPrice += productData.price * item.quantity;
    }

    cart.totalPrice = totalPrice;

    // Save the cart
    await cart.save();
    return cart;
  } catch (error) {
    console.log("Error in removing product from Cart", error.message);
  }
};

// Update cart (for example, updating product quantity)
export const updateCart = async (userId, data) => {
  try {
    const cart = await CartRepository.findOne({ user: userId });
    if (!cart) {
      return null; // Cart does not exist for this user
    }

    // Update cart products and recalculate total price
    cart.products = data.products;
    let totalPrice = 0;
    for (let item of cart.products) {
      const productData = await Product.findById(item.product);
      totalPrice += productData.price * item.quantity;
    }

    cart.totalPrice = totalPrice;

    // Save the cart
    await cart.save();
    return cart;
  } catch (error) {
    console.log("Error in updating Cart", error.message);
  }
};

// Delete cart
export const deleteCart = async (userId) => {
  try {
    const cart = await CartRepository.findOneAndDelete({ user: userId });
    if (!cart) {
      return null; // Cart does not exist for this user
    }
    return cart;
  } catch (error) {
    console.log("Error in deleting Cart", error.message);
  }
};
