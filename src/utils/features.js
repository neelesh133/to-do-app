import mongoose from "mongoose";
// const mongoose = require('mongoose');

export const connectDB = async() => {
 try{ 
    console.log(process.env.MONGO_URI);
  await mongoose.connect(process.env.MONGO_URI);
  console.log(`Database Connected`);
}
  catch{
    throw new Error("Database not Connected")
  }
};
