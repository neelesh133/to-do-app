import React from 'react'
import Link from 'next/link'
import {LogoutBtn} from '../Client/Button/button'

export const Header = () => {
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

export const TodoItem = ({title,description}) => {
  return (
    <div className='todo'>
        <div>
            <h4>{title}</h4>
            <p>{description}</p>
        </div>
        <div></div>
    </div>
  )
}

