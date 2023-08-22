import { User } from "@/models/user";
import { NextResponse } from "next/server";
import { connectDB, cookieSetter, generateToken } from "@/utils/features";
import bcrypt from 'bcrypt'

export const POST = async (request) => {
  try {
    await connectDB();
    const reqData = await request.json();

    const {email, password } = reqData;

    if (!email || !password) {
      return new NextResponse("Please Enter all fields", { status: 400 });
    }

    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return new NextResponse("Wrong Credentials", { status: 400 });
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
        return new NextResponse("Wrong Credentials", { status: 400 });
      }

    const token = generateToken(user._id);

    cookieSetter(NextResponse, token, true);

    return NextResponse.json({
      success: "true",
      message: `Welcome Back ${user.name}`,
    },{status:200});
  } catch (error) {
    return new NextResponse(error, { status: 500 });
  }
};
