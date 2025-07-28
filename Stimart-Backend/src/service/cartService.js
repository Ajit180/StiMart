import Cart from "../schema/cart.js";
import Product from "../schema/products.js";


export const createcartService =async(productId,userId)=>{
     try {
            const product = await Product.findById(productId);
     if(!product){
          throw new Error("Product not found");
     }

     //check 
     const cart = await Cart.findOne({user:userId});
     //if no cart found , create new 
     if(!cart){
          const newCart = await Cart.create({
               user:userId,
               products:[
                    {
                         product:productId
                    },
               ],
               totalPrice:product.price,
          })

          newCart.save();
          return newCart;
     }

     //if Product is already present in cart
     const productIndex = cart.products.findIndex(
          (item)=>item.product.toString()===productId.toString()
     )

     if(productIndex!==-1){
          //Product already in cart , increase the quantity
          cart.products[productIndex].quantity +=1;
     }else{
          //new product , add to cart
          cart.products.push({product:productId,quantity:1});
     }

     //recalculate totalprice
     
     cart.save();
     return cart;

          
     } catch (error) {
          console.log("Error in the Create Cart Service ",error);
          throw error;
     }

   

}


export const getAllCartService = async()=>{

     try {

          const getallcart = await Cart.find();
          return getallcart;
          
     } catch (error) {
          console.log("Error in getting all cart data",error);
          throw error;
     }
}



export const getCartbyIdService = async(id,userId)=>{

    try {

        //check the user have cart or not 
        const user = await Cart.findOne({user:userId});

        //throw error if userId is not provided
        if(!user){
          throw new Error("UserId is not provided");
        }
        

        const cart = await Cart.findById(id);

        if(!cart){
          throw new Error("CardId is not provided");
        }

        return cart;

        
    } catch (error) {
        console.log("Error while getting an cartById in the service layer",error);
        throw error;
    }
}