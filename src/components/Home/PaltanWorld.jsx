import React from 'react'
import img from "../../assets/images/paltan-world-homepage_s11.png"
import { Link } from 'react-router-dom'
import bgImg from "../../assets/images/puneri-world-bg_S111.jpeg"

const PaltanWorld = () => {
    return (
        <div>
            <div className='relative border mt-70 md:mt-0 md:mb-0'>
                <div className='w-full h-80 md:h-140 '>
                    <img src={bgImg} alt="" className='w-full h-full object-cover'/>
                </div>
                <div className='absolute top-18 w-80 md:top-0 md:w-200 md:pl-20'>
                    <img src={img} alt="" className='w-full h-full object-cover'/>
                </div>
                <div className='flex flex-col '>
                    <h1 className='absolute top-40 left-0 text-7xl md:top-50 md:left-180 md:text-8xl font-bold text-orange-500'>PALTAN</h1>
                    <h1 className='absolute text-white top-55 text-7xl md:top-68 md:left-185 md:text-8xl font-bold px-5'>WORLD</h1>
                    <div className='absolute top-77 left-10 z-20 md:top-85 md:left-185 md:px-30 md:py-10'>
                        <Link to="/paltanworld" className='bg-orange-500 px-25 py-3 text-xl text-white italic'
                        style={{ clipPath: 'polygon(3% 0, 100% 0, 97% 100%, 0% 100%)' }}
                        >
                            Enter
                        </Link>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default PaltanWorld
