"use client";

import { Context } from "@/components/Client/ClientComponents";
import Link from "next/link";
import React, { useState } from "react";
import { useContext } from "react";
import { useRouter } from 'next/navigation'
import { toast } from "react-hot-toast";

const login = () => {
  const router = useRouter()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, setUser } = useContext(Context);
  var userDupl = {};
  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/auth", {
        method: "POST",
        body: JSON.stringify({
          email,
          password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      if(data.success === 'true'){
        console.log(data.success);
      setUser(data.user);
      userDupl = data.user
      toast.success(data.message)
    }
    else{
      toast.error("Invalid email or password")
    }
  }
    catch (error) {
    return toast.error("Invalid email or password")
     }

    if(userDupl._id){
      router.push('/')
    }

  };
  return (
    <div className="login">
      <section>
        <form onSubmit={loginHandler}>
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            type="email"
            placeholder="Enter Email"
          />
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
            type="password"
            placeholder="Enter Password"
          />
          <button type="submit">Login</button>

          <p>OR</p>
          <Link href={"/register"}>New User</Link>
        </form>
      </section>
    </div>
  );
};

export const metadata = {
  title: "To-Do App | Login",
  description: "Login page of Todo app to keep track of your daily worklods ",
};

export default login;
