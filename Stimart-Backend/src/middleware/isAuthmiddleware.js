import { StatusCodes } from 'http-status-codes';
import jwt from 'jsonwebtoken';
import {customErrorResponse,internalErrorResponse} from '../utils/Common/CommonResponse.js'
import userRepository from '../repository/userRepository.js';
import { JWT_SECRET } from '../config/serverconfigfile.js';

export const isAuthenticated = async (req, res, next) => {
  try {
    const token = req.headers['x-access-token'];

    if (!token) {
      return res.status(StatusCodes.FORBIDDEN).json(
        customErrorResponse({
          message: 'No auth token provided'
        })
      );
    }

    const response = jwt.verify(token, JWT_SECRET);

    if (!response) {
      return res.status(StatusCodes.FORBIDDEN).json(
        customErrorResponse({
          explanation: 'Invalid data sent from the client',
          message: 'Invalid auth token provided'
        })
      );
    }

    const user = await userRepository.getById(response.id);
    // console.log("Authenticated user:", user);
    req.user = user; // here i did not passed the _ so facing an error 
    next();
  } catch (error) {
    console.log('Auth middleware error', error);
    if (
      error.name === 'JsonWebTokenError' ||
      error.name === 'TokenExpiredError'
    ) {
      return res.status(StatusCodes.FORBIDDEN).json(
        customErrorResponse({
          explanation: 'Invalid data sent from the client',
          message: 'Invalid auth token provided'
        })
      );
    }
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json(internalErrorResponse(error));
  }
};
