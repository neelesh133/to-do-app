import { User } from "@/models/user";
import { connectDB } from "../../../utils/features";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  try {
    await connectDB();

    const ussss = await User.create({
        name: "sjnaid",
        email: "dafsaxfsad",
        password: "asdnaidw"
    })

    return NextResponse.json(ussss)
    
  } 
  catch(error) { 
    return NextResponse(error,{status:500})}
};
