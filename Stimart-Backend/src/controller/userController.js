import { StatusCodes } from "http-status-codes";
import { registerUser, signinUser } from "../service/userService.js";
import { customErrorResponse, internalErrorResponse, successResponse } from "../utils/Common/CommonResponse.js";

export const register = async (req, res) => {
    try {
      const user = await registerUser(req.body);

     return res.status(201).json({ message: 'User created successfully', user });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };


  export const SigninController = async(req,res)=>{
    try {
        const response = await signinUser(req.body);
        return res.status(StatusCodes.OK) .json(successResponse(response,"user is Signed in Successfully"));

        
    } catch (error) {
          console.log('User controller error', error);
    if (error.statusCode) {
      return res.status(error.statusCode).json(customErrorResponse(error));
    }

    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json(internalErrorResponse(error));
    }
  }