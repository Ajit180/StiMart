import { StatusCodes } from "http-status-codes";
import {  createCategory, deletecategory, getallCategory, getCategorybyId, updatecategory } from "../service/categoryService.js";
import { internalErrorResponse, successResponse } from "../utils/Common/CommonResponse.js";


export const createCategoryController = async(req,res)=>{

    try {
        const create = await createCategory(req.body);

        return res.status(StatusCodes.CREATED).json(successResponse(create));
        
    } catch (error) {
        console.log('Error in creating the Category',error.message);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(internalErrorResponse(error));
    }
}


export const deleteCategoryController = async (req, res) => {
    try {
      const { id } = req.params;
  
      const deletedCategory = await deletecategory(id);
  
      if (!deletedCategory) {
        return res.status(404).json({ message: "Category not found" });
      }
  
      return res.status(200).json({
        message: "Category deleted successfully",
        category: deletedCategory,
      });
    } catch (error) {
      console.error("Error in deleting category:", error.message);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  };


  export const updateCategoryController = async (req, res) => {
    try {
      const {id} = req.params;
      const updateData = req.body;
      console.log(updateData);
  
      const updatedCategory = await updatecategory(id,updateData);
  
      if (!updatedCategory) {
        return res.status(404).json({ message: "Category not found" });
      }
  
      return res.status(200).json({
        message: "Category updated successfully",
        category: updatedCategory
      });
    } catch (error) {
      console.error("Error in updateCategoryController:", error.message);
      return res.status(500).json({ message: "Internal server error" });
    }
  };

  export const getCategoryByIdController = async (req, res) => {
    try {
      const {id} = req.params;
      const category = await getCategorybyId(id);
  
      if (!category) {
        return res.status(404).json({ message: "Category not found" });
      }
  
      return res.status(200).json({
        message: "Category fetched successfully",
        category,
      });
    } catch (error) {
      console.error("Error in getCategoryByIdController:", error.message);
      return res.status(500).json({ message: "Internal server error" });
    }
  };

  export const getCategoryAllController = async (req, res) => {
    try {
      const category = await getallCategory();
  
      if (!category) {
        return res.status(404).json({ message: "Category not found" });
      }
  
      return res.status(200).json({
        message: "Category fetched successfully",
        category,
      });
    } catch (error) {
      console.error("Error in getCategoryByIdController:", error.message);
      return res.status(500).json({ message: "Internal server error" });
    }
  };
  