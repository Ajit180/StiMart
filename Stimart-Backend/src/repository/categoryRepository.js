import crudRepository from "./crudRepository.js";
import Category from "../schema/category.js";


export const CategoryRepository = {
    ...crudRepository(Category),
    
}