import Category from "../schema/category.js";

// CREATE
export const createCategory = async (data) => {
  try {
    const category = await Category.create(data);
    return category;
  } catch (error) {
    console.log("Error in Creating Category:", error.message);
  }
};

// READ ALL
export const getallCategory = async () => {
  try {
    const categories = await Category.find();
    return categories;
  } catch (error) {
    console.log("Error in getting category:", error.message);
  }
};

// READ BY ID
export const getCategorybyId = async (id) => {
  try {
    const category = await Category.findById(id);
    return category;
  } catch (error) {
    console.log("Error in getting Category by Id:", error.message);
  }
};

// UPDATE
export const updatecategory = async (id, data) => {
  try {
    const category = await Category.findByIdAndUpdate(id, data, { new: true });
    return category;
  } catch (error) {
    console.log("Error in updating the Category:", error.message);
  }
};

// DELETE
export const deletecategory = async (id) => {
  try {
    const category = await Category.findByIdAndDelete(id);
    return category;
  } catch (error) {
    console.log("Error in deleting the Category:", error.message);
  }
};
