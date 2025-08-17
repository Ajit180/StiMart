import { createcartService, getAllCartService, getCartbyIdService } from "../service/cartService.js";


export const createCartController = async(req,res)=>{
    try {

        const {productId}=req.body;
        const {userId}=req.user;

        console.log("User id from the controller",userId);

        const response = await createcartService(productId,userId);

        return res.status(201).json({
            success:true,
            message:"Product added into the cart Successfully",
            data:response
        })
        
    } catch (error) {
        console.log("Error in the CreateController",error)
    }
}

export const getallCartController = async(req,res)=>{
    try {
        const {userId}=req.user;
        const getallcart = await getAllCartService(userId);

        if(!getallcart){
            return res.status(404).json({
                success:false,
                message:"no Cart found"
            })
        }

        return res.status(200).json({
            success:true,
            message:"All cart data get successfully",
            data:getallcart
        })
        
    } catch (error) {
        console.log("Error in getting all cart data in the controller",error);
    }
}



export const getCartByIdController = async(req,res)=>{

    try {

        const {id} = req.params;
        const {userId} = req.user; // why destructuring ? doubt

        const getcartbyId = await getCartbyIdService(id,userId);
        if(!getcartbyId){

            return res.status(404).json({
                success:false,
                message:"Cart Not Found"
            })
        }

        return res.status(200).json({
            success:true,
            message:"cart data is fetch successfully",
            data:getcartbyId
        })
        
    } catch (error) {
        console.log("Error while getting an cartbyid",error);
    }
}