// import { Container } from "@mui/system";
import React from "react";
import { FaPhoneAlt, FaHome } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { FiFacebook, FiInstagram, FiTwitter, FiYoutube } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import IMAGES from "../../assets/img";

export default function Footer() {
  return (
    <>
      <footer className="bg-black text-white flex md:flex-row flex-col-reverse justify-between items-center pt-8 pb-4 md:py-10 lg:px-28 px-4">
        <div className="flex flex-col w-full items-center md:items-start md:w-1/3 mt-6 md:mt-0">
          <span className="flex items-center md:text-xl text-base mb-2 md:mb-1"> <FaPhoneAlt className="mr-4 text-base md:text-2xl" /> 042-96896804</span>
          <span className="flex items-center md:text-xl text-base mb-2 md:mb-1"> <RiWhatsappFill className="mr-3 text-xl md:text-2xl" /> +92321-1234567</span>
          <span className="flex items-center md:text-xl text-base mb-2 md:mb-1"> <MdEmail className="mr-3 text-xl md:text-2xl" /> dummy@email.com</span>
          <span className="flex items-center md:text-xl text-sm mb-2 md:mb-1"> <FaHome className="mr-2 text-xl md:text-2xl lg:text-3xl" />Fortune Centre 45-A, P.E.C.H.S.,
            Karachi, Pakistan</span>
        </div>

          <div className="flex justify-center w-full md:w-1/3">
            <Link
              className="inline-block py-1 px-2 rounded-lg flex"
              to="/"
            >
              <img
                src={IMAGES.LOGO_TRANSPARENT}
                className="h-32 logoRotate "
                alt="Logo"
              />
            </Link>
          </div>
          <div className="mt-6 lg:mb-0 mb-6 w-full md:w-1/3 flex flex-col items-center social">
            <h1 className="text-[#F4A640] font-semibold text-xl md:text-2xl lg:text-3xl text-center mb-4 ">
              Let's keep in touch!
            </h1>

            <div className="flex justify-end">
              <button
                className="bg-[#1B74E4] shadow-lg text-2xl h-10 w-10 flex items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <FiFacebook />
              </button>
              <button
                className="bg-[#FF0000] shadow-lg text-2xl h-10 w-10 flex items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <FiYoutube />
              </button>
              <button
                className="bg-[#C32681] shadow-lg text-2xl h-10 w-10 flex items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <FiInstagram />
              </button>
              <button
                className="bg-[#1DA1F2] shadow-lg text-2xl h-10 w-10 flex items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <FiTwitter />
              </button>
            </div>
          </div>
      </footer>
      <div className="bg_primary text-sm text-white text-center py-1">
        Copyrights © 2023 <span className="text-[#C32681] italic ml-1"> E-Commerce Excel</span>
      </div>
    </>
  );
}
