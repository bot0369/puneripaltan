import React from "react";
import Scrollbar from "./Scrollbar";
import { Link } from "react-router-dom";

const Scroll = () => {
  return (
    <div className="bg-black text-white py-20">
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
        <div className="py-10 md:py-50 px-7 text-5xl md:text-[90px] text-orange-400 ">PLAYERS</div>
        <div>
          <Scrollbar />
        </div>

      </div>
      
      <Link to="/players">
        <div className="mt-20 md:mb-50 text-center w-70 py-2 font-medium italic text-2xl mx-auto bg-orange-500"
        style={{ clipPath: "polygon( 3% 0, 100% 0, 97% 100%, 0% 100%)" }}
        >
          <h1>Enter</h1>
        </div>
      </Link>

    </div>
  );
};

export default Scroll;
