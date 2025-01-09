import { Link } from 'react-router-dom'
import { DarkMode } from './DarkMode'

export const Navbar = () => {
  return (
    <nav className="navbar static  top-0 left-0 px-1 w-screen font-medium flex justify-start gap-1">
      <Link to="" className='text-xl hover:text-rose-900 underline'>home</Link>
      <Link to="shop" className='text-xl hover:text-rose-900 underline'>shop</Link>

      <DarkMode></DarkMode>
    </nav>
  )
}
