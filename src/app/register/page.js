"use client"

import { Context } from '@/components/Client/ClientComponents';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useContext, useState } from 'react'
import { toast } from 'react-hot-toast';

const page = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {setUser } = useContext(Context);
  var userDupl = {};

  const registerHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        body: JSON.stringify({
          name,
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
      toast.error(data.message)
    }
  }
    catch (error) {
    return toast.error("Some error occured please try again")
     }

    if(userDupl._id){
      router.push('/')
    }
  }


  return (
    <div className='login'>
    <section>
      <form onSubmit={registerHandler}>
      <input
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
            type="text"
            placeholder="Enter Name"
          />
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
      <button type="submit">Sign Up</button>

      <p>OR</p>
      <Link href={'/login'}>Login</Link>
      </form>
    </section>
  </div>
  )
}

export const metadata = {
    title: "To-Do App | Register",
    description: "Register page of Todo app to keep track of your daily worklods ",
  };

export default page
