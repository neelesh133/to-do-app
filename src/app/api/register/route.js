import { User } from "@/models/user";
import { NextResponse } from "next/server";
import { connectDB, cookieSetter, generateToken } from "@/utils/features";

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

    user = await User.create({
      name,
      email,
      password,
    });

    const token = generateToken(user._id);
    console.log(token);

    cookieSetter(NextResponse, token, true);

    return NextResponse.json({
      success: "true",
      message: "User Registered",
      user,
    });
  } catch (error) {
    return new NextResponse(error, { status: 500 });
  }
};
