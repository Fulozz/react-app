"use client"

import React, { useState } from 'react'
import Sidebar from './Components/Sidebar Section/Sidebar'
import Body from './Components/Body Section/Body'
import './dashboard.css'

export const AdminDashboard = () => {
  
  return (
    <> 
        <div className='container'>
            <Sidebar />
            <Body />        
        </div>  
    </>
  )
}
export default AdminDashboard




/// TODO