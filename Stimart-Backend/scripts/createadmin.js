import mongoose from "mongoose";
import { DB_URL,ADMIN_MAIL,ADMIN_PASSWORD,ADMIN_USERNAME } from "../src/config/serverconfigfile.js";
import User from "../src/schema/user.js";

await mongoose.connect(DB_URL);


const createAdmin = async ()=>{
    try {

        const existing = await User.findOne({email:ADMIN_MAIL});
     if(existing){
        console.log('Admin is already exits')
        process.exit();
     }
     
     const admin = new User({
        email:ADMIN_MAIL,
        username:ADMIN_USERNAME,
        password:ADMIN_PASSWORD,
        role:'admin',
        isVerified:true
     });


     await admin.save();
     console.log('Admin created successfully .')
     process.exit();
        
    } catch (error) {
        console.log("Error in Creating the Admin ",error.message);
    }
     
}

createAdmin();