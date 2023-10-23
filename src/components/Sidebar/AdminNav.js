import React from 'react'
// import Toggle from './ThemeToggle'
import { Link } from 'react-router-dom'
import IMAGES from '../../assets/img'
import PagesDropdown from '../Dropdowns/PagesDropdown';

const Navbar = () => {
  return (
    <nav className='navBar border-gray-200 px-2 z-40 sm:py-2.5 py-1.5 w-full'
    // style={{ position: 'sticky', top: '0' }}
    >
      <div className='container flex justify-between items-center mx-auto'>
        <div className='flex items-center justify-center mx-auto'>
          <span className='sm:block hidden text-xl whitespace-nowrap font-serif font-bold text-white rounded md:mx-auto px-1 py-2'>
            E-Commerce Excel
          </span>
          <Link
            className=""
            to="/"
          >
            <img
              src={IMAGES.LOGO_TRANSPARENT}
              className="sm:h-16 h-10 mx-auto ml-12 sm:hidden block"
              alt="Logo"
            />
          </Link>

        </div>
        <PagesDropdown className="z-50" />
      </div>
    </nav>
  )
}

export default Navbar
