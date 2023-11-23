'use client'
import React, { useState } from 'react'
import Layouts from '../../components/layout/Layout'
import Title from '../../components/Title'
import RescuedAnimal from './RescuedAnimal'
import AnimalForAdoption from './AnimalForAdoption'
import AddVets from './AddVets'

export default function Page() {
  const [open, setOpen] = useState(false)
  const [openTwo, setOpenTwo] = useState(false)
  const [openThree, setOpenThree] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }
  const handleOpenTwo = () => {
    setOpenTwo(true)
  }
  const handleOpenThree = () => {
    setOpenThree(true)
  }
 
  return (
    <div className='pt-16'>
      <Layouts>
        <Title title='dashboard' />
        <div className='container mx-auto mb-20'>
          <div onClick={()=>handleOpen()} className='mb-5'>
            <p className='text-center bg-gray-200 py-2 hover:bg-gray-100 shadow-xl uppercase'>Add rescued Animals&apos; data</p>
            <div className={open===true?'':'hidden'}><RescuedAnimal/>
            </div>
          </div>
            <button onClick={()=>setOpen(false)} 
            className={open===false?'hidden':'bg-red-700 text-white px-3 py-1 font-semibold flex mx-auto my-2'}>Close</button>
          <div onClick={()=>handleOpenTwo()} className='mb-5'>
            <p className='text-center bg-gray-200 py-2  hover:bg-gray-100 shadow-xl uppercase'>Add Adoption data</p>
            <div className={openTwo===true?'':'hidden'}><AnimalForAdoption/>
            </div>
          </div>
            <button onClick={()=>setOpenTwo(false)} 
            className={openTwo===false?'hidden':'bg-red-700 text-white px-3 py-1 font-semibold flex mx-auto my-2'}>Close</button>
          <div onClick={()=>handleOpenThree()} className='mb-5'>
            <p className='text-center bg-gray-200 py-2  hover:bg-gray-100 shadow-xl uppercase'>Add Veterinary data</p>
            <div className={openThree===true?'':'hidden'}><AddVets/>
            </div>
          </div>
            <button onClick={()=>setOpenThree(false)} 
            className={openThree===false?'hidden':'bg-red-700 text-white px-3 py-1 font-semibold flex mx-auto my-2'}>Close</button>
        </div>
      </Layouts>
    </div>
  )
}
