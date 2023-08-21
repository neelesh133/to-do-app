"use client"

import Link from 'next/link';
import React from 'react'

const page = () => {
  return (
    <div className='login'>
    <section>
      <form>
      <input type="text" placeholder='Enter Name'/>
      <input type="email" placeholder='Enter Email'/>
      <input type="password" placeholder='Enter Password'/>
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
