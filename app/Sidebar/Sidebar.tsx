import Link from 'next/link'
import React from 'react'

export default function Sidebar() {
  return (
    <div>
        <ul className=' h-screen bg-red-200 p-5'>
            <li><Link href={'/HomePage'}>Home</Link></li>
            <li><Link href={'/HomePage/vet-points'}>Vet Points</Link></li>
        </ul>
    </div>
  )
}
