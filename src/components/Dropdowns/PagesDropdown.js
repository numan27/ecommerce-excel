/*eslint-disable*/
import { useState, useRef, useEffect } from 'react';
import { BiChevronDown } from "react-icons/bi";
import { MdDashboard } from "react-icons/md";
import { RiLogoutCircleLine } from "react-icons/ri";
import IMAGES from '../../assets/img';
import { Link } from 'react-router-dom';

function PagesDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  function handleButtonClick() {
    toggleDropdown();
  }

  function closeDropdown() {
    setIsOpen(false);
  }

  function handleClickOutside(event) {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative">
      <button
        type="button"
        className="inline-flex items-center px-1 py-2"
        onClick={handleButtonClick}
      >
        <img
          src={IMAGES.USER_PROFILE}
          className="h-8 w-8 rounded-full"
          alt="Logo"
        />
        <BiChevronDown className='text-white text-2xl' />
      </button>
      {isOpen && (
        <div
          ref={dropdownRef}
          className="origin-top-right absolute right-0 md:mt-2 mt-1 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="py-3" role="none">
            <div className='w-full flex justfiy-between items-center px-3'>
              <div className='w-1/4'>
                <img
                  src={IMAGES.USER_PROFILE}
                  className="h-12 w-12 rounded-full"
                  alt="Logo"
                />
              </div>
              <div className='w-3/4'>
                <h3 className='text-md font-semibold'>Andrea Hasani</h3>
                <p className='text-xs font-medium text-gray-500'>andrea.hasani@email.com</p>
              </div>
            </div>

            <hr className="my-3 md:min-w-full" />
            <div className=''>
              <Link
                to="/dashboard"
                className="block flex justify-start items-center px-4 py-2 text-base font-medium text-slate-800 hover:bg-[#00A3DA] hover:text-white"
                role="menuitem"
                onClick={closeDropdown}
              >
                <MdDashboard className='mr-4' />
                Dashboard
              </Link>
              <Link
                to="/"
                className="block flex justify-start items-center px-4 py-2 text-base font-medium text-slate-800 hover:bg-[#00A3DA] hover:text-white"
                role="menuitem"
                onClick={closeDropdown}
              >
                <RiLogoutCircleLine className='mr-4' />
                Logout
              </Link>

            </div>
          </div>
        </div>
      )}
    </div>

  )}
  
  export default PagesDropdown;
