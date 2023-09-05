import Link from 'next/link'
import React from 'react'

export default function Sidebar() {
  return (
    <div>
        <ul className='w-60 shadow border-e h-screen py-5 px-10'>
            <li><Link href={'/HomePage'}>Home</Link></li>
            <li><Link href={'/HomePage/vet-points'}>Vet Points</Link></li>
            <li><Link href={'/HomePage/rescue'}>Rescue</Link></li>
        </ul>
    </div>
  )
}
