import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import img from '../../assets/images/news-banner.jpeg'


const News = () => {
  const refs = [useRef(null), useRef(null)];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("show");
            void entry.target.offsetWidth; 
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show");
          }
        });
      },
      { threshold: 0.5 }
    );

    refs.forEach((r) => {
      if (r.current) observer.observe(r.current);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className='relative px-7 py-40 md:px-15 md:py-40 border bg-black'>
      <div 
        className='h-130 flex flex-col justify-center items-center' 
        style={{
          backgroundImage:`url(${img})`,
          backgroundSize:'cover',
          backgroundPosition:'center',
          backgroundRepeat:'no-repeat'
        }}
      >
        <h1 ref={refs[0]}
          className='text-orange-500 mx-10 text-7xl font-bold md:text-8xl opacity-0 fade-in-down'
        >
          PUNERI PALTAN
        </h1>

        <h1 ref={refs[1]}
          className='text-white text-4xl font-bold md:text-8xl opacity-0 fade-in-up'
        >
          IN THE NEWS
        </h1>

        <Link 
          to='/' 
          className='absolute bottom-35 md:bottom-33 bg-orange-500 italic text-2xl text-white py-1 px-20 md:py-3 md:px-30' 
          style={{ clipPath: "polygon( 5% 0, 100% 0, 95% 100%, 0% 100%)" }}
        >
            Enter 
        </Link>
      </div>
    </div>
  )
}

export default News
