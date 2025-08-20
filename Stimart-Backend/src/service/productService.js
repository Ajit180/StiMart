import Product from "../schema/products.js";
import Category from "../schema/category.js"
// Create a new product
export const createProduct = async (data) => {
  try {
    const newProduct = await Product.create(data);
    return newProduct;
  } catch (error) {
    console.log("Error in creating Product", error.message);
    throw error;
  }
};

// Get all products with pagination
export const getAllProducts = async (page = 1, limit = 10) => {
  try {
    const skip = (page - 1) * limit;
    const products = await Product.find()
      .skip(skip)
      .limit(limit)
      .populate("categoryId", "name");

    const total = await Product.countDocuments();
    const totalPages = Math.ceil(total / limit);

    return { products, page, total, totalPages };
  } catch (error) {
    console.log("Error in getting products", error.message);
    throw error;
  }
};


//Get Product by the filters like brand = ? category = ? price = ? rating ? 

export const getproductbyfilter = async(query)=>{

   
  try {

     const {category,brand,minPrice,maxPrice,Sortby,rating}=query;

    const filter ={};


    if(category){
      const categorydoc = await Category.findOne({name:category});
      if(!categorydoc){
        return []; // No Product found with this category
      }
      filter.categoryId = categorydoc._id;
    }
    
    if(brand) filter.brand = brand;
    if(minPrice && maxPrice) filter.price ={$gte:Number(minPrice),$lte:Number(maxPrice)};

    const sort = {};
     
    // GET /products?SortBy=price&order=desc
    if(Sortby)sort[Sortby]=order === "desc"?-1:1;

    const products = await Product.find(filter).sort(sort).populate("categoryId", "name");
    return products;

    
  } catch (error) {
    console.log("Error in getting products",error.message);
    throw error ;
  }
}


// Get a single product by ID
export const getProductById = async (id) => {
  try {
    const product = await Product.findById(id).populate("categoryId", "name");
    return product;
  } catch (error) {
    console.log("Error in getting product by ID", error.message);
    throw error;
  }
};

// Update a product by ID
export const updateProduct = async (id, data) => {
  try {
    const updated = await Product.findByIdAndUpdate(id, data, { new: true });
    return updated;
  } catch (error) {
    console.log("Error in updating product", error.message);
    throw error;
  }
};

// Delete a product by ID
export const deleteProduct = async (id) => {
  try {
    const deleted = await Product.findByIdAndDelete(id);
    return deleted;
  } catch (error) {
    console.log("Error in deleting product", error.message);
    throw error;
  }
};
