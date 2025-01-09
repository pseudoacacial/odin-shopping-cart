import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.tailwind.css'
import { Outlet } from 'react-router-dom'
import { Navbar } from './Navbar'


function App({children}:{children?:React.ReactNode}) {


  return (
    <div className='bg-rose-100 text-slate-800 dark:bg-slate-800 dark:text-rose-100'>
      <Navbar />
      {children ?? <Outlet></Outlet>}
    </div>
  )
}

export default App
