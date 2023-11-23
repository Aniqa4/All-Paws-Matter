import React, { ReactNode } from 'react'
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import Sidebar from '../../components/Sidebar';

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
