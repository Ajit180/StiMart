import axiosconfig from "../../config/axiosconfig";


export const addtocartRequest =async({productId,token})=>{
    try {
        
       //axios.post(url, data, config)
        const response =  await axiosconfig.post('cart/create',
            {
                productId
            },
            {
                headers:{
                    "x-access-token":token
                },
            }
        )
        console.log("The Product is Added to the Cart",response.data);
        return response.data;
        
    } catch (error) {
        console.log("Getting an Error while Adding product into the Cart",error?.response || error.message)
        throw error?.response || error;
    }
}

export const getcartdetailsRequest =async(token)=>{ // here i am making an error that was {token}

     try {

        const response = await axiosconfig.get('cart/getallcart',
            {
                headers:{
                    "x-access-token":token
                },
            }
        )

        return response.data;

        
     } catch (error) {
        
        console.log("Error while getting an data of cart",error?.response.data || error.message)
        throw error?.response || error;
     }  
}