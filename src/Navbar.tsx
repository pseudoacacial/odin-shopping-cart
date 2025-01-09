import { Link } from 'react-router-dom'
import { MemoryRouter } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className="navbar text-3xl font-bold underline">
      <Link to="">home</Link>
      <Link to="shop">Shop</Link>
    </nav>
  )
}
