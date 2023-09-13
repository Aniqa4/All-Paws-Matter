'use client'
import React, { ReactNode, useContext, useState } from 'react'
import Layouts from '../Layouts/Layouts';
import Title from '../Components/Title';
import { Divider } from '@mui/material';
import { FcGoogle } from 'react-icons/fc';
import Link from 'next/link';
import Swal from 'sweetalert2';
import { AuthContext } from '../AuthContext/AuthContext';
import { GoogleAuthProvider } from 'firebase/auth';


export default function Page() {
  /* const { signIn, googleSignIn } = useContext(AuthContext);
  const [error, setError] = useState('');
  const provider = new GoogleAuthProvider;

  
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;


    //---------login with email and password-------
    signIn(email, password)
      .then(result => {
        const loggedUser = result.user;
        //console.log(loggedUser);
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Successfully Logged In',
          showConfirmButton: false,
          timer: 1500
        })
        form.reset();
      })
      .catch(error => {
        //console.log(error);
        setError(error.message)
      })
  }


  //----------login with google--------------
  const handleGoogleSignIn = () => {
    googleSignIn(provider)
      .then(result => {
        const loggedUser = result.user;
        //console.log(loggedUser);
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Successfully Logged in',
          showConfirmButton: false,
          timer: 1500
        })
      })
      .catch(error => {
        //console.log(error);
        setError(error.message)
      })
  }
 */

  return (
    <div className='pt-16'>
      <Layouts>
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
      </Layouts>
    </div>
  )
}
