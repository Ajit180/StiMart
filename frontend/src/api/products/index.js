import axiosconfig from "../../config/axiosconfig";

export const GetAllProductsRequest = async (page) => {
  try {
    const response = await axiosconfig.get(`/product/getall?page=${page}&limit=${4}`);
    console.log("📦 All products fetched:", response.data);
    return response.data.data;
  } catch (error) {
    console.error("Error in fetching products:", error.response?.data || error.message);
    throw error.response?.data || error;
  }
};


export const GetProductByIdRequest = async(id)=>{

  try {
    const response = await axiosconfig.get(`/product/getproduct/${id}`);
    console.log("product is is ",response.data.data);
    return response.data.data;
    
  } catch (error) {
    console.log("Error is in fetching the api for the getproductsbyId",error);
    throw error;
  }
}