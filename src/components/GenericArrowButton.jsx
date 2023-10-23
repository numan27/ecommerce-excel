import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const GenericArrowButton = ({title, color, link}) => {
    return (
        <div className='genericLink'>
            <Link to={link} style={{color: color}}
                className='underline flex items-end justify-center md:justify-end px-2 mt-5 font-medium'>
                <span className='mr-2 text-xl'>{title} </span> <BsArrowRight className='text-2xl' />
            </Link>
        </div>
    )
}

export default GenericArrowButton