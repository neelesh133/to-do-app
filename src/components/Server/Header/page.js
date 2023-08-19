import React from 'react'
import Link from 'next/link'
import {LogoutBtn} from '../../Client/Button/button'

const page = () => {
  return (
    <div className='header'>
      <div>
        <h2>To-Do</h2>
      </div>
      <article>
        <Link href={'/'}>Home</Link>
        <Link href={'/about'}>About</Link>
        <LogoutBtn/>
      </article>
    </div>
  )
}

export default page
