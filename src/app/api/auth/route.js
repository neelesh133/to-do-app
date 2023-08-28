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
      return NextResponse.json({success: "false",message: "Please enter all fields"}, { status: 400 });
    }

    let user = await User.findOne({ email }).select("+password");

    if (!user) {
      return NextResponse.json({success: "false",message: "Wrong Credentials"}, { status: 400 });
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
      return NextResponse.json({success: "false",message: "Wrong Credentials"}, { status: 400 });
      }

    const token = generateToken(user._id);

    cookieSetter(NextResponse, token, true);

    return NextResponse.json({
      success: "true",
      message: `Welcome Back ${user.name}`,
      user
    },{status:200});
  } catch (error) {
    return new NextResponse(error, { status: 500 });
  }
};
