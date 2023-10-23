import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import { BsArrowLeftCircle } from 'react-icons/bs'
// import { AiFillPieChart } from 'react-icons/ai'
import { SiFuturelearn } from 'react-icons/si'
import { SiOpenaccess } from 'react-icons/si'
import { CgProfile } from 'react-icons/cg';
import { MdEmojiEvents } from 'react-icons/md';
// import Logo from '../assets/images/logo.svg'
import HamburgerButton from './HamburgerMenuButton/HamburgerButton';
import IMAGES from '../../assets/img';
// import AdminFooter from "../../components/Footers/AdminFooter";

const Sidebar = () => {
  const [open, setOpen] = useState(true)
  const [mobileMenu, setMobileMenu] = useState(false)
  const location = useLocation()

  const Menus = [
    // { title: 'Dashboard', path: '/dashboard', src: <AiFillPieChart /> },
    { title: 'Profile', path: '/dashboard/profile', src: <CgProfile /> },
    { title: 'Courses', path: '/dashboard/programs', src: <SiFuturelearn /> },
    { title: 'Events', path: '', src: <MdEmojiEvents /> },
    { title: 'Demo Link', path: '', src: <MdEmojiEvents /> },
    { title: 'Demo Link', path: '', src: <MdEmojiEvents /> },
    { title: 'Logout', path: '/', src: <SiOpenaccess />, gap: 'true' },
  ]

  return (
    <>
      <div
        className={`${open ? 'w-60' : 'w-fit'
          } hidden sm:block relative z-50 min-h-screen duration-300 navBar border-r border-white p-5`}
          // style={{ position: 'fixed'  }}
          // style={{ marginRight: open ? "200px" : "50px", position: 'fixed' }}
          >
        <BsArrowLeftCircle
          className={`${!open && 'rotate-180'
            } absolute text-3xl bg-black text-white rounded-full cursor-pointer top-5 -right-4`}
          onClick={() => setOpen(!open)}
        />

        <div className='mt-3 pt-1'>
          <div className={`flex ${open && 'gap-x-4'} items-center`}>
            {/* <img src={Logo} alt='' className='pl-2' /> */}
            {open && (
              <Link
                className="mx-auto"
                to="/"
              >
                <img
                  src={IMAGES.LOGO_TRANSPARENT}
                  className="h-20 mx-auto"
                  alt="Logo"
                />
              </Link>
            )}
          </div>
        </div>

        <ul className='pt-6'>
          {Menus.map((menu, index) => (
            <Link to={menu.path} key={index}>
              <li
                className={`flex items-center gap-x-6 p-3 text-base font-normal rounded-lg cursor-pointer text-white bg_secondary-hover 
                        ${menu.gap ? 'mt-9' : 'mt-2'} ${location.pathname === menu.path &&
                  'navBar'
                  }`}
              >
                <span className='text-2xl'>{menu.src}</span>
                <span
                  className={`${!open && 'hidden'
                    } origin-left duration-300 hover:block`}
                >
                  {menu.title}
                </span>
              </li>
            </Link>
          ))}
        </ul>
      </div>
      {/* Mobile Menu */}
      <div className="pt-3">
        <HamburgerButton
          setMobileMenu={setMobileMenu}
          mobileMenu={mobileMenu}
          className="text-white absolute z-50 top-0 left-0 h-12 w-12"
        />
      </div>
      <div className="sm:hidden">
        <div
          className={`${mobileMenu ? 'flex' : 'hidden'
            } absolute z-50 flex-col items-center self-end py-8 mt-16 space-y-6 font-bold sm:w-auto left-6 right-6 bg-gray-50 drop-shadow md rounded-xl`}
        >
          {Menus.map((menu, index) => (
            <Link
              to={menu.path}
              key={index}
              onClick={() => setMobileMenu(false)}
            >
              <span
                className={` ${location.pathname === menu.path &&
                  'bg-gray-200'
                  } px-4 py-2 rounded-xl hover:text-white bg_secondary-hover`}
              >
                {menu.title}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}

export default Sidebar
