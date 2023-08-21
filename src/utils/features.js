import mongoose from "mongoose";
// const mongoose = require('mongoose');

export const connectDB = async() => {
 try{ 
  await mongoose.connect(process.env.MONGO_URI);
  console.log(`Database Connected`);
}
  catch{
    throw new Error("Database not Connected")
  }
};
