import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPlayers } from "../store/action/player-action";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdArrowLeft } from "react-icons/md";
import { MdArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import '../Home/Scrollbar.modules.css'

const Scrollbar = () => {
  const dispatch = useDispatch();

  const { players, status, error } = useSelector((state) => state.player || {});
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    dispatch(getPlayers());
  }, [dispatch]);

  const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} custom-arrow next-arrow text-black`}
        style={{
          ...style,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "white",
          width: "60px",
          height: "40px",
          position: "absolute",
          right: "1%",
          top: "600px",
          zIndex: 2,
          borderRadius: "40px",
          cursor: "pointer",
        }}
        onClick={onClick}
      >
        <MdArrowRight size={30} color="black" />
      </div>
    );
  };

  const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} custom-arrow prev-arrow md:`}
        style={{
          ...style,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "white",
          width: "60px",
          height: "40px",
          position: "absolute",
          left: "50%",
          top: "600px",
          zIndex: 2,
          borderRadius: "50px",
          cursor: "pointer",

        }}
        onClick={onClick}
      >
        <MdArrowLeft size={30} color="black" />
      </div>
    );
  };


  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setActiveIndex(next),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="sm:w-60 md:w-180 lg:w-200 xl:w-240 px-4 py-2">
      {status === "loading" && (
        <p className="text-center text-gray-700">Loading gallery...</p>
      )}
      {status === "failed" && (
        <p className="text-center text-red-600">
          {error || "Failed to load players."}
        </p>
      )}
      {status === "succeeded" && players && players.length > 0 && (
        <Slider {...settings}>
          {players.map((player, idx) => (
            <div key={player.id} className="relative">
              <Link to={`/getPlayerDetails/${player.id}`}>
                <div className="py-40 text-center tracking-[2px]">
                  <img
                    src={player.profile_image}
                    alt={player.name}
                    className={` w-60 h-60 object-cover rounded-full mx-auto 2xl:h-80 2xl:w-80 ${idx === activeIndex ? "scale-first-card" : "opacity-50"}`}
                  />
                  <h2 className={`absolute z-20 text-xl px-20 text-white font-semibold z-10 transition-all duration-1
                    ${idx === activeIndex
                      ? "top-4/5 left-1/2 -translate-x-1/2 text-[30px] opactiy-100"
                      : "top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-50"
                    }`}

                  >
                    {player.name}
                  </h2>
                  <p
                    className={`absolute text-lg top-133 text-orange-600 left-1/2 -translate-x-1/2 transition-all duration-800 ease-in-out
                      ${idx === activeIndex
                        ? "translate-y-0 opacity-100"
                        : "translate-y-5 opacity-0"
                      }`}
                  >
                    {player.cat_name}
                  </p>

                </div>
              </Link>

            </div>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default Scrollbar;
