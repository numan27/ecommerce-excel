import { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../../components/Footers/Footer";
import {
  Card,
  CardHeader,
  CardBody,
  // CardFooter,
  Typography,
} from "@material-tailwind/react";
import IMAGES from '../../assets/img';
import SERVICES_LIST from "./ServicesList"
import { Link } from 'react-router-dom';

const Services = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    fade: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: windowWidth > 768,
    autoplay: true,
    autoplaySpeed: 2000,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: true,
          slidesToShow: 1,
        }
      },
    ]
  };
  return (
    <>
      {/* Section 1 */}

      <section className="servicesHero h-[88vh] bg-right md:bg-center">
        <Container className='h-full'>
          <div className="md:flex items-center justify-center h-full">
            <div className="text-white xl:pr-4 pr-0 pt-12 md:pt-0 w-full md:w-1/2 h-full flex flex-col justify-start md:justify-center">
              <h1 className="font-bold text-3xl xl:text-5xl md:text-4xl text-center md:text-left pb-1">
                Services
              </h1>
              <img
                src={IMAGES.HEADING_BOTTOM}
                className="md:w-32 w-16 mx-auto md:mx-0"
                alt=""
              />
              <h1 className="font-semibold md:pt-0 pt-40 text-xl md:text-4xl text-center md:text-left my-4">
                Amazon, LLC Registration and Google Ads Agency Services
              </h1>
            </div>
            <div className="xl:p-12 lg:p-4 hidden md:block w-full md:w-1/2 h-full flex items-start justify-center md:justify-end">
              <h1 className="text-white font-bold text-xl md:text-4xl lg:text-5xl text-center my-4">
                GROW WITH US
              </h1>
            </div>
          </div>
        </Container>
      </section>

      {/* Section 2 */}

      <section className="bg-white text-black py-8 md:py-16">
        <Container>
          <div className="w-full md:w-2/3 mx-auto py-4 md:py-8 mb-4">
            <h1 className=" md:text-4xl text-center">
              <span className='pb-1 font-bold text-2xl md:text-5xl'>Amazon Seller Account Managment Services</span>
            </h1>
          </div>
          <div className="md:flex items-center justify-center ">

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
              {SERVICES_LIST.map((item) => (
                <Card className="w-full lg:w-64 border hover:border-yellow-500 serviceCard py-6 px-0 rounded-lg">
                  <CardHeader className="relative sm:h-24 h-32 w-1/3 mx-auto bg-[#FBE3C2] flex items-center justify-center">
                    <img
                    src={item.icon}
                    alt="Service Icon"
                    className="w-2/3"
                  />
                    {/* <FaAmazon className='text_primary sm:text-7xl text-8xl' /> */}
                  </CardHeader>
                  <CardBody className="text-center px-4">
                    <div className='h-16 flex items-center justify-center'>
                      <Typography variant="h5" className="mb-3 font-bold">
                        {item.title}
                      </Typography>
                    </div>
                    <Typography className="text-slate-800 font-normal">
                      The place is close to Barceloneta Beach and bus stop just 2 min by
                      walk and near to "Naviglio" where you can enjoy the main night life in
                      Barcelona.
                    </Typography>
                  </CardBody>
                  {/* <CardFooter divider className="flex items-center justify-between py-3">
                  <Typography variant="small">$899/night</Typography>
                  <Typography variant="small" color="gray" className="flex gap-1">
                    <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
                    Barcelona, Spain
                  </Typography>
                </CardFooter> */}
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </section>


      {/* Section 3 */}

      <section className="bg_primary text-white pb-10 md:pb-2">
        <Container>
          <div className="md:flex items-center justify-center md:px-2 px-0 py-8 md:py-16">
            <div className="w-full">
              <h1 className=" md:text-4xl text-center">
                <span className='pb-1 font-bold text-2xl md:text-5xl'>USA LLC Registration</span>
              </h1>
              <div className='mt-4'>
                <Slider {...settings}>
                  <div className='flex flex-col items-center justify-center'>
                    <h1 className="font-semibold text-xl md:text-3xl text-center text-black pb-1">FLORIDA</h1>
                    <img src={IMAGES.LLC_REG_1} alt="LLC Registration Info." className="w-full md:w-4/5 mx-auto rounded-lg" />
                  </div>
                  <div className='flex flex-col items-center justify-center'>
                    <h1 className="font-semibold textxl md:text-3xl text-center text-black pb-1">DELAWARE</h1>
                    <img src={IMAGES.LLC_REG_2} alt="LLC Registration Info." className="w-full md:w-4/5 mx-auto rounded-lg" />
                  </div>
                  <div className='flex flex-col items-center justify-center'>
                    <h1 className="font-semibold text-xl md:text-3xl text-center text-black pb-1">CALIFORNIA</h1>
                    <img src={IMAGES.LLC_REG_3} alt="LLC Registration Info." className="w-full md:w-4/5 mx-auto rounded-lg" />
                  </div>
                  <div className='flex flex-col items-center justify-center'>
                    <h1 className="font-semibold text-xl md:text-3xl text-center text-black pb-1">TEXAS</h1>
                    <img src={IMAGES.LLC_REG_4} alt="LLC Registration Info." className="w-full md:w-4/5 mx-auto rounded-lg" />
                  </div>
                  <div className='flex flex-col items-center justify-center'>
                    <h1 className="font-semibold text-xl md:text-3xl text-center text-black pb-1">WYOMING</h1>
                    <img src={IMAGES.LLC_REG_5} alt="LLC Registration Info." className="w-full md:w-4/5 mx-auto rounded-lg" />
                  </div>
                  <div className='flex flex-col items-center justify-center'>
                    <h1 className="font-semibold text-xl md:text-3xl text-center text-black pb-1">MICHIGAN</h1>
                    <img src={IMAGES.LLC_REG_6} alt="LLC Registration Info." className="w-full md:w-4/5 mx-auto rounded-lg" />
                  </div>

                </Slider>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Section 4 */}

      <section className="">
        <Container className='h-full'>
          <Link to="/contact" className="w-full mx-auto">
            <img
              src={IMAGES.ADS_BANNER}
              className="w-full"
              alt=""
            />
          </Link>
        </Container>
      </section>

      <Footer />
    </>
  )
}

export default Services;