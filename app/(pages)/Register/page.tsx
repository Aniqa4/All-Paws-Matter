import React from 'react'
import Link from 'next/link'
import Title from '@/app/components/Title'
import Layout from '@/app/components/layout/Layout'


export default function page() {
  return (
    <div className='pt-16'>
      <Layout>
        <Title title='Sign Up' />
        <div className=' container mx-auto pb-36'>
          <form className=' grid w-1/3 mx-auto mb-10'>
            <label>Name</label>
            <input type="text" name='name' className='border py-1' />
            <label>Email</label>
            <input type="email" name='email' className='border py-1' />
            <label>Password</label>
            <input type="password" name="password" className='border py-1' />
            <input type="submit" value="Sign Up" className=' bg-emerald-900 text-white py-2 my-2 hover:bg-emerald-700' />
          </form>
          <p className='text-center pt-10'>Already have an account?<Link href={'log-in'} className='underline'> Sign In</Link></p>
          <p className='text-center py-5'>error</p>
        </div>
      </Layout>
    </div>
  )
}
