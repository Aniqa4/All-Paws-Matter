'use client'
import React, { useEffect, useState } from 'react'
import HomeLayouts from '../HomeLayouts'
import Title from '@/app/components/Title'
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
      <div className='grid justify-center gap-10 mx-10 mb-2'>
      {
          data?.map((x: PropType) =>
            <div key={x._id} className='grid grid-cols-2 gap-10 justify-center items-center text-gray-600 bg-gray-100'>
              <Image src={x.photo_url} alt='' width={500} height={500}/>
              <div className='py-5'>
                <p className='text-3xl font-semibold'>{x.name}</p>
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
