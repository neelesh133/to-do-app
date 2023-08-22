import { Task } from "@/models/task";
import { connectDB } from "../../../utils/features";
import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";

export const POST = async (request) => {
  try {
    await connectDB();
    const reqData = await request.json();
    const {title, description} = reqData;
    const newTask = await Task.create({
      title: title,
      description: description,
      user: new ObjectId('123456789012')
    })

    return NextResponse.json({
      success: "true",
      message: "Task created",
      newTask})
    
  } 
  catch(error) { 
    return new NextResponse(error,{status:500})}
};
