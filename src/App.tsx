import { useState, useEffect } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import { Navbar } from './Navbar'


function App({children}:{children?:React.ReactNode}) {

  return (
    <div className='bg-bg text-main'>
      <Navbar />
      {children ?? <Outlet></Outlet>}
    </div>
  )
}

export default App
