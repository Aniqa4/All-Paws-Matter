'use client'
import React from 'react'
import { Divider } from '@mui/material';
import { FcGoogle } from 'react-icons/fc';
import Link from 'next/link';
import Title from '@/app/components/Title';
import Layout from '@/app/components/layout/Layout';

export default function Page() {
  

  return (
    <div className='pt-16'>
      <Layout>
        <Title title='Sign in'/>
        <div className=' container mx-auto pb-36'>
          <form  className=' grid w-1/3 mx-auto mb-10'>
            <label>Email</label>
            <input type="email" name='email' className='border py-1'/>
            <label>Password</label>
            <input type="password" name="password" className='border py-1'/>
            <input type="submit" value="Sign In" className=' bg-emerald-900 text-white py-2 my-2 hover:bg-emerald-700'/>
          </form>
          <Divider>Or</Divider>
          <div className="border rounded-full w-1/4 grid justify-center mx-auto mt-10">
            <p className='flex items-center gap-2 text-xl py-1'><span><FcGoogle/></span>Sign In With Google</p>
          </div>
          <p className='text-center pt-10'>Don&apos;t have an account?<Link href={"Register"} className="underline"> Sign Up</Link></p>
          <p className='text-center py-5'></p>

        </div>
      </Layout>
    </div>
  )
}
