import React from 'react'
import DashboardLayout from './Dashboard/Dashboard'
// import IMAGES from '../assets/img'

const Profile = () => {
    return (
        <div className='h-screen'>
            <DashboardLayout>

            <section className="sm:mt-8 mt-8 pt-8 bg-blueGray-200 h-full sm:px-8">
                    <div className="container mx-auto px-4">
                        <div className=" flex flex-col min-w-0 break-words bg-white w-full mb-2 shadow-xl rounded-lg ">
                            <div className="px-6">
                            <h1 className="sm:text-4xl text-xl font-bold text-center py-4 bg-orange-300">Courses info will be added soon</h1>
                                <div className="flex flex-wrap justify-center">
                                    <div className="w-full px-4 lg:order-2 flex justify-center lg:justify-start">
                                        <div className="flex justify-center">
                                            {/* <img
                                                alt="profile"
                                                src={IMAGES.USER_PROFILE}
                                                className="shadow-xl rounded-full w-36 h-36 lg:w-40 lg:h-40 align-middle border-2 border-white absolute -mt-24 sm:-mt-20"
                                            /> */}
                                        </div>
                                    </div>

                                </div>
                                <div className="text-center mt-12 grid grid-cols-1 md:gap-y-0 gap-y-4 md-grid-cols-2 lg:grid-cols-3 gap-x-4">
                                    <div className='rounded-lg shadow-lg px-6 py-8'>
                                        <h3 className="sm:text-4xl text-2xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                                            Andrea Hasani
                                        </h3>
                                        <div className="text-sm leading-normal mt-0 text-blueGray-400 font-bold uppercase">
                                            <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>{" "}
                                            Los Angeles, California
                                        </div>

                                    </div>

                                    <div className='rounded-lg shadow-lg py-4 sm:py-2'>
                                        <h3 className="text-lg font-bold mb-4">Personal Info.</h3>
                                        <ul className="text-left pl-8">
                                            <li>Email: <span className='font-semibold'>andrea@test.com</span></li>
                                            <li>Contact: <span className='font-semibold'>+92321-7065423</span></li>
                                            <li>D.O.B: <span className='font-semibold'>April 23, 1999</span></li>
                                        </ul>
                                    </div>
                                    <div className='rounded-lg shadow-lg py-4 sm:py-2'>
                                        <h3 className="text-lg font-bold mb-4">User Details</h3>
                                        <ul className="text-left pl-8">
                                            <li>Role: <span className='font-semibold'>Student</span></li>
                                            <li>Status: <span className='font-semibold'>Active</span></li>
                                            <li>Qualifications: <span className='font-semibold'>Bachelors in Business Administration</span></li>
                                        </ul>
                                    </div>

                                </div>
                                {/* <div className="sm:mt-2 py-8 text-center grid grid-cols-1 sm:gap-y-0 gap-y-4 sm:grid-cols-2 gap-x-4">
                                    <div className="bg-white rounded-lg shadow-lg p-8 h-full">
                                        <h1 className="sm:text-2xl text-xl font-bold mb-4">Courses Enrolled</h1>
                                        <div className='mt-8'>
                                            <ul className="list-decimal text-left sm:pl-8">
                                                <li><h3 className="text-lg font-bold">Amazon Wholesale FBA <span className='text-gray-400 italic'>(Morning)</span></h3></li>
                                                <li><h3 className="text-lg font-bold">Digital Marketing <span className='text-gray-400 italic'>(Evening)</span></h3></li>
                                                <li><h3 className="text-lg font-bold">Etsy PPC Advanced Level <span className='text-gray-400 italic'>(Afternoon)</span></h3></li>
                                            </ul>
                                        </div>
                                    </div>
                                   
                                </div> */}
                            </div>
                        </div>
                    </div>
                </section>
            </DashboardLayout>
        </div>
    )
}

export default Profile