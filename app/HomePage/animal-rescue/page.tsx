'use client'
import React from 'react'
import HomeLayouts from '../HomeLayouts'
import Title from '@/app/Components/Title'
import Image from 'next/image'

export default function Page() {

  return (
    <HomeLayouts>
      <Title title='Rescued Animals' />
      <div className='grid grid-cols-4 gap-5 mx-10'>
        <div className='grid gap-2'>
        <Image src="https://i.ibb.co/kX163fp/blank-profile-picture-973460-1280.webp" alt='' width={500} height={500}/>
          <div className='grid gap-2'>
            <p>Animal Title</p>
            <h1>Location</h1>
            <p>Rescued by</p>
            <p>Informed by</p>
            <p>Date of Rescue</p>
            <p>Description</p>
          </div>
        </div>
      </div>
    </HomeLayouts>
  )
}
