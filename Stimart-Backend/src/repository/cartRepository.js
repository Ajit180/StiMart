import crudRepository from "./crudRepository.js";
import Cart from "../schema/cart.js";

export const CartRepository = {
    ...crudRepository(Cart),
}