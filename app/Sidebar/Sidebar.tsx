import Link from 'next/link'
import React from 'react'

export default function Sidebar() {
  return (
    <div>
        <ul className='w-60 shadow border-e h-screen px-10 py-5 text-gray-700 font-semibold'>
            <li className='border-b py-3'><Link href={'/HomePage'}>Home</Link></li>
            <li className='border-b py-3'><Link href={'/HomePage/vet-points'}>Vet Points</Link></li>
            <li className='border-b py-3'><Link href={'/HomePage/rescue'}>Rescue</Link></li>
        </ul>
    </div>
  )
}
