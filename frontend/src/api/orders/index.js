import axiosconfig from "../../config/axiosconfig";

export const GetAllProductsRequest = async (page) => {
  try {
    const response = await axiosconfig.get(`/product/getall?page=${page}&limit=${2}`);
    console.log("📦 All products fetched:", response.data);
    return response.data;
  } catch (error) {
    console.error("❌ Error in fetching products:", error.response?.data || error.message);
    throw error.response?.data || error;
  }
};