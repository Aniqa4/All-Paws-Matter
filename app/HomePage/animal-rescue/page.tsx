'use client'
import React, { ReactNode, useEffect, useState } from 'react'
import HomeLayouts from '../HomeLayouts'
import Title from '@/app/Components/Title'
import Image from 'next/image'

interface PropType {
  _id: string,
  animal_type: string,
  age: string,
  breed: string,
  date: string,
  type: string,
  description: string
}


export default function Page() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://all-paws-matter-server.vercel.app/rescued-animals')
      .then(res => res.json())
      .then(data => {
        setData(data)
      })
  }, [])

const formatDate = (date:string) => {
    const options : any = { day: "numeric", month: "short", year: "numeric" };
    return new Date(date).toLocaleDateString("en-US", options);
  };

  return (
    <HomeLayouts>
      <Title title='Rescued Animals' />
      <div className='grid grid-cols-4 gap-5 mx-10'>
        {
          data.map((x: PropType) =>
            <div key={x._id} className='grid gap-2 text-gray-600 text-sm'>
              <Image src="https://i.ibb.co/kX163fp/blank-profile-picture-973460-1280.webp" alt='' width={500} height={500} />
              <div className='grid gap-2'>
                <p className='text-base font-semibold'>{x.animal_type}</p>
                <h1>age: {x.age}</h1>
                <p>Breed: {x.breed}</p>
                <p className={x.type === 'up for adoption' ? 'text-green-700' : 'text-red-600'}>Status: {x.type}</p>
                <p>Rescued Time: {formatDate(x.date)}
                </p>
                <p>{x.description}</p>
                <button className=' bg-emerald-700 text-white hover:bg-emerald-500 py-2'>Make an adoption request</button>
              </div>
            </div>)
        }
      </div>
    </HomeLayouts>
  )
}
