

import * as React from 'react';
import { useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import CardCover from '@mui/joy/CardCover';

// import { Link } from "react-router-dom";
import { RiTeamFill } from "react-icons/ri";
import { SiGooglescholar } from "react-icons/si";
import { GiTeacher } from "react-icons/gi";
import { AiFillAmazonSquare, AiFillInteraction } from "react-icons/ai";
import { GrGrow, GrServicePlay } from "react-icons/gr";
import { BsArrowUpRight, BsFillCollectionPlayFill, BsPersonVideo2, BsBuildingFillGear } from "react-icons/bs"
import { FaHandHoldingHeart } from "react-icons/fa"
// import Navbar from "../../components/Navbars/Navbar";
import Footer from "../../components/Footers/Footer";
import { Container } from "@mui/material";
import IMAGES from "../../assets/img";
import COURSE_CARDS_DATA from './CoursesCardsData';
import SERVICE_CARDS_DATA from './ServicesCardData';
import { Link } from 'react-router-dom';
import VideoPlayer from './VideoPlayer';
import thumbnail from './thumbnail.jpeg';
import GenericArrowButton from '../../components/GenericArrowButton';


export default function Landing() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <>

      {/* Section 1 */}

      <section className="bg-[#EEEFF3] landingPage" id='landingPage'>
        <Container>
          <div className="md:flex items-center justify-center py-8 md:py-24">
            <div className="w-full md:w-1/2 ">
              <h1 className="text-black font-bold text-2xl md:text-4xl lg:text-5xl text-center md:text-left">
                Welcome to our e-commerce Platform
              </h1>
              <p className="my-5 md:text-xl text-lg  text-blueGray-200 text-justify md:text-left">
                Unlock the power of e-commerce and transform your business with our comprehensive online course. From building your online store to optimizing your sales strategy, we provide the knowledge and tools you need to succeed in the digital marketplace.
              </p>
              <Button className='text-white primaryBtn md:w-48 w-full hover:animate-none md:animate-bounce' size="large">Register Today <BsArrowUpRight className='text-xl' /> </Button>
            </div>
            <div className="w-full md:w-1/2 flex items-center justify-center md:justify-end">
              <img
                src={IMAGES.HOME_BG}
                className="w-full md:w-9/12"
                alt="Home Background Img"
              />
            </div>
          </div>
        </Container>
      </section>


      {/* Section 2 */}

      <section className="bg-[#F4A640] h-full py-12 md:py-18">
        <Container className="">
          <h1 className=" md:text-4xl text-center">
            <span className='heading_border_black pb-1 font-bold text-2xl md:text-5xl'>Our Stats</span>
          </h1>
          <div className="py-1 rounded md:mx-20 mx-2 mt-16">
            <div className="flex md:flex-row flex-col">

              <div className="flexRowMobile bg-white w-full md:w-1/4 flex flex-col lg:flex-row items-center justify-center py-8 border-r mb-4 md:mb-0 rounded md:rounded-none">
                <div className="bg-[#00A3DA] py-4 px-4 w-fit rounded-full mb-2 lg:mb-0"><RiTeamFill className="text-white text-2xl" /></div>
                <div className="flex flex-col items-center justify-items-start lg:ml-3">
                  <h3 className="text-[#8A8A8A] font-medium">Team Members</h3>
                  <h2 className="font-bold text-3xl">16</h2>
                </div>
              </div>

              <div className="flexRowMobile bg-white w-full md:w-1/4 flex flex-col lg:flex-row items-center justify-center py-8 border-r mb-4 md:mb-0 rounded md:rounded-none">
                <div className="bg-[#00A3DA] py-4 px-4 w-fit rounded-full mb-2 lg:mb-0"><SiGooglescholar className="text-white text-2xl" /></div>
                <div className="flex flex-col items-center justify-items-start lg:ml-3">
                  <h3 className="text-[#8A8A8A] font-medium">Our Students</h3>
                  <h2 className="font-bold text-3xl">16</h2>
                </div>
              </div>

              <div className="flexRowMobile bg-white w-full md:w-1/4 flex flex-col lg:flex-row items-center justify-center py-8 border-r mb-4 md:mb-0 rounded md:rounded-none">
                <div className="bg-[#00A3DA] py-4 px-4 w-fit rounded-full mb-2 lg:mb-0"><GiTeacher className="text-white text-2xl" /></div>
                <div className="flex flex-col items-center justify-items-start lg:ml-3">
                  <h3 className="text-[#8A8A8A] font-medium">Our Trainers</h3>
                  <h2 className="font-bold text-3xl">16</h2>
                </div>
              </div>

              <div className="flexRowMobile bg-white w-full md:w-1/4 flex flex-col lg:flex-row items-center justify-center py-8 border-r mb-4 md:mb-0 rounded md:rounded-none">
                <div className="bg-[#00A3DA] py-4 px-4 w-fit rounded-full mb-2 lg:mb-0"><BsFillCollectionPlayFill className="text-white text-2xl" /></div>
                <div className="flex flex-col items-center justify-items-start lg:ml-3">
                  <h3 className="text-[#8A8A8A] font-medium">Our Courses</h3>
                  <h2 className="font-bold text-3xl">16</h2>
                </div>
              </div>
            </div>
          </div>
        </Container>

        {/* Courses Section */}

        <div className='md:mt-20 mt-8 lg:px-28 px-4'>
          <div className="w-full text-center md:px-16 lg:px-36 px-0">
            <h1 className=" md:text-4xl text-center">
              <span className='heading_border_black pb-1 font-bold text-2xl md:text-5xl'>Courses</span>
            </h1>
            <p className="mt-10 text-lg px-2">
              Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
            </p>
          </div>

          <div className='flex flex-wrap md:mt-4 mt-10'>
            {COURSE_CARDS_DATA.map((item) => (

              <div className='lg:w-3/12 md:w-6/12 px-2'>
                <Card className="lg:mt-12 mt-4 shadow-lg border-0 rounded-md animate__animated animate__backInLeft">
                  <div className='bg-[#CECECE] px-2 pt-2 pb-4'>
                    <h1 className="font-bold text-slate-900 text-xl md:text-2xl text-center mb-2">{item.title}</h1>
                    <CardMedia
                      sx={{ height: 140 }}
                      image={item.img}
                      className='opacity-50'
                    />
                  </div>
                  <CardContent>
                    <Typography variant="body2" color="">
                      {item.desc}
                    </Typography>
                    <h3 className='text-[#F4A640] font-bold text-normal md:text-xl pt-3'>
                      {item.date}
                    </h3>
                  </CardContent>
                  <CardActions>
                    <Button className='w-full text-white primaryBtn' size="medium">Get enrolled</Button>
                  </CardActions>
                </Card>
              </div>
            ))}
          </div>
          <GenericArrowButton link={'/courses'} color={'white'} title={"Explore all courses"} />
        </div>

      </section>

      {/* Features Section */}

      <div className="flex md:flex-row md:flex-wrap flex-col-reverse items-center py-16 md:px-6 px-0">
        <div className="w-full md:w-6/12 md:px-4 px-2 mr-auto ml-auto">
          <div className="justify-center flex flex-wrap relative">
            <div className="my-4 w-full lg:w-6/12 px-4">

              <div className="bg-red-600 shadow-lg rounded-lg text-center p-8">
                <div className='shadow-md rounded-full h-16 w-16 mx-auto p-1 bg-white flex justify-center items-center'>
                  <BsPersonVideo2 className='text-2xl text-red-600' />
                </div>
                <p className="text-lg text-white mt-4 font-semibold">
                  Free Video Resources
                </p>
              </div>


              <div className="bg-[#00A3DA] shadow-lg rounded-lg text-center p-8 mt-8">
                <div className='shadow-md rounded-full h-16 w-16 mx-auto p-1 bg-white flex justify-center items-center'>
                  <BsBuildingFillGear className='text-2xl text-[#00A3DA]' />
                </div>
                <p className="text-lg text-white mt-4 font-semibold">
                  Equipped Learning Center
                </p>
              </div>


              <div className="bg-black shadow-lg rounded-lg text-center p-8 mt-8">
                <div className='shadow-md rounded-full h-16 w-16 mx-auto p-1 bg-white flex justify-center items-center'>
                  <GrGrow className='text-2xl text-black' />
                </div>
                <p className="text-lg text-white mt-4 font-semibold">
                  Growing Network
                </p>
              </div>
            </div>

            <div className="my-4 w-full lg:w-6/12 px-4 lg:mt-16">

              <div className="bg-yellow-500 shadow-lg rounded-lg text-center p-8">
                <div className='shadow-md rounded-full h-16 w-16 mx-auto p-1 bg-white flex justify-center items-center'>
                  <AiFillAmazonSquare className='text-2xl text-yellow-500' />
                </div>
                <p className="text-lg text-white mt-4 font-semibold">
                  Practise on Real Accounts
                </p>
              </div>


              <div className="bg-red-700 shadow-lg rounded-lg text-center p-8 mt-8">
                <div className='shadow-md rounded-full h-16 w-16 mx-auto p-1 bg-white flex justify-center items-center'>
                  <AiFillInteraction className='text-2xl text-red-700' />
                </div>
                <p className="text-lg text-white mt-4 font-semibold">
                  Tech-driven Learning
                </p>
              </div>

              <div className="bg-emerald-500 shadow-lg rounded-lg text-center p-8 mt-8">
                <div className='shadow-md rounded-full h-16 w-16 mx-auto p-1 bg-white flex justify-center items-center'>
                  <FaHandHoldingHeart className='text-2xl text-emerald-500' />
                </div>
                <p className="text-lg text-white mt-4 font-semibold">
                  E-commerce Mentorship
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-4/12 px-10 md:px-0 ml-auto mr-auto text-center md:text-left">
          <div className="p-3 text-center flex items-center justify-center mx-auto md:mx-0 w-16 h-16 mb-6 shadow-lg rounded-full bg-[#00A3DA]">
            <GrServicePlay className='text-white text-2xl' />
          </div>
          <h1 className=" md:text-4xl md:text-left text-center">
            <span className='heading_border_black pb-1 font-bold text-2xl md:text-3xl lg:text-5xl'>What We Offers</span>
          </h1>
          <p className="text-lg font-light leading-relaxed mt-8 mb-4 text-blueGray-600">
            Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
          </p>
          <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
            We created a set of Components that are dynamic and come to help
            you.
          </p>
          {/* <div className="block pb-6">
            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
              Alerts
            </span>
            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
              Dropdowns
            </span>
            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
              Menus
            </span>
            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
              Modals
            </span>
            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
              Navbars
            </span>
            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
              Popovers
            </span>
            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
              Tabs
            </span>
            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
              Tooltips
            </span>
          </div> */}
        </div>
      </div>


      {/* Section 3 */}

      <section className="bg-black">
        <Container>
          <div className="py-8 md:py-16">
            <h1 className="text-center text-white mb-6">
              <span className='heading_border_white pb-1 font-bold text-2xl md:text-3xl lg:text-5xl'>Tutorials</span>
            </h1>

            <div className="md:flex items-center justify-center ">

              <div className="w-full md:w-1/2 text-white px-2 md:px-8 md:px-0 mt-10 md:mt-0">
                <div className="bg-[#F4A640] my-4 py-4 px-4 w-fit mx-auto md:mx-0 rounded-full"><BsFillCollectionPlayFill className="text-black text-xl" /></div>
                <h1 className="text-center md:text-left text-white">
                  <span className='pb-1 font-semibold text-xl md:text-3xl'>Amazon FBA Private</span>
                </h1>
                <p className="mt-4 text-lg text-blueGray-200 text-center md:text-left">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                </p>
              </div>
              <div className="w-full md:w-1/2  pt-10 md:pt-0">
                <div className='flex  items-center justify-center md:justify-end mt-6'>
                  <VideoPlayer className="" thumbnail={thumbnail} />
                </div>
              </div>

            </div>
            <GenericArrowButton link={'/tutorials'} color={'white'} title={"Explore all videos"} />
          </div>
        </Container>
      </section>

      {/* Section 4 */}

      <section className="bg-white h-full py-12 md:py-18 lg:px-28 px-2 md:px-12">
        <Container>
          <div className="w-full text-center text-slate-800 md:px-36 px-0">
            <h1 className=" md:text-4xl text-center">
              <span className='heading_border_black pb-1 font-bold text-2xl md:text-5xl'>Services</span>
            </h1>
            <p className="mt-8 text-lg">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
            </p>
          </div>

          <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 text-white pt-10 w-full'>

            {SERVICE_CARDS_DATA.map((item) => (
              <div className='bg-[#F4A640] text-center flex flex-col items-center justify-center p-6 h-[280px] rounded-md shadow-xl hover:scale-105 duration-300 cursor-pointer'>
                <span className='bg-[#00A3DA] py-4 px-4 rounded-md shadow-lg'>
                  {item.icon}
                </span>
                <h1 className="font-semibold text-normal md:text-xl mt-4">{item.title}</h1>
                <p className="mt-4 text-lg">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
          <GenericArrowButton link={'/services'} color={'black'} title={"Hire us now"} />
        </Container>
      </section>

      {/* Section 5 */}

      <section className="mb-10">
        <Container className='h-full'>
          <Link to="/contact" className="w-full mx-auto">
            <img
              src={IMAGES.PROMO_BANNER}
              className="w-full rounded-lg"
              alt=""
            />
          </Link>
        </Container>
      </section>
      <Footer />
    </>

  );
}
