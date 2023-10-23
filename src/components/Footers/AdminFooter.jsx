// import { Container } from "@mui/system";
import React from "react";
import { FiFacebook, FiInstagram, FiTwitter, FiYoutube } from "react-icons/fi";

export default function Footer() {
  return (
    <>
      <footer className="sm:absolute fixed sm:right-0 bottom-0 sm:bottom-2/4 w-full sm:w-12 bg-black text-white sm:py-3 py-1 sm:rounded-l-lg">
       

        <div className="w-full flex flex-row sm:flex-col justify-center items-center social">
            <button
              className="bg-white text-black shadow-lg text-xl sm:h-8 sm:w-8 h-6 w-6 flex items-center justify-center align-center rounded-full outline-none focus:outline-none sm:mr-0 mr-2 sm:my-1 my-0"
              type="button"
            >
              <FiFacebook className="text-sm sm:text-xl" />
            </button>
            <button
              className="bg-white text-black shadow-lg text-xl sm:h-8 sm:w-8 h-6 w-6 flex items-center justify-center align-center rounded-full outline-none focus:outline-none sm:mr-0 mr-2 sm:my-1 my-0"
              type="button"
            >
              <FiYoutube className="text-sm sm:text-xl" />
            </button>
            <button
              className="bg-white text-black shadow-lg text-xl sm:h-8 sm:w-8 h-6 w-6 flex items-center justify-center align-center rounded-full outline-none focus:outline-none sm:mr-0 mr-2 sm:my-1 my-0"
              type="button"
            >
              <FiInstagram className="text-sm sm:text-xl" />
            </button>
            <button
              className="bg-white text-black shadow-lg text-xl sm:h-8 sm:w-8 h-6 w-6 flex items-center justify-center align-center rounded-full outline-none focus:outline-none sm:mr-0 mr-2 sm:my-1 my-0"
              type="button"
            >
              <FiTwitter className="text-sm sm:text-xl" />
            </button>
        </div>
      </footer>

    </>
  );
}
