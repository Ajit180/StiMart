import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Product Category is required']
    },
    slug:{
        type:String,
        required:[true,'slug is required']
    },

},{timestamps:true});


const Category = mongoose.model('Category',categorySchema);

export default Category;