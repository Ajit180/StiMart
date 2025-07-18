import rateLimit from "express-rate-limit";

export const getLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 200, // Limit each IP to 100 requests per window
    message: 'Too many requests from this IP, please try again later',
  });