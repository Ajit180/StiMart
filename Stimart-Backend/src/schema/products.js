import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Product name is required'],
    },
    description:{
        type:String,
        required:[true,'Product description is required'],
    },
    price:{
        type:String,
        required:[true,'Product price is requried'],
    },
    images:[{
        type:String,
        required:true,
    }
    ],
    categoryId:{
       type:mongoose.Schema.Types.ObjectId,
       ref:'Category',
       required:[true,'Product Category is required']
    },
    stock:{
        type:String,
        required:[true,'Product Quantity is requried'],
        default:1,
    },
    brand:{
        type:String,
        required:[true,'Product brand name is required']
    },
    rating:{
        type:String,
        required:[true,'Product rating is requried']
    }
},{timestamps:true})

const Product = mongoose.model('Product',productSchema);

export default Product;