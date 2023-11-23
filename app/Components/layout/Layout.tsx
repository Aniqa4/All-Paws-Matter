import Footer from '@/app/components/Footer';
import Navbar from '@/app/components/Navbar';
import React, { ReactNode } from 'react'

interface LayoutsProps {
    children: ReactNode;
}

export default function Layout({ children }: LayoutsProps) {
    return (
        <div>
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}
