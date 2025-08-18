import { useEffect, useRef } from "react";
import Scrollbar from "./Scrollbar";
import { Link } from "react-router-dom";


const Scroll = () => {

  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            element.classList.remove("show"); 
            void element.offsetWidth;
            element.classList.add("show");
          }
        });
      },
      { threshold: 0.5 } 
    );

    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-black text-white py-20 md:py-30 w-100%">
      <div
        className="exo-light mx-auto w-fit text-2xl md:text-[20px] tracking-[30px] md:tracking-[65px] pl-6 md:pl-0"
      >
        SCROLL
      </div>

      <p
        className="exo my-3 mx-10 md:mx-0 md:m-20 md:px-40 text-2xl md:text-[50px] text-center md:text-justify"
        style={{ color: "#ff7500"}}
      >
        Puneri Paltan is currently one of the top performing teams in the Pro
        Kabaddi League. With a mix of unstoppable energy, honed-out skills and
        steely nerves, here's a force that consistently looks forward to perform
        better, challenge its opponents and make a difference.
      </p>

      <div className="block lg:grid lg:grid-cols-[1fr_2fr] ">
        <div className="py-10 md:py-60 px-7 text-5xl md:text-[90px] font-bold text-orange-400 lg:tracking-[5px]">
          <div ref={ref} className="fade-in-down">PLAYERS</div>
        </div>
        <div className="">
          <Scrollbar />
        </div>
      </div>

      <Link to="/players">
        <div
          className="mt-20 md:mb-50 text-center w-70 py-2 font-medium italic text-2xl mx-auto bg-orange-500"
          style={{ clipPath: "polygon( 3% 0, 100% 0, 97% 100%, 0% 100%)" }}
        >
          <h1>Enter</h1>
        </div>
      </Link>
    </div>
  );
};

export default Scroll;
