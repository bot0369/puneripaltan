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
            element.classList.remove("show"); // reset animation
            void element.offsetWidth; // force reflow to restart animation
            element.classList.add("show");
          }
        });
      },
      { threshold: 0.5 } // triggers when 50% visible
    );

    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-black text-white py-20 w-100%">
      <div
        className="mx-auto w-fit text-2xl tracking-[30px] md:tracking-[60px] pl-6 md:pl-0"
        style={{ fontFamily: "Exo-Light" }}
      >
        SCROLL
      </div>

      <p
        className="m-10 md:m-20 md:px-20 text-3xl md:text-4xl text-center md:text-justify"
        style={{ color: "#ff7500", fontFamily: "Exo-Bold" }}
      >
        Puneri Paltan is currently one of the top performing teams in the Pro
        Kabaddi League. With a mix of unstoppable energy, honed-out skills and
        steely nerves, here's a force that consistently looks forward to perform
        better, challenge its opponents and make a difference.
      </p>

      <div className="block md:flex md:flex-column">
        <div className="py-10 md:py-60 px-7 text-5xl md:text-[90px] text-orange-400">
          <div ref={ref} className="fade-in-down">PLAYERS</div>
        </div>
        <div>
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
