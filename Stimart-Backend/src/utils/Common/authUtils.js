import jwt from "jsonwebtoken"
import { JWT_EXPIRY,JWT_SECRET } from "../../config/serverconfigfile.js";

export const createJWT = (payload) => {
    return jwt.sign(payload, JWT_SECRET, {
      expiresIn: JWT_EXPIRY
    });
  };

export const verifyToken = (token)=>{
   return jwt.verify(token,process.env.JWT_SECRET);
}
