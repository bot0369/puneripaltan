import React from "react";
import img from "../../assets/images/PaltanWorldImages/paltan-world-banner-desktop-s11.png";
import puneriTv from "../../assets/images/PaltanWorldImages/puneri-tv-2024.png";
import gallery from "../../assets/images/PaltanWorldImages/puneri-gallery-2024.png";
import Footer from "../../global/Footer";
import { Link } from "react-router-dom";

const PaltanWorld = () => {
  return (
    <div>
      <div>
        <img src={img} alt="" />
      </div>
      <div className="md:flex md:flex-row">
        <Link to="/puneri-tv" className="w-1/2">
          <div
            className="h-150 md:h-100 w-full px-6 md:px-0 text-white flex justify-center items-center text-5xl md:text-6xl font-bold"
            style={{
              backgroundImage: `url(${puneriTv})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <h1>PUNERI TV</h1>
          </div>
        </Link>

        <Link to="/puneri-gallery" className="w-1/2">
          <div
            className="h-150 md:h-100 w-full px-6 md:px-0 text-white flex justify-center items-center text-5xl md:text-6xl font-bold"
            style={{
              backgroundImage: `url(${gallery})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <h1>GALLERY</h1>
          </div>
        </Link>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default PaltanWorld;
