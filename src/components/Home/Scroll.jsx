import React from 'react'
import Scrollbar from './Scrollbar'

const Scroll = () => {
    return (
        <div className='bg-black text-white py-20'>
            <div className='mx-auto w-fit text-2xl tracking-[60px]' style={{ fontFamily: "Exo-Light" }}>SCROLL</div>
            <p className='m-20 px-20 text-4xl justify' style={{ color: '#ff7500', fontFamily: "Exo-Bold" }}>Puneri Paltan is currently one of the top performing teams in the Pro Kabaddi League. With a mix of unstoppable energy, honed-out skills and steely nerves, here's a force that consistently looks forward to perform better, challenge its opponents and make a difference.</p>

            <div className='flex flex-column'>
                <div className='py-50 px-7 text-[90px] text-orange-400 font-love-nature'>PLAYERS</div>
                <div>
                    <Scrollbar/>
                </div>
            </div>

        </div>

    )
}

export default Scroll