import { StatusCodes } from "http-status-codes";

export const authorizeRoles = (...allowedRoles) => {
    return (req, res, next) => {
      if (!allowedRoles.includes(req.user.role)) {
        return res.status(StatusCodes.FORBIDDEN).json({
          message: 'Access Denied: You do not have permission to access this resource'
        });
      }
      next();
    };
  };
  