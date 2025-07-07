import { StatusCodes } from "http-status-codes";
import userRepository from "../repository/userRepository.js";
import ClientError from "../utils/Error/clientError.js";
import bcrypt from 'bcrypt'
import { createJWT } from "../utils/Common/authUtils.js";

export const registerUser = async(userData)=>{
  try {

    const newUser = userRepository.create(userData);
    return newUser;
    
  } catch (error) {
     throw new Error('User registration falied',error.message);
  }
}


//this is for the verifying the email 
export const verifyToken = async (token)=>{

  try {

    const user = await userRepository.getbyToken(token);
    if(!user){
        throw ClientError({
            explanation:"Invalid data send from the client",
            message:"Invalid token",
            statusCode:StatusCodes.BAD_REQUEST
        })
    }

     // check if the token has expired or not
     if (user.verificationTokenExpiry < Date.now()) {
        throw new ClientError({
          explanation: 'Invalid data sent from the client',
          message: 'Token has expired',
          statusCode: StatusCodes.BAD_REQUEST
        });
      }
  
    
    user.isVerified=true;
    user.verificationToken=null;
    user.verificationTokenExpiry=null;
    await user.save();

    return user;
    
  } catch (error) {
    console.log('User service error', error);
    throw error;
  }
}


export const signinUser = async (data)=>{

    try {
        const user = await userRepository.getbyemail(data.email);//email from db is saved in the user variable
        if(!user){
            throw new ClientError({
                explanation:'Invalid data send from the Client',
                message:"No Registered User found with this email",
                statusCode:StatusCodes.NOT_FOUND
            });
        }

        // match the incoming password with the hashed password
        const isMatch = bcrypt.compareSync(data.password,user.password);

        if(!isMatch){
            throw new ClientError({
                explanation:'Invalid Password send from the Client',
                message:"Invalid Password try again",
                statusCode:StatusCodes.BAD_REQUEST
            });
        }

        return{
            username:user.username,
            avatar:user.avatar,
            email:user.email,
            _id:user._id,
            role:user.role,
            token:createJWT({id:user._id,email:user.email,role:user.role})
        }
        
    } catch (error) {
        console.log('User service error', error);
        throw error;
    }
}