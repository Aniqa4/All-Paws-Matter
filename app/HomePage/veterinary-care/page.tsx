'use client'
import React, { useEffect, useState } from 'react'
import HomeLayouts from '../HomeLayouts'
import Title from '@/app/Components/Title'
import Image from 'next/image'

interface PropType {
  _id: string,
  name: string,
  photo_url:string
  email: string,
  phone_number: string,
  specialty: string,
}

export default function Page() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://all-paws-matter-server.vercel.app/veterinarians')
      .then(res => res.json())
      .then(data => {
        setData(data)
      })
  }, [])
  return (
    <HomeLayouts>
      <Title title='Our Veterinarians' />
      <div className='grid grid-cols-4 justify-center gap-10 mx-10 mb-20'>
      {
          data.map((x: PropType) =>
            <div key={x._id} className='grid gap-2 text-gray-600 text-sm'>
              <Image src={x.photo_url} alt='' width={500} height={500} className='rounded-xl'/>
              <div className='grid gap-2'>
                <p className='text-base font-semibold'>{x.name}</p>
                <p>Specialty: {x.specialty}</p>
                <h1>Phone: {x.phone_number}</h1>
                <p>Email: {x.email}</p>
              </div>
            </div>)
        }
      </div>
    </HomeLayouts>
  )
}
