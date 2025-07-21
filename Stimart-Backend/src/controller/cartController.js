import { createcartService } from "../service/cartService.js";


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