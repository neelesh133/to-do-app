import { User } from "@/models/user";
import { NextResponse } from "next/server";

export const POST = async (request) => {
    try {
      await connectDB();
      const reqData = await request.json();

      const {email, password} = reqData;

      const newTask = await User.create({})
  
      return NextResponse.json({
        success: "true",
        message: "Task created",
        newTask})
      
    } 
    catch(error) { 
      return new NextResponse(error,{status:500})}
  };