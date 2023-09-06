import React from 'react'
import HomeLayouts from './HomeLayouts'
import Services from '../Components/Services'

export default function page() {
  return (
    <HomeLayouts>
      <div className=' p-5 text-center border my-10'>
        <h1 className='text-3xl font-semibold text-emerald-700'>Welcome To allPawsMatter</h1>
        <p>A Nonprofit Animal Welfare Organization.</p>
      </div>
      <div className=' text-gray-500 container mx-auto'>
        <h1 className=' text-center text-xl font-semibold'>What Do We Do?</h1>
        <Services heading='Animal Rescue and Sheltering' 
        description={'We provide a safe haven for homeless, abandoned, or abused animals, offering them shelter, nourishment, and medical care until loving homes can be found.'}/>
      </div>
    </HomeLayouts>
  )
}
