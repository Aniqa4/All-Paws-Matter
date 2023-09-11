import React from 'react'
import HomeLayouts from './HomeLayouts'
import Services from '../Components/Services'

interface dataType{
  x:any
  service_name:string,
  description:string
}

async function getData() {
  const res = await fetch('http://localhost:3000/api/services')
  const data = await res.json()
  return data
}
export default async function Page() {
  const data = await getData();
  const services = data.result
  //console.log(services);
  
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
            services.map((x:dataType)=>
              <Services heading={x.service_name}
                description={x.description} />)
          }
        </div>
      </div>
    </HomeLayouts>
  )
}
