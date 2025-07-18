import Order from "../schema/orders.js";

// Create a new order
export const createOrderService = async (data, userId) => {
  try {
    const newOrder = await Order.create({ ...data, user: userId });
    return newOrder;
  } catch (error) {
    console.log("Error in creating Order", error.message);
  }
};

// Get a specific order by its ID
export const getAllOrders = async (orderId) => {
  try {
    const order = await Order.findById(orderId);
    return order;
  } catch (error) {
    console.log("Error in getting the order", error.message);
  }
};

// Get order by ID (duplicate of above — we can merge or rename this)
export const getOrderById = async (id) => {
  try {
    const order = await Order.findById(id);
    return order;
  } catch (error) {
    console.log("Error in getting Order by Id", error.message);
  }
};

// Update an order by ID
export const updateOrder = async (id, data) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(id, data, { new: true });
    return updatedOrder;
  } catch (error) {
    console.log("Error in updating the order", error.message);
  }
};

// Delete an order by ID
export const deleteOrder = async (id) => {
  try {
    const deletedOrder = await Order.findByIdAndDelete(id);
    return deletedOrder;
  } catch (error) {
    console.log("Error in deleting the order", error.message);
  }
};
