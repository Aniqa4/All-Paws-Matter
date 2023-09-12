import React from 'react'
import HomeLayouts from '../HomeLayouts'
import Title from '@/app/Components/Title'

export default function page() {
  return (
    <HomeLayouts>
      <Title title='Up for adoption' />
      <div className='grid grid-cols-4 gap-5 mx-10'>
        <div className='grid gap-2'>
          <img src="https://i.ibb.co/kX163fp/blank-profile-picture-973460-1280.webp" />
          <div className='grid gap-2'>
            <p>Cat</p>
            <h1>age: 2 months</h1>
            <p>Breed : Deshi</p>
            <button className=' bg-emerald-700 text-white hover:bg-emerald-500 py-2'>Apply</button>
          </div>
        </div>
      </div>
    </HomeLayouts>
  )
}
