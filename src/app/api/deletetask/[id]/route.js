import { Task } from "@/models/task";
import { NextResponse } from "next/server";
import { connectDB } from "@/utils/features";
import { checkAuth } from "@/middlewares/authCheck";

export const DELETE = async (request,{params}) => {
  try {
    await connectDB();

    const user = await checkAuth();
    
    if(!user){
      return NextResponse.json({
        success: false,
        message: "Please Login"
      }, {status:401})
    }
    
    const taskId = params.id;

    let task = await Task.findById(taskId)

    if(!task){
      return NextResponse.json({
        success: false,
        message: "Task not Found"
      }, {status:404})
    }
    
    await Task.deleteOne({_id: taskId})


    return NextResponse.json({
      success: "true",
      message: `Task Deleted Successfully`
    },{status:200});
    
  } 
  catch(error) { 
    return new NextResponse(error,{status:500})}
};
