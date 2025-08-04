import React from 'react'
import image from "../../assets/images/buy-tickets-homepage_s11.png"
import ticket from "../../assets/images/tickets.png"


const Tickets = () => {
    return (
        <a
            href="https://in.bookmyshow.com/sports/pro-kabaddi-league-season-11-2024/ET00414457"
            target="_blank"
        >
            <div className="px-15 relative">
                <div className='relative h-50 w-70 md:h-100 md:w-150 -bottom-10 -left-10 md:bottom-50 md:left-0 flex flex-row bg-stone-500'
                    style={{
                        clipPath: 'polygon(10% 0, 100% 0, 90% 100%, 0% 100%)',
                    }}
                >
                    <div>
                        <img src={image} alt="" className='absolute bottom-0 w-130 mx-10' />
                    </div>

                </div>
                <div className='absolute left-150 h-100 w-150 bottom-50 bg-black hidden md:block'
                    style={{
                        clipPath: 'polygon(10% 0, 100% 0, 90% 100%, 0% 100%)',
                    }}
                >
                </div>
                <div>
                    <div className='absolute border-2 text-white px-13 py-2 bg-orange-500 -left-10 top-70 md:-top-5 md:left-110  text-2xl italic cursor-pointer'
                        style={{ clipPath: 'polygon(5% 0, 100% 0, 95% 100%, 0% 100%)' }}
                    >
                        Buy Tickets 
                    </div>
                </div>
                <div>
                    <img src={ticket} alt="" className='absolute right-10 -bottom-55 w-60 md:w-80 md:right-45 md:bottom-75 sm:w-80 -z-1' />
                </div>
            </div>
        </a>

    )
}

export default Tickets


// s
