import React from 'react'
import { Link } from 'react-router-dom'
import img from '../../assets/images/news-banner.jpeg'

const News = () => {
  return (
    <div className='relative px-7 py-40 md:px-15 md:py-40 border bg-black'>
      <div className='h-130 flex flex-col justify-center items-center' style={{backgroundImage:`url(${img})` ,backgroundSize:'cover', backgroundPosition:'center', backgroundRepeat:'no-repeat'}}>
        <h1 className='text-orange-500 text-7xl font-bold md:text-8xl'>PUNERI PALTAN</h1>
        <h1 className='text-white text-4xl font-bold md:text-8xl'>IN THE NEWS</h1>
        <Link to='/' className='absolute bottom-35 bg-orange-500 italic text-xl text-white py-1 px-15 md:py-3 md:px-30' 
        style={{ clipPath: "polygon( 2% 0, 100% 0, 98% 100%, 0% 100%)" }}
        >
            Enter 
        </Link>
      </div>
    </div>
  )
}

export default News 