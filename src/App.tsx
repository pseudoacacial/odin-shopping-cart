import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.tailwind.css'
import { Outlet } from 'react-router-dom'
import { Navbar } from './Navbar'


function App({children}:{children?:React.ReactNode}) {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      {children ?? <Outlet></Outlet>}
    </>
  )
}

export default App
