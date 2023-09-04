import Footer from '@/app/Footer/Footer';
import Navbar from '@/app/Navbar/Navbar';
import React, { ReactNode } from 'react'

interface LayoutsProps {
    children: ReactNode;
}

export default function Layouts({ children }: LayoutsProps) {
    return (
        <div>
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}
