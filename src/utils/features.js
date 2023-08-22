import mongoose from "mongoose";
import { serialize } from "cookie";
var jwt = require("jsonwebtoken");
import { cookies } from "next/headers";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(`Database Connected`);
  } catch {
    throw new Error("Database not Connected");
  }
};

export const cookieSetter = (res, token, set) => {
  cookies().set("Set-Cookie", set ? token : "", {
    expires: Date.now() + 15 * (24 * 60 * 60 * 1000),
    httpOnly:true,
    path: "/",
  });
};

export const generateToken = (_id) => {
  return jwt.sign({ _id }, process.env.JWT_SECRET);
};
