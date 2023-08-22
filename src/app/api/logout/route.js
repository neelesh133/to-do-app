
import { NextResponse } from "next/server";
import { cookieSetter} from "@/utils/features";
import { cookies } from "next/headers";

export const GET = async (request) => {
  try {
    cookies().delete('Set-Cookie')

    return NextResponse.json({
      success: "true",
      message: `Logged Out Successfully`,
    },{status:200});
  } catch (error) {
    return new NextResponse(error, { status: 500 });
  }
};
