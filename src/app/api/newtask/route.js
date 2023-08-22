import { Task } from "@/models/task";
import { connectDB } from "../../../utils/features";
import { NextResponse } from "next/server";
import { checkAuth } from "@/middlewares/authCheck";

export const POST = async (request) => {
  try {
    await connectDB();

    
    const user = await checkAuth();

    if(!user){
        return NextResponse.json({
            success: false,
            message: "Please Login"
        }, {status:401})
    }

    const reqData = await request.json();

    const {title, description} = reqData;

    if(!title || !description) {
      return NextResponse.json({
        success: "false",
        message: "Please enter all fields",
        },{status:400})
    }

    const newTask = await Task.create({
      title: title,
      description: description,
      user: user._id
    })

    return NextResponse.json({
      success: "true",
      message: "Task created",
      newTask})
    
  } 
  catch(error) { 
    return new NextResponse(error,{status:500})}
};
