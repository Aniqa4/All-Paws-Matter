import Link from 'next/link';
import React from 'react';
import { BiSolidUserAccount } from 'react-icons/bi';

export default function Navbar() {
  
  return (
    <div className={` z-40 fixed top-0 w-full bg-emerald-900 py-4 shadow-lg`}>
      <ul className='container mx-auto flex justify-between items-center text-white'>
        <li><Link href={'/'}>all<span className=' font-bold text-2xl'>P</span>awsMatter</Link></li>
        <li className='text-2xl'><Link href={'/dashboard'}><BiSolidUserAccount/></Link></li>
        <li><Link href={'/log-in'}>Join Us</Link></li>
      </ul>
    </div>
  )
}
