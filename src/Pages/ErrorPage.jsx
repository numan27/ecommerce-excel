import React from 'react'
import IMAGES from '../assets/img'

const ErrorPage = () => {
  return (
    <div className='h-full flex items-center justify-center'>
      <img
        src={IMAGES.ERROR_PAGE}
        className=" md:w-3/5 mx-auto md:mx-0"
        alt=""
      />

    </div>
  )
}

export default ErrorPage