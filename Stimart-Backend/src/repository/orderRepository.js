import crudRepository from "./crudRepository.js";
import Order from "../schema/orders.js";
import Product from "../schema/products.js";


export const OrderRepository ={
    ...crudRepository(Order),

    getById: async (id) => {
        return await Order.findById(id)
          .populate("products.product", "name price images")
          .populate("user", "username email");
      },
    
    
}