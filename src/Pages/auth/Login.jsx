import React from "react";
import TextField from '@mui/material/TextField';
import { Link } from "react-router-dom";
import { CiFacebook } from "react-icons/ci";
import { FcGoogle } from "react-icons/fc";
import { Button } from "@mui/material";
import IMAGES from "../../assets/img/index"

export default function Auth() {

  return (
    <div className="flex-col min-h-screen w-full md:flex-row flexBox">
      <section className="md:w-6/12 w-full">
        <div className="h-max flex content-center">
          <img
            className="mx-auto h-screen opacity-40"
            src={IMAGES.AUTH_BG}
            alt="E-commerce background"
          />
          <div className="w-full md:w-1/2 mx-auto absolute flex flex-col text-center pt-24 px-4 md:px-8 lg:px-12 xl:px-28">
            <Link to='/'>
              <img
                className="mx-auto h-20 rounded-lg"
                src={IMAGES.LOGO_2}
                alt="E-commerce Excel logo"
              />
            </Link>
            <h1 className="text-3xl mb-2 font-bold text-center mt-10">Join the leading <br /> E-commerce learing platform</h1>

            <p className="font-semibold mt-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500sLorem Ipsum is simply dummy text of the printing and typesetting industry</p>
          </div>
        </div>
      </section>

      <section className="lg:w-1/2 w-full md:w-1/2  min-h-screen bg_primary">

        <div className="px-10 md:px-0 flex items-center h-screen justify-center">
          <div className="bg-slate-100 mx-auto w-full lg:w-1/2 md:w-4/6 sm:w-3/4 rounded-md">

            <div className="mb-0 px-6 py-6">
              <div className="text-center mb-3">
                <h6 className="text-sm font-bold">
                  Sign Up with
                </h6>
              </div>
              <div className="flex justify-around items-center w-3/4 mx-auto">
                <div className="text-center">
                  <Button
                    className="text-gray-900 font-normal px-4 py-2 rounded mr-1 shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                  >
                    <FcGoogle className="text-xl mr-1" />
                    Google
                  </Button>
                </div>
                <div className="text-center">
                  <Button
                    className="text-gray-900 font-normal px-4 py-2 rounded mr-1 shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                  >
                    <CiFacebook className="text-xl mr-1" />
                    Facebook
                  </Button>
                </div>
              </div>
              <hr className="mt-4 border-b-1" />
            </div>

            <div className="flex-auto px-4 lg:px-10 pt-1 pb-6">
              <div className="text-center mb-3 font-bold">
                <small>Or Sign In with credentials</small>
              </div>
              <form>
                <div className="w-full mb-4">
                  <TextField
                    size="small"
                    id="outlined-basic"
                    placeholder="Enter your email"
                    type="email"
                    label="Email"
                    variant="outlined"
                    sx={{
                      backgroundColor: "white",
                      width: "100%",
                    }}
                  // required
                  />
                </div>
                <div className="w-full mb-2">
                  <TextField
                    size="small"
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    placeholder="Enter Password"
                    autoComplete="current-password"
                    sx={{
                      backgroundColor: "white",
                      width: "100%",
                    }}
                  />
                </div>

                <div className="w-full flex justify-end	mb-4">
                  <a
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    className="text-blueGray-600 text-xs font-bold"
                  >
                    <Link to="/auth/forgotPassword" >
                      <small>Forgot password?</small>
                    </Link>
                  </a>
                </div>

                <div>
                  <label className="inline-flex items-center cursor-pointer">
                    <input
                      id="customCheckLogin"
                      type="checkbox"
                      className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                    />
                    <span className="ml-2 text-sm font-semibold text-blueGray-600">
                      Remember me
                    </span>
                  </label>
                </div>

                <div className="text-center mt-6">
                  <button
                    className="bg_primary text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                    type="button"
                  >
                    Sign In
                  </button>
                </div>
                <div className="text-center mt-3">
                  <Link to='/register' className="text-blueGray-600 text-normal font-bold">
                    <small>Create new account</small>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
