import React from 'react'
import HomeLayouts from '../HomeLayouts'
import Title from '@/app/Components/Title';
import { IoMdCall } from 'react-icons/io';

export default function Page() {
  return (
    <HomeLayouts>
      <Title title='Emergency Response' />
      <div  className='mx-10 text-gray-600'>
        <p>Emergency response to save animals during calamities involves pre-established evacuation plans, the provision of temporary shelters with food,
          water, and care, identification and reunification efforts for lost pets, specialized wildlife rescue teams, resource mobilization,
          public awareness, adherence to legal frameworks, coordination among agencies and organizations,
          and continued post-disaster recovery efforts to ensure the safety and well-being of both domestic and wild animals affected by natural disasters.
        </p>
        <p className='pt-10 text-center text-red-500'>If there any Emergency Arrives in your Area Please Contact us.</p>
        <p className='flex justify-center gap-3 align-baseline text-xl'><span><IoMdCall/></span>+880155555555</p>
      </div>
      <Title title='Previous emergency Responses' />
    </HomeLayouts>
  )
}
