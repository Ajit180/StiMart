import crudRepository from "./crudRepository.js";
import Product from "../schema/products.js";



export const ProductRepository = {
    ...crudRepository(Product),
    
    getbyid: async(id)=>{
        return await Product.findById(id).populate('categoryId','name');
    },

    getall:async()=>{
        return await Product.find().populate('categoryId','name');
    }
    
}