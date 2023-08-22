import { Task } from "@/models/task";
import { connectDB } from "../../../utils/features";
import { NextResponse } from "next/server";
import { checkAuth } from "@/middlewares/authCheck";

export const GET = async () => {
  try {
    await connectDB();

    const user = await checkAuth();

    if(!user){
        return NextResponse.json({
            success: false,
            message: "Please Login"
        }, {status:401})
    }

    const tasks = await Task.find({user: user._id});

    return NextResponse.json({
        success: "true",
        tasks
      },{status:200});
  }
  catch(error) { 
    return new NextResponse(error,{status:500})}
};
