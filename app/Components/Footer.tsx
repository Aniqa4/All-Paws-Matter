import React from 'react';
import { FaTwitter, FaFacebook, FaYoutube, FaInstagram } from 'react-icons/fa';


export default function Footer() {
  return (
    <div className='bg-gray-100 text-gray-600'>
      <div className='grid grid-cols-3 gap-20 p-10'>
        <div>
          <h1 className=' text-emerald-900 font-semibold'>About Us</h1>
          <h1 className=' text-sm py-3'>Welcome to All Paws Matter</h1>
          <p className=' text-xs'>At AllPawsMatter, we are passionately dedicated to creating a world where all animals are treated with compassion,
            respect, and dignity.
            Our mission is to be a leading voice for the voiceless, advocating for the welfare and rights of animals across the globe.</p>
        </div>
        <div className='text-sm'>
          <p className=' text-emerald-900 font-semibold text-base pb-3'>Contacts</p>
          <p>Email: allpawsmatter@bd.com</p>
          <p>Phone: +8801000000000</p>
          <p>Phone: +8801000000001</p>
        </div>
        <div>
          <h1 className=' text-emerald-900 font-semibold'>Join Us</h1>
          <div className='flex text-xl gap-5 py-5'>
            <p className=' text-blue-400'> <FaTwitter /></p>
            <p className=' text-blue-500'>  <FaFacebook /></p>
            <p className=' text-red-700'> <FaYoutube /></p>
            <p className=' text-pink-600'> <FaInstagram /></p>
          </div>
        </div>
      </div>
      <p className='text-center text-sm py-5'>Copyright &copy;allPawsMatter.com ALL RIGHTS RESEREVED</p>
    </div>
  )
}
