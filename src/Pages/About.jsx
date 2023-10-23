import { useEffect } from 'react';
import { Container } from '@mui/material';
import Footer from "../components/Footers/Footer";
import IMAGES from '../assets/img';

const About = () => {

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
                About
              </h1>
              <img
                src={IMAGES.HEADING_BOTTOM}
                className="md:w-32 w-16 mx-auto md:mx-0"
                alt=""
              />
              <h1 className="font-semibold text-xl md:text-4xl text-center md:text-left my-4">
                Take your first step
                towards success today!
              </h1>
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
      <section className="">
        <Container>
          <div className="md:flex items-center justify-center py-8 md:py-16">
            <div className="w-full md:w-1/2 md:border-r-4 border-black py-4 md:py-16">
              <h1 className=" md:text-4xl text-center text-[#F4A640]">
                <span className='heading_border pb-1 font-bold text-2xl md:text-5xl'> Who We Are</span>
              </h1>
            </div>
            <div className="w-full md:w-1/2 flex items-center justify-center md:justify-end">
              <p className="my-4 md:px-8 px-2 text-lg text-center md:text-justify">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500sLorem Ipsum has been the industry's standard dummy text ever since the 1500s
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Section 3 */}

      <section className="bg-black text-white">
        <Container>
          <div className="md:flex items-center justify-center px-2 py-8 md:py-16">
            <div className="w-full">
            <h1 className=" md:text-4xl text-center">
              <span className='heading_border_white pb-1 font-bold text-2xl md:text-5xl'>Our Mission</span>
            </h1>
              <p className="pt-8 md:pt-10 text-lg text-center">
                Unlock the power of e-commerce and transform your business with our comprehensive online course. From building your online store to optimizing your sales strategy, we provide the knowledge and tools you need to succeed in the digital marketplace.
                Unlock the power of e-commerce and transform your business with our comprehensive online course. From building your online store to optimizing your sales strategy, we provide the knowledge and tools you need to succeed in the digital marketplace.
              </p>
            </div>
          </div>
        </Container>
      </section>


      {/* Section 4 */}

      <section className="bg_primary text-white">
        <Container>
          <div className="md:flex items-center justify-center px-2 py-8 md:py-16">
            <div className="w-full">
            <h1 className=" md:text-4xl text-center">
              <span className='heading_border_white pb-1 font-bold text-2xl md:text-5xl'>Our Vision</span>
            </h1>
              <p className="pt-8 md:pt-10 text-lg text-center">
                Unlock the power of e-commerce and transform your business with our comprehensive online course. From building your online store to optimizing your sales strategy, we provide the knowledge and tools you need to succeed in the digital marketplace.
                Unlock the power of e-commerce and transform your business with our comprehensive online course. From building your online store to optimizing your sales strategy, we provide the knowledge and tools you need to succeed in the digital marketplace.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </>
  )
}

export default About