import React, { ReactNode } from 'react'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Sidebar from '../Sidebar/Sidebar';

interface HomeLayoutsProps {
    children: ReactNode;
}

export default function HomeLayouts({ children }: HomeLayoutsProps) {
    return (
        <div className="pt-16">
            <Navbar />
            <div className='flex'>
                <div><Sidebar /></div>
                <div className='w-full overflow-y-auto h-screen'>
                    {children}
                </div>
            </div>
            <Footer />
        </div>
    )
}
