import { User } from "@/models/user";
import { cookies } from "next/headers"
import { NextResponse } from "next/server";
var jwt = require("jsonwebtoken");

export const checkAuth = async()=>{
    const cookie = cookies().getAll()

    if(cookie.length === 0){
        return null;
    }
    const token = cookie[0].value;

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    return await User.findById(decoded._id)}

