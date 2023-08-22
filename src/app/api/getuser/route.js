
import { NextResponse } from "next/server";
import { checkAuth } from "@/middlewares/authCheck";

export const GET = async () => {
  try {
    const user = await checkAuth();

    if(!user){
        return NextResponse.json({
            success: false,
            message: "Please Login"
        }, {status:401})
    }

    return NextResponse.json({
      success: "true",
      user,
    },{status:200});
  } catch (error) {
    return new NextResponse(error, { status: 500 });
  }
};
