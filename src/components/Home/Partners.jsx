import React from "react";
import principalPartner from "../../assets/images/logos/force_motors.png";
import poweredBy from "../../assets/images/logos/Batery-Ai_logo.png";
import assoPartner from "../../assets/images/logos/korloskar-brother-logo.png";
import stihl from "../../assets/images/logos/stihl-logo.png";
import hint from "../../assets/images/logos/hint_logo.png";
import vikram from "../../assets/images/logos/vikram-tea.png";
import radio from "../../assets/images/logos/radio.png";
import icon from "../../assets/images/logos/icon-logo.png";
import shiv from "../../assets/images/logos/shiv-naresh-logo.png";

const Partners = () => {
  return (
    <div className="relative ">
      <div
        className="absolute -top-30 md:-top-37 md:flex md:flex-column md:m-20 bg-orange-500 p-3 md:p-10 gap-15 md:px-20 clip-mobile md:clip-desktop"
      >
        <h2 className="text-xl md:py-2 text-center md:text-left text-white font-bold mb-3 md:mb-0">
          SUBSCRIBE TO OUR NEWSLETTER
        </h2>
        <input
          type="email"
          className="bg-white p-3 ml-2 w-50 md:w-90 clip-email-mobile md:clip-desktop"
          placeholder="Enter your email-id"
          // style={{ clipPath: "polygon( 2% 0, 100% 0, 98% 100%, 0% 100%)" }}
        />
        <button
          className="text-white bg-orange-700 px-5 py-3 md:py-0 md:px-8 clip-go-mobile md:clip-go-desktop"
          // style={{ clipPath: "polygon( 25% 0, 100% 0, 75% 100%, 0% 100%)" }}
        >
          Go
        </button>
      </div>

      <div className="p-17 mt-10 md:p-30 md:mt-0">
        <div>
          <h1 className="text-4xl  md:text-8xl font-bold text-orange-500 md:text-center">
            PARTNERS
          </h1>
        </div>
        <div className="text-center p-10 flex flex-col justify-center items-center gap-10">
          <div>
            <div>
              <img src={principalPartner} alt="" />
              <p>Principal Partner</p>
            </div>
          </div>
          <div className="flex flex-row gap-10">
            <div>
              <img src={poweredBy} alt="" />

              <p>Powered Partner</p>
            </div>
            <div>
              <img src={assoPartner} alt="" />

              <p>Associate Partner</p>
            </div>
          </div>
          <div className="flex flex-row gap-10">
            <div>
              <img src={stihl} alt="" />
              <p>Co-Partner</p>
            </div>
            <div>
              <img src={hint} alt="" />
              <p>Co-Partner</p>
            </div>
            <div>
              <img src={vikram} alt="" />
              <p>Co-Partner</p>
            </div>
            <div>
              <img src={stihl} alt="" />
              <p>Co-Partner</p>
            </div>
          </div>
          <div className="flex flex-row gap-10">
            <div>
              <img src={radio} alt="" />
              <p>Radio Partner</p>
            </div>
            <div>
              <img src={icon} alt="" />
              <p>Travel Partner</p>
            </div>
            <div>
              <img src={shiv} alt="" />
              <p>Kit Partner</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
