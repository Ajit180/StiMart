import { CategoryRepository } from "../repository/categoryRepository.js";

export const createCategory = async(data)=>{

    try {
        const category = await CategoryRepository.create(data);
        return category;
        
    } catch (error) {
        console.log('Error in Creating Category');
    }
}

//here i am getting the product from the db
export const getallCategory = async()=>{
   try {

    const category = await CategoryRepository.getAll();
    return category;
    
   } catch (error) {
     console.log('Error in getting category',error.message);
   }
}

export const getCategorybyId = async(id)=>{

    try {
        const category = await CategoryRepository.getById(id);
        return category;
        
    } catch (error) {
        console.log('Error in getting Category by Id',error.message);
    }
}

export const updatecategory = async(id,data)=>{
    try {
        const category = await CategoryRepository.update(id,data);
        return category;
        
    } catch (error) {
        console.log('Error in updating the Category',error,message);
    }
};

export const deletecategory = async(id)=>{
    try {
        const category = await CategoryRepository.delete(id);
        return category;
        
    } catch (error) {
       console.log('Error in deleting the Category',error.message);
    }
}
