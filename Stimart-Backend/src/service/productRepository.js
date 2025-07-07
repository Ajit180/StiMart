import { ProductRepository } from "../repository/productRepository.js";


export const createproduct = async(data)=>{
    try {
        const newproduct = await ProductRepository.create(data);
        return newproduct;
        
    } catch (error) {
        console.log("Error in creating Product",error.message);
    }
}

//here i am getting the product from the db
export const getallProduct = async()=>{
   try {

    const product = await ProductRepository.getall();
    return product;
    
   } catch (error) {
     console.log('Error in getting the product',error.message);
   }
}

export const getproductbyId = async(id)=>{

    try {
        const product = await ProductRepository.getbyid(id);
        return product;
        
    } catch (error) {
        console.log('Error in getting Product by Id',error.message);
    }
}

export const updateproduct = async(id,data)=>{
    try {
        const product = await ProductRepository.update(id,data);
        return product;
        
    } catch (error) {
        console.log('Error in updating the product',error,message);
    }
};

export const deleteproduct = async(id)=>{
    try {
        const product = await ProductRepository.delete(id);
        return product;
        
    } catch (error) {
       console.log('Error in deleting the product',error.message);
    }
}