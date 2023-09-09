import Link from 'next/link'
import React from 'react'

export default function Sidebar() {
  return (
    <div>
        <ul className='w-60 shadow border-e h-screen px-10 py-5 text-gray-700 font-semibold'>
            <li className='border-b py-3'><Link href={'/HomePage'}>Home</Link></li>
            <li className='border-b py-3'><Link href={'/HomePage/animal-rescue'}>Animal Rescue</Link></li>
            <li className='border-b py-3'><Link href={'/HomePage/veterinary-care'}>Veterinary Care</Link></li>
            <li className='border-b py-3'><Link href={'/HomePage/emergency-response'}>Emergency Response</Link></li>
            <li className='border-b py-3'><Link href={'/HomePage/adoption-programs'}>Adoption Programs</Link></li>
            <li className='border-b py-3'><Link href={'/HomePage/education-and-Outreach'}>Education & Outreach</Link></li>
            <li className='border-b py-3'><Link href={'/HomePage/advocacy-and-lobbying'}>Advocacy and Lobbying</Link></li>
        </ul>
    </div>
  )
}
