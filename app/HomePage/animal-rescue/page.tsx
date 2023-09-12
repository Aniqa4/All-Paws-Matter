'use client'
import React from 'react'
import HomeLayouts from '../HomeLayouts'
import Title from '@/app/Components/Title'

export default function Page() {

  return (
    <HomeLayouts>
      <Title title='Rescued Animals' />
      <div className='grid grid-cols-4 gap-5 mx-10'>
        <div className='grid gap-2'>
          <img src="https://i.ibb.co/kX163fp/blank-profile-picture-973460-1280.webp" />
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
