import { OrderRepository } from "../repository/orderRepository.js";
import Order from "../schema/orders.js";

export const createOrderService = async (data,id) => {
  try {

  const newOrder = await OrderRepository.create(data,id);
  return newOrder;
  
  } catch (error) {
    console.log("Error in creating Order", error.message);
  }
};

// here i am getting the order from the db
export const getAllOrders = async (OrderId) => {
  try {
    const order = await Order.findById(OrderId)
    
    return order;
  } catch (error) {
    console.log("Error in getting the orders", error.message);
  }
};

export const getOrderById = async (id) => {
  try {
    const order = await OrderRepository.getById(id);
    return order;
  } catch (error) {
    console.log("Error in getting Order by Id", error.message);
  }
};

export const updateOrder = async (id, data) => {
  try {
    const order = await OrderRepository.update(id, data);
    return order;
  } catch (error) {
    console.log("Error in updating the order", error.message);
  }
};

export const deleteOrder = async (id) => {
  try {
    const order = await OrderRepository.delete(id);
    return order;
  } catch (error) {
    console.log("Error in deleting the order", error.message);
  }
};
