import React from 'react'
import img from "../../assets/images/paltan-world-homepage_s11.png"
import { Link } from 'react-router-dom'
import bgImg from "../../assets/images/puneri-world-bg_S111.jpeg"

const PaltanWorld = () => {
    return (
        <div>
            <div className='relative border'>
                <div className='w-full h-140 overflow-hidden'>
                    <img src={bgImg} alt="" className='w-full h-full object-cover'/>
                </div>
                <div className='absolute top-0 '>
                    <img src={img} alt="" />
                </div>
                <div className='flex flex-col '>
                    <h1 className='absolute top-50 left-180 text-8xl font-bold text-orange-500'>PALTAN</h1>
                    <h1 className='absolute text-white top-68 left-185 text-8xl font-bold px-5'>WORLD</h1>
                    <div className='absolute top-85 left-185 px-30 py-10'>
                        <Link to="/paltanworld" className='bg-orange-500 px-25 py-3 text-xl text-white'
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
