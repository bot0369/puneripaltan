import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPlayers } from "../store/action/player-action";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdArrowLeft } from "react-icons/md";
import { MdArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const Scrollbar = () => {
  const dispatch = useDispatch();

  const { players, status, error } = useSelector((state) => state.player || {});

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
          top: "400px",
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
          top: "400px",
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
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
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
    <div className="sm:w-220 md:w-100 lg:w-250 2xl:w-350 px-4 pt-30 pb-30">
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
              <div className="p-1 text-center">
                <img
                  src={player.profile_image}
                  alt={player.name}
                  className="w-60 h-60 object-cover rounded-full mx-auto 2xl:h-80 2xl:w-80"
                />
                <h2 className="mt-2 text-lg text-white font-semibold">
                  {player.name}
                </h2>
                <p className="text-sm text-orange-600">{player.cat_name}</p>
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
