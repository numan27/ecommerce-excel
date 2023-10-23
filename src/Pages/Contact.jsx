import { useEffect } from 'react';
import { Container } from '@mui/material';
import { BsShareFill, BsFacebook, BsYoutube, BsTwitter, BsTelephoneFill } from "react-icons/bs";
import { RiInstagramFill, RiWhatsappFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import Footer from "../components/Footers/Footer";
import IMAGES from '../assets/img';
import GoogleApiWrapper from "../components/Map";
// import ContactForm from '../components/ContactForm';

const Contact = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Section 1 */}

      <section className="bg-black text-white aboutPage">
        <Container>
          <div className="md:flex items-center justify-center py-8 md:py-24">
            <div className="w-full md:w-1/2 ">
              <h1 className="font-bold text-3xl xl:text-5xl md:text-4xl text-center md:text-left pb-1">
                Contact
              </h1>
              <img
                src={IMAGES.HEADING_BOTTOM}
                className="md:w-32 w-16 mx-auto md:mx-0"
                alt=""
              />
              <h1 className="font-semibold text-xl md:text-4xl text-center md:text-left my-4">
                Get connected with Us
              </h1>
              {/* <p className="my-4 text-lg text-justify md:text-left">
                Unlock the power of e-commerce and transform your business with our comprehensive online course. From building your online store to optimizing your sales strategy, we provide the knowledge and tools you need to succeed in the digital marketplace.
              </p> */}
              {/* <Button className='text-white primaryBtn md:w-48 w-full hover:animate-none md:animate-bounce' size="large">Register Today <BsArrowUpRight className='text-xl' /> </Button> */}
            </div>
            <div className="w-full md:w-1/2 flex items-center justify-center md:justify-end">
              <img
                src={IMAGES.CONTACT_HERO}
                className="w-full md:w-9/12"
                alt="Home Background Img"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Section 2 */}

      <section className="py-8 md:py-16 lg:px-32 md:px-4 px-4">
        <div className="flex lg:flex-row tableWrapper flex-col justify-center items-center my-4">

          <div className='lg:w-3/5 w-full'>
            <h1 className="font-semibold text-2xl md:text-3xl text-center md:text-left mb-4">Business Hours and Schedules</h1>
            <img
              src={IMAGES.TABLE}
              className="lg:w-4/5 w-full mx-auto md:mx-0"
              alt=""
            />
          </div>

          <div className='lg:w-1/2 w-full flex flex-col justify-center xl:items-start items-center lg:items-center md:mt-0 mt-10'>
            <div className='mb-4'>
              <h1 className="font-semibold text-2xl md:text-3xl text-center md:text-left">Locate Us</h1>
              <h1 className="font-semibold text-base lg:text-lg text-center md:text-left md:mt-2 mt-4">Fortune Centre 45-A, P.E.C.H.S., Karachi, Pakistan</h1>
            </div>
            <GoogleApiWrapper className="" />
          </div>
        </div>
      </section>

      {/* Section 3 */}

      <section className="bg_primary py-8 md:py-16 px-2">
        <Container>
          <div className="md:w-9/12 w-full mx-auto">
            <div className='bg-white rounded-md p-4 flex flex-col items-center justify-center w-full socialContact'>
              <div className='bg-[#FBE3C2] px-5 py-5 rounded-full w-fit mx-auto'><BsShareFill className='text-[#F4A640] text-2xl' /></div>
              <h1 className="font-semibold text-base md:text-xl text-center md:text-left my-4">Social Links</h1>
              <div className='flex justify-center items-center'>
                <a href="https://www.facebook.com/" target='-blank' className='flex items-center justify-center mx-2'>
                  <span className='px-4 py-4 rounded-full border border-orange-300  hover:bg-[#F4A640] hover:text-white'> <BsFacebook className='text-xl' /> </span>
                </a>
                <a href="https://www.youtube.com/" target='-blank' className='flex items-center justify-center mx-2'>
                  <span className='px-4 py-4 rounded-full border border-orange-300 hover:bg-[#F4A640] hover:text-white'> <BsYoutube className='text-xl' /> </span>
                </a>
                <a href="https://www.instagram.com/" target='-blank' className='flex items-center justify-center mx-2'>
                  <span className='px-4 py-4 rounded-full border border-orange-300 hover:bg-[#F4A640] hover:text-white'> <RiInstagramFill className='text-xl' /> </span>
                </a>
                <a href="https://www.twitter.com/" target='-blank' className='flex items-center justify-center mx-2'>
                  <span className='px-4 py-4 rounded-full border border-orange-300 hover:bg-[#F4A640] hover:text-white'> <BsTwitter className='text-xl' /> </span>
                </a>
              </div>
            </div>

            <div className='grid md:grid-cols-3 grid-cols-1 gap-y-4 gap-x-4 mt-4 md:mt-0'>
              <div className='md:mt-4 w-full'>
                <div className='bg-white mx-auto rounded-md p-4 flex flex-col items-center justify-center'>
                  <div className='bg-[#FBE3C2] px-5 py-5 rounded-full w-fit mx-auto'><RiWhatsappFill className='text-[#F4A640] text-2xl' /></div>
                  <h1 className="font-semibold text-base md:text-xl text-center md:text-left my-4">WhatsApp</h1>
                  <h1 className="font-normal text-base lg:text-lg text-center md:text-left">+92321-1234567</h1>
                </div>
              </div>

              <div className='md:mt-4 w-full'>
                <div className='bg-white mx-auto rounded-md p-4 flex flex-col items-center justify-center'>
                  <div className='bg-[#FBE3C2] px-5 py-5 rounded-full w-fit mx-auto'><BsTelephoneFill className='text-[#F4A640] text-2xl' /></div>
                  <h1 className="font-semibold text-base md:text-xl text-center md:text-left my-4">Phone</h1>
                  <h1 className="font-normal text-base lg:text-lg text-center md:text-left">042-96896804</h1>
                </div>
              </div>

              <div className='md:mt-4 w-full'>
                <div className='bg-white mx-auto rounded-md p-4 flex flex-col items-center justify-center'>
                  <div className='bg-[#FBE3C2] px-5 py-5 rounded-full w-fit mx-auto'><MdEmail className='text-[#F4A640] text-2xl' /></div>
                  <h1 className="font-semibold text-base md:text-xl text-center md:text-left my-4">Email</h1>
                  <h1 className="font-normal text-base lg:text-lg text-center md:text-left">dummy@email.com</h1>
                </div>
              </div>

            </div>
          </div>
        </Container>

        {/* <ContactForm/> */}
      </section>


      {/* Section 4 */}

      <section className="py-8 md:py-16 text-black px-2">
        <Container>
          <h1 className="text-center pb-2">
          <span className='heading_border_black pb-1 font-bold text-2xl md:text-5xl'>Meet the Team</span>
          </h1>

          {/* Member 1 */}

          <div className="md:flex items-center justify-center py-8 md:pt-16">
            <div className="w-full lg:w-2/6 md:w-1/2 flex items-center justify-center md:justify-center">

              <div className='border-4 border-black w-9/12 lg:w-9/12 md:w-11/12'>
                <img
                  src={IMAGES.TEAM_PROFILE_1}
                  className="w-full"
                  alt="Team member"
                />
              </div>
            </div>
            <div className="w-full lg:w-4/6 md:w-1/2">
              <div className='flex flex-col items-center md:items-start'>
                <h1 className="font-bold text-[#F4A640] text-2xl md:text-4xl text-center md:text-left md:mt-3 mt-5">Jacob William</h1>
                <h1 className="font-semibold text-xl md:text-2xl text-center md:text-left mt-1">Business Owner</h1>
                <p className="my-4 text-lg text-blueGray-200 text-center md:text-justify">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                </p>
              </div>
            </div>
          </div>

          {/* Member 2 */}

          <div className="md:flex items-center justify-center py-8 md:pt-16">
            <div className="w-full lg:w-2/6 md:w-1/2 flex items-center justify-center md:justify-center">

              <div className='border-4 border-black w-9/12 lg:w-9/12 md:w-11/12'>
                <img
                  src={IMAGES.TEAM_PROFILE_2}
                  className="w-full"
                  alt="Team member"
                />
              </div>
            </div>
            <div className="w-full lg:w-4/6 md:w-1/2">
              <div className='flex flex-col items-center md:items-start'>
                <h1 className="font-bold text-[#F4A640] text-2xl md:text-4xl text-center md:text-left md:mt-3 mt-5">Alexander Goodman</h1>
                <h1 className="font-semibold text-xl md:text-2xl text-center md:text-left mt-1">CEO and Director</h1>
                <p className="my-4 text-lg text-blueGray-200 text-center md:text-justify">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                </p>
              </div>
            </div>
          </div>


        </Container>
      </section>


      <Footer />
    </>
  )
}

export default Contact