import { connectDB } from "../../../../utils/features";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  try {
    await connectDB();
    return new NextResponse("Connected Successfully",{status:200})
  } catch { 
    return new NextResponse(" NOT Connected Successfully",{status:500})}
  //   return new Response("kelee;",{
  //     status: 200
  //   })
};
