import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPlayers } from "../store/action/player-action";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdArrowLeft } from "react-icons/md";
import { MdArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const ScrollBar2 = () => {
  const dispatch = useDispatch();

  const { players, status, error } = useSelector((state) => state.player || {});

  useEffect(() => {
    dispatch(getPlayers());
  }, [dispatch]);

  const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} custom-arrow next-arrow`}
        style={{
          ...style,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "orange",
          width: "70px",
          height: "50px",
          position: "absolute",
          right: "-35px",
          top: "50%",
          zIndex: 2,
          borderRadius: "40px",
          cursor: "pointer",
        }}
        onClick={onClick}
      >
        <MdArrowRight size={40} color="white" />
      </div>
    );
  };

  const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} custom-arrow prev-arrow`}
        style={{
          ...style,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "orange",
          width: "70px",
          height: "50px",
          position: "absolute",
          left: "-35px",
          top: "50%",
          zIndex: 2,
          borderRadius: "50px",
          cursor: "pointer",
        }}
        onClick={onClick}
      >
        <MdArrowLeft size={40} color="white" />
      </div>
    );
  };


  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    autoplay: true,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="md:w-300 my-20 mx-3 md:mx-auto bg-black"

    >
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
          {players.map((player) => (
            <div key={player.id} className="">
              <Link to={`/getPlayerDetails/${player.id}`}>
                <div className=" relative p-1 text-center md:flex md:flex-cols gap-10 ">
                  <div className="mt-20 md:my-auto md:mt-0 md:pl-20 md:py-35">
                    <h2 className="mt-2 text-3xl text-white font-semibold">
                      {player.name}
                    </h2>
                    <p className="text-md text-orange-600">{player.cat_name}</p>
                  </div>

                  <div className="w-70 h-90 md:70 md:mt-25 overflow-hidden">
                    <img
                      src={player.full_image}
                      alt={player.name}
                      className="absolute w-70 2xl:h-80 2xl:w-80"
                    />
                  </div>

                  {player.jersey_no !== "0" && (
                    <div className="text-white text-5xl italic px-5 py-3 absolute top-0 left-0 bg-orange-500"
                      style={{
                        clipPath: "polygon(10% 0, 100% 0, 90% 100%, 0% 100%)",
                      }}
                    >
                      {player.jersey_no}
                    </div>
                  )}
                </div>
              </Link>
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default ScrollBar2;
