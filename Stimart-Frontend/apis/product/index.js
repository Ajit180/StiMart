import axiosIntance from "@/libs/axiosconfig"; // base axios with .env URL

// ✅ Get all products
export const getAllProducts = async () => {
  try {
    const response = await axiosIntance.get("/product/getall");
    return response.data;
  } catch (error) {
    console.error("Error fetching all products:", error);
    throw new Error(
      error?.response?.data?.message || "Failed to fetch products"
    );
  }
};


// ✅ Get a single product by ID
export const getProductById = async (id) => {
  try {
    const res = await axiosIntance.get(`/product/getproduct/${id}`);
    return res.data;
  } catch (error) {
    console.error(`Error fetching product with ID ${id}:`, error);
    throw new Error(
      error?.response?.data?.message || "Failed to fetch product"
    );
  }
};
