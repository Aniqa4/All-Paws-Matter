import React from 'react'
import HomeLayouts from '../HomeLayouts'
import Title from '@/app/Components/Title'
import Image from 'next/image'

export default function Page() {
  return (
    <HomeLayouts>
      <Title title='Vet Points' />
      <div className='grid grid-cols-4 gap-5 mx-10'>
        <div className='grid gap-2'>
          <Image src="https://i.ibb.co/kX163fp/blank-profile-picture-973460-1280.webp" alt='' width={500} height={500} />
          <div className='grid gap-2'>
            <p>Hospital Name</p>
            <h1>Location</h1>
            <p>Email</p>
            <p>Phone</p>
            <p>Time: 10AM to 8PM</p>
            <p>Description</p>
          </div>
        </div>
      </div>
    </HomeLayouts>
  )
}
