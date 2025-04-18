'use client'

import React from 'react';

import DashboardHeader from '@/app/components/DashboardHeader';
import SidebarNav from '@/app/components/SideBarNav';
import { Toaster } from '@/components/ui/toaster';

const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <div>
        <div className="fixed md:w-64 hidden md:block">
            <SidebarNav/>
        </div>
    
        <div className="md:ml-64">
            <DashboardHeader/>
            {children}
            <Toaster/>
        </div>
    </div>
  )
}

export default layout