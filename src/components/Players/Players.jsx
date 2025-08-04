import React from "react";
import bgimage from "../../assets/images/player-banner-bg_S11.jpg";
import bgimage2 from "../../assets/images/banner-title.png";
import bgimage3 from "../../assets/images/players_page_banner_desktop_S11.png";
import Footer from "../../global/Footer";
import Raiders from "./Raiders";
import { useEffect } from "react";

const Players = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div
        className="relative md:px-40 md:py-50 md:bg-cover bg-left md:bg-center overflow-hidden"
        style={{ backgroundImage: `url(${bgimage})` }}
      >
        <div
          className="md:w-140 h-160 md:h-80 bg-contain bg-right bg-no-repeat md:flex md:items-center md:justify-center"
          style={{ backgroundImage: `url(${bgimage2})` }}
        >
          <h1 className="py-26 md:px-0 text-orange-600 md:text-white text-[77px] md:text-[80px] font-bold md:tracking-widest">
            PLAYERS
          </h1>
        </div>
        <img
          src={bgimage3}
          alt="Players Banner"
          className="absolute bottom-35 right-5 md:w-180 md:h-115 scale-260 md:-bottom-12 md:-right-10 md:scale-90"
        />
      </div>
      <div>
        <Raiders />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Players;
