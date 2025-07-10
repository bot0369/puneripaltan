import React from 'react'
import image from "../../assets/images/buy-tickets-homepage_s11.png"
import ticket from "../../assets/images/tickets.png"


const Tickets = () => {
    return (
        <a
            href="https://in.bookmyshow.com/sports/pro-kabaddi-league-season-11-2024/ET00414457"
            target="_blank"
        >
            <div className="px-20">
                <div className='relative bottom-50 flex flex-row bg-[linear-gradient(107deg,#333333_50%,_black_50%)]'
                    style={{ clipPath: 'polygon(10% 0, 100% 0, 90% 100%, 0% 100%)' ,
                }}
                >
                    <div>
                        <img src={image} alt="" className='w-170 mx-10' />
                    </div>
                    <div>
                        <div className='relative border-2 text-white px-13 py-2 bg-orange-500 top-45 right-78 text-2xl italic cursor-pointer'
                            style={{ clipPath: 'polygon(8% 0, 100% 0, 92% 100%, 0% 100%)' }}
                        >
                            Buy Tickets
                        </div>
                    </div>
                    <div>
                        <img src={ticket} alt="" className='absolute md:w-80 right-25 bottom-25 sm:w-80' />
                    </div>
                </div>
            </div>
        </a>

    )
}

export default Tickets


// s
