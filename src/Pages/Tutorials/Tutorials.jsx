import { useEffect } from 'react';
import { Container } from '@mui/material';
import VideoPlayer from './VideoPlayer';
import thumbnail from './thumbnail.jpeg';
import Footer from "../../components/Footers/Footer";
import IMAGES from '../../assets/img';

const Tutorials = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Section 1 */}

      <section className="bg-black text-white">
        <Container>
          <div className="md:flex items-center justify-center py-8 md:py-32">
            <div className="w-full md:w-1/2 ">
              <h1 className="font-bold text-3xl xl:text-5xl md:text-4xl text-center md:text-left pb-1">
                Videos
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
                src={IMAGES.VIDEO_HERO}
                className="w-full md:w-9/12"
                alt="Home Background Img"
              />
            </div>
          </div>
        </Container>
      </section>


      {/* Video 1 */}

      <section className="bg-white px-2">
        <Container>
          <div className="md:flex items-center justify-center py-8 md:pt-16">
            <div className="w-full md:w-1/2 text-black">
              <h1 className="text-center md:text-left">
                <span className='pb-1 font-bold text-xl md:text-3xl'>Account Creation</span>
              </h1>
              <p className="my-4 text-lg text-blueGray-200 text-center md:text-left">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
              </p>
            </div>
            <div className="w-full md:w-1/2 flex items-center justify-center md:justify-end pt-10 md:pt-0">
              {/* <div className='videoWrapper border-3 border-black px-2 flex justify-center items-center'> */}
              <VideoPlayer className="" thumbnail={thumbnail} />
              {/* </div> */}
            </div>
          </div>
        </Container>
      </section>


      {/* Video 2 */}

      <section className="bg-black px-2">
        <Container>
          <div className="md:flex items-center justify-center py-8 md:pt-16">
            <div className="w-full md:w-1/2 flex items-center justify-center md:justify-start pt-10 md:pt-0">
              {/* <div className='videoWrapper border-3 border-black px-2 flex justify-center items-center'> */}
              <VideoPlayer className="" thumbnail={thumbnail} />
              {/* </div> */}
            </div>
            <div className="w-full md:w-1/2 text-white">
              <h1 className="font-bold text-xl md:text-4xl text-center md:text-left mt-3">
                Amazon FBA
              </h1>
              <p className="my-4 text-lg text-blueGray-200 text-center md:text-left">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
              </p>
            </div>
          </div>
        </Container>
      </section>


      {/* Video 3 */}

      <section className="bg-white px-2">
        <Container>
          <div className="md:flex items-center justify-center py-8 md:pt-16">
            <div className="w-full md:w-1/2 text-black">
              <h1 className="font-bold text-xl md:text-4xl text-center md:text-left mt-3">
                Account FBA Private Label
              </h1>
              <p className="my-4 text-lg text-blueGray-200 text-center md:text-left">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
              </p>
            </div>
            <div className="w-full md:w-1/2 flex items-center justify-center md:justify-end pt-10 md:pt-0">
              {/* <div className='videoWrapper border-3 border-black px-2 flex justify-center items-center'> */}
              <VideoPlayer className="" thumbnail={thumbnail} />
              {/* </div> */}
            </div>
          </div>
        </Container>
      </section>


      {/* Video 4 */}

      <section className="bg-black px-2">
        <Container>
          <div className="md:flex items-center justify-center py-8 md:pt-16">
            <div className="w-full md:w-1/2 flex items-center justify-center md:justify-start pt-10 md:pt-0">
              {/* <div className='videoWrapper border-3 border-black px-2 flex justify-center items-center'> */}
              <VideoPlayer className="" thumbnail={thumbnail} />
              {/* </div> */}
            </div>
            <div className="w-full md:w-1/2 text-white">
              <h1 className="font-bold text-xl md:text-4xl text-center md:text-left mt-3">
                Amazon Dropshipping
              </h1>
              <p className="my-4 text-lg text-blueGray-200 text-center md:text-left">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
              </p>
            </div>

          </div>
        </Container>
      </section>

      {/* Video 5 */}

      <section className="bg-white px-2">
        <Container>
          <div className="md:flex items-center justify-center py-8 md:pt-16">
            <div className="w-full md:w-1/2 text-black">
              <h1 className="font-bold text-xl md:text-4xl text-center md:text-left mt-3">
                Amazon Product Research and Sourcing
              </h1>
              <p className="my-4 text-lg text-blueGray-200 text-center md:text-left">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
              </p>
            </div>
            <div className="w-full md:w-1/2 flex items-center justify-center md:justify-end pt-10 md:pt-0">
              {/* <div className='videoWrapper border-3 border-black px-2 flex justify-center items-center'> */}
              <VideoPlayer className="" thumbnail={thumbnail} />
              {/* </div> */}
            </div>
          </div>
        </Container>
      </section>


      <Footer />
    </>
  )
}

export default Tutorials