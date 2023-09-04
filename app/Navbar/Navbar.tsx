'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export default function Navbar() {
  const [showSection, setShowSection] = useState(true);
  let lastScrollPosition = 0;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;

      if (currentScrollPosition < lastScrollPosition) {
        // Scrolling up, show the fixed section
        setShowSection(true);
      } else {
        // Scrolling down, hide the fixed section
        setShowSection(false);
      }

      lastScrollPosition = currentScrollPosition;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`bg-red-700 py-5 ${showSection ? 'fixed top-0 right-0 left-0' : ''}`}>
      <ul className='container mx-auto flex justify-between text-white'>
        <li><Link href={'/'}>HomeFor<span className=' font-bold text-2xl'>Cats</span></Link></li>
        <li><Link href={'find-cats'}>Find Cats</Link></li>
        <li><Link href={'/Log-in'}>Join Us</Link></li>
      </ul>
    </div>
  )
}
