import { StatusCodes } from 'http-status-codes';
import jwt from 'jsonwebtoken';
import {customErrorResponse,internalErrorResponse} from '../utils/Common/CommonResponse.js'
import { JWT_SECRET } from '../config/serverconfigfile.js';
import { getUserById } from '../service/userService.js';

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

    const user = await getUserById(response.id);
    req.user = {
      userId: user._id,
      role: user.role,
    };

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
