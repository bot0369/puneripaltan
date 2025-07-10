import React from "react";
import bgimage from "../../assets/images/player-banner-bg_S11.jpg";
import bgimage2 from "../../assets/images/banner-title.png";
import bgimage3 from "../../assets/images/players_page_banner_desktop_S11.png";
import Footer from "../../global/Footer";
import Raiders from "./Raiders";

const Players = () => {
  return (
    <div>
      <div
        className="relative px-40 py-50 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgimage})` }}
      >
        <div
          className="w-140 h-80 bg-contain bg-right bg-no-repeat flex items-center justify-center"
          style={{ backgroundImage: `url(${bgimage2})` }}
        >
          <h1 className="text-white text-[80px] font-bold tracking-widest">
            PLAYERS
          </h1>
        </div>
        <img
          src={bgimage3}
          alt="Players Banner"
          className="absolute bottom-0 right-0 w-180"
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
