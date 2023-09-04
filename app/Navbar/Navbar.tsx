import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div>
      <ul className='flex justify-between'>
        <li><Link href={'/'}>Home</Link></li>
        <li><Link href={'/Log-in'}>Log In</Link></li>
        <li><Link href={'find-cats'}>Find Cats</Link></li>
      </ul>
    </div>
  )
}
