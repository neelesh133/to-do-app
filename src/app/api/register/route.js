import { User } from "@/models/user";
import { NextResponse } from "next/server";
import { connectDB, cookieSetter, generateToken } from "@/utils/features";
import bcrypt from 'bcrypt'

export const POST = async (request) => {
  try {
    await connectDB();
    const reqData = await request.json();

    const { name, email, password } = reqData;

    if (!name || !email || !password) {
      return new NextResponse("Please Enter all fields", { status: 400 });
    }

    let user = await User.findOne({ email });

    if (user) {
      return new NextResponse("Already Registered", { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password,10)

    user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    const token = generateToken(user._id);

    cookieSetter(NextResponse, token, true);

    return NextResponse.json({
      success: "true",
      message: "User Registered",
      user,
    },{status:201});
  } catch (error) {
    return new NextResponse(error, { status: 500 });
  }
};
