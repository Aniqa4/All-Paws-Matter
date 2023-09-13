'use client'
import React, { useEffect, useState } from 'react'
import HomeLayouts from './HomeLayouts'
import Services from '../Components/Services'

interface ServiceData{
  _id:string,
  service_name:string,
  description:string
}

export default function Page() {
  const [services,setServices]=useState([])
  
  useEffect(()=>{
    fetch('http://localhost:5000/services')
    .then(res=>res.json())
    .then(data=>{
      setServices(data)
    })
  },[])
  return (
    <HomeLayouts>
      <div className=' p-5 text-center border my-10'>
        <h1 className='text-3xl font-semibold text-emerald-700'>Welcome To allPawsMatter</h1>
        <p>A Nonprofit Animal Welfare Organization.</p>
      </div>
      <div className=' text-gray-500 container mx-auto'>
        <h1 className=' text-center text-xl font-semibold '>Our Services!</h1>
        <div className='grid grid-cols-2 gap-5 my-10'>
          {
            services.map((x:ServiceData)=>
              <Services key={x._id} heading={x.service_name}
                description={x.description} />)
          }
        </div>
      </div>
    </HomeLayouts>
  )
}
