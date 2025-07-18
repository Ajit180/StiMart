import { StatusCodes } from "http-status-codes";
import bcrypt from "bcrypt";
import User from "../schema/user.js";
import ClientError from "../utils/Error/clientError.js";
import { createJWT } from "../utils/Common/authUtils.js";

// REGISTER USER
export const registerUser = async (userData) => {
  try {
    const newUser = await User.create(userData);
    return newUser;
  } catch (error) {
    throw new Error("User registration failed: " + error.message);
  }
};

// VERIFY EMAIL TOKEN
export const verifyToken = async (token) => {
  try {
    const user = await User.findOne({ verificationToken: token });
    if (!user) {
      throw new ClientError({
        explanation: "Invalid data sent from the client",
        message: "Invalid token",
        statusCode: StatusCodes.BAD_REQUEST,
      });
    }

    if (user.verificationTokenExpiry < Date.now()) {
      throw new ClientError({
        explanation: "Token expired",
        message: "Token has expired",
        statusCode: StatusCodes.BAD_REQUEST,
      });
    }

    user.isVerified = true;
    user.verificationToken = null;
    user.verificationTokenExpiry = null;
    await user.save();

    return user;
  } catch (error) {
    console.log("User service error", error);
    throw error;
  }
};

// SIGN IN USER
export const signinUser = async (data) => {
  try {
    const user = await User.findOne({ email: data.email });
    if (!user) {
      throw new ClientError({
        explanation: "Invalid data sent from the client",
        message: "No registered user found with this email",
        statusCode: StatusCodes.NOT_FOUND,
      });
    }

    const isMatch = bcrypt.compareSync(data.password, user.password);
    if (!isMatch) {
      throw new ClientError({
        explanation: "Invalid password",
        message: "Invalid password, try again",
        statusCode: StatusCodes.BAD_REQUEST,
      });
    }

    return {
      username: user.username,
      avatar: user.avatar,
      email: user.email,
      _id: user._id,
      role: user.role,
      token: createJWT({ id: user._id, email: user.email, role: user.role }),
    };
  } catch (error) {
    console.log("User service error", error);
    throw error;
  }
};

// GET USER BY EMAIL
export const getUserByEmail = async (email) => {
  return await User.findOne({ email });
};

// GET USER BY USERNAME
export const getUserByUsername = async (username) => {
  return await User.findOne({ username });
};

// GET USER BY VERIFICATION TOKEN
export const getUserByToken = async (token) => {
  return await User.findOne({ verificationToken: token });
};

// GET USER BY ID
export const getUserById = async (userId) => {
  try {
    const user = await User.findById(userId);
    return user;
  } catch (error) {
    console.log("Error fetching user by ID:", error.message);
    throw new Error("User not found");
  }
};

// (Optional) CREATE ADMIN PLACEHOLDER
export const createAdmin = async () => {
  // Your admin creation logic here
};
