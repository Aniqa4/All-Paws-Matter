'use client'
import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  
  return (
    <div className={` z-40 fixed top-0 w-full bg-red-700 py-4 shadow-lg`}>
      <ul className='container mx-auto flex justify-between items-center text-white'>
        <li><Link href={'/'}>all-<span className=' font-bold text-2xl'>P</span>aws-Matter</Link></li>
        <li><Link href={'find-cats'}>Find Cats</Link></li>
        <li><Link href={'/Log-in'}>Join Us</Link></li>
      </ul>
    </div>
  )
}
