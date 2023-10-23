import { useEffect } from 'react';
import * as React from 'react';
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from '@chakra-ui/react'


import { Container, Button } from '@mui/material';
import Footer from "../../components/Footers/Footer";
import IMAGES from '../../assets/img';
import COURSES_DATA from "./CoursesData";

const Courses = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Section 1 */}

      <section className="bg-black text-white">
        <Container>
          <div className="md:flex items-center justify-center py-8 md:py-24">
            <div className="w-full md:w-1/2 ">
              <h1 className="font-bold text-3xl xl:text-5xl md:text-4xl text-center md:text-left pb-1">
                Courses
              </h1>
              <img
                src={IMAGES.HEADING_BOTTOM}
                className="md:w-32 w-16 mx-auto md:mx-0"
                alt=""
              />
              <h1 className="font-semibold text-xl md:text-4xl text-center md:text-left my-4">
                "An investment in knowledge pays the best interest."
              </h1>
              {/* <p className="my-4 text-lg text-justify md:text-left">
                Unlock the power of e-commerce and transform your business with our comprehensive online course. From building your online store to optimizing your sales strategy, we provide the knowledge and tools you need to succeed in the digital marketplace.
              </p> */}
              {/* <Button className='text-white primaryBtn md:w-48 w-full hover:animate-none md:animate-bounce' size="large">Register Today <BsArrowUpRight className='text-xl' /> </Button> */}
            </div>
            <div className="w-full md:w-1/2 flex items-center justify-center md:justify-end">
              <img
                src={IMAGES.ABOUT_HERO}
                className="w-full md:w-9/12"
                alt="Home Background Img"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Section 2 */}

      <section className="bg-white text-black pb-10 md:pb-2">
        <Container>
          <div className="md:flex items-center justify-center md:px-2 px-0 py-8 md:py-16">
            <div className="w-full">
              <p className="pt-8 md:pt-10 text-semibold md:text-2xl">
                Welcome to the e-Commerce Institute! We are dedicated to helping entrepreneurs and businesses of all kinds access the tools, resources, and knowledge they need to master the ever-changing landscape of digital commerce.

                <br/>
                <br/>

                We offer comprehensive courses and seminars that explore the inner workings of digital marketing, social media, customer service, product development, and more. Our experienced instructors provide insights and best practices based on industry standards and proven tactics. Our ever-evolving curriculum helps ensure that you’re always up to date with the latest trends and technologies in the e-commerce world.

                
                <br/>
                <br/>

                We also provide one-on-one mentorship to help guide our students through the process of developing their own unique business vision and strategies. Our network of professionals has extensive experience in the e-commerce space, and can provide valuable insight into specific areas such as marketing, finance, and operations.

                
                <br/>
                <br/>

                At the e-Commerce Institute, we strive to empower entrepreneurs and business owners to succeed in the digital age. Join us today, and take your online business to the next level!
              </p>

            </div>
          </div>
        </Container>
      </section>

      {/* Section 3 */}

      <section className="bg_primary text-white md:pb-12 pb-8">
        <Container>
          <div className="md:flex items-center justify-center px-4 py-8 md:py-16">
            <div className="w-full">
              <h1 className=" md:text-4xl text-center">
                <span className='heading_border_white pb-1 font-bold text-2xl md:text-5xl'>Courses we offered</span>
              </h1>
              <p className="pt-8 md:pt-10 text-semibold md:text-2xl text-lg text-center">
                Unlock the power of e-commerce and get transform your business with our comprehensive online courses.
              </p>
            </div>
          </div>

          <div>
            <Accordion className='w-full' allowToggle>

              {COURSES_DATA.map((item) => (
                <AccordionItem className='border-b border-gray-200 py-[17px] px-2 dark:!border-white/10 pb-4'>
                  <h2>
                    <AccordionButton className='flex justify-between md:px-4 px-2 bg-black md:py-3 py-2 rounded_md'>
                      <span className='text-left font-semibold md:font-bold text-navy-900'>
                        {item.title}
                      </span>
                      <span className='py-1 md:py-2 md:px-2 px-1 bg_primary rounded_md'>
                        <AccordionIcon className='text-center text-xl md:text-3xl text-white' />
                      </span>
                    </AccordionButton>
                  </h2>
                  <AccordionPanel className='text-black bg-white rounded_md py-4 border-2 border-black'>
                    <p className="md:text-lg text-base md:p-4 p-2">
                      {item.desc}
                    </p>
                    <div className='flex md:flex-row flex-col md:justify-between justify-center md:items-center pt-4'>
                      <div className='bg_primary md:flex-col flex sm:justify-around justify-between w-full md:w-4/12 xl:w-1/4 text-white py-3 px-3 md:rounded-r-full'>
                        <h3 className='font-bold text-lg md:text-xl'>One Time Fee: <span className='text-black text-lg md:text-xl font-bold'>{item.fee}</span></h3>
                        <h3 className='font-bold text-lg md:text-xl'>Duration: <span className='text-black text-lg md:text-xl font-bold'>{item.duration}</span></h3>
                      </div>
                      <div className='px-4 pt-4'>
                        <Button src="" className='w-full text-white primaryBtn' size="medium">Apply Now</Button>
                      </div>
                    </div>
                  </AccordionPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Container>
      </section>

      <Footer />
    </>
  )
}

export default Courses;