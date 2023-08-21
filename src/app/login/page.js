"use client"

import Link from 'next/link'
import React from 'react'

const login = () => {
  return (
    <div className='login'>
      <section>
        <form>
        <input type="email" placeholder='Enter Email'/>
        <input type="password" placeholder='Enter Password'/>
        <button type="submit">Login</button>

        <p>OR</p>
        <Link href={'/register'}>New User</Link>
        </form>
      </section>
    </div>
  )
}

export const metadata = {
  title: "To-Do App | Login",
  description: "Login page of Todo app to keep track of your daily worklods ",
};

export default login
