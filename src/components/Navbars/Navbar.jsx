/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BiLogIn } from "react-icons/bi";
import IMAGES from "../../assets/img/index"
import PagesDropdown from "../Dropdowns/PagesDropdown";
// import Path from "../../utils/path"


export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  // function to handle the closing of the navbar
  const handleNavbarClose = () => {
    setNavbarOpen(false);
  }

  return (
    <>
      <nav className="navBar opacity-90 top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 pt-2 pb-2 lg:pb-2 navbar-expand-lg border-b border-[#EEEFF3]"
        style={{ position: "sticky", top: 0, backgroundColor: "transparent" }}
      >
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              className="inline-block py-1 px-1 bg-white rounded-lg flex"
              to="/"
            >
              <img
                src={IMAGES.LOGO_2}
                className="md:h-16 h-10"
                alt="Logo"
              />
            </Link>
            <button
              className="navBtn absolute sm:top-5 top-2 right-2/4 cursor-pointer text-xl leading-none py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <AiOutlineMenu className="text-white" />
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none mt-4 lg:mt-0" +
              (navbarOpen ? " block rounded shadow-lg" : " hidden")
            }
            id="example-navbar-warning"
          >
            <div className="flex justify-end">
              <button
                className="cursor-pointer text-xl leading-none px-1 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                type="button"
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                <AiOutlineClose className="" />
              </button>
            </div>

            <ul className="flex flex-col lg:flex-row list-none mr-14 lg:ml-auto">
              <li className="flex items-center">
                <Link to="/" className="navLink active lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 mx-4 py-3 lg:py-1 flex items-center text-xs uppercase font-bold" onClick={handleNavbarClose}>
                  Home
                </Link>
              </li>
              <li className="flex items-center">
                <Link to="/about" className="navLink lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 mx-4 py-3 lg:py-1 flex items-center text-xs uppercase font-bold" onClick={handleNavbarClose}>
                  About
                </Link>
              </li>
              <li className="flex items-center">
                <Link to="/courses" className="navLink lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 mx-4 py-3 lg:py-1 flex items-center text-xs uppercase font-bold" onClick={handleNavbarClose}>
                  Courses
                </Link>
              </li>
              <li className="flex items-center">
                <Link to="/tutorials" className="navLink lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 mx-4 py-3 lg:py-1 flex items-center text-xs uppercase font-bold" onClick={handleNavbarClose}>
                  Tutorials
                </Link>
              </li>
              <li className="flex items-center">
                <Link to="/services" className="navLink lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 mx-4 py-3 lg:py-1 flex items-center text-xs uppercase font-bold" onClick={handleNavbarClose}>
                  Services
                </Link>
              </li>
              <li className="flex items-center">
                <Link to="/contact" className="navLink lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 mx-4 py-3 lg:py-1 flex items-center text-xs uppercase font-bold" onClick={handleNavbarClose}>
                  Contact
                </Link>
              </li>

              <li className="flex items-center">
                <Link
                  className="btn_primary mb-4 lg:mb-0 flex content-between items-center text-white active:bg-gray-400 text-sm font-bold uppercase px-6 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 ease-linear transition-all duration-150"
                  type="button"
                  to="/login"
                >
                  Login
                  <span><BiLogIn className="text-xl" /></span>
                </Link>
              </li>
            </ul>
          </div>
          <li className="flex items-center ml-4 profile absolute sm:top-5 top-2 right-2">
            <PagesDropdown />
          </li>
        </div>
      </nav>
    </>
  );
}

