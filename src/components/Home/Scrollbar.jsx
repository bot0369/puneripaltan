import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPlayers } from "../store/action/player-action";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Scrollbar = () => {
  const dispatch = useDispatch();

  const { players, status, error } = useSelector((state) => state.player || {});

  useEffect(() => {
    dispatch(getPlayers());
  }, [dispatch]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
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
    <div className="w-300 px-4 pt-20 pb-70">
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
              <div className="p-1 text-center">
                <img
                  src={player.profile_image}
                  alt={player.name}
                  className="w-80 h-80 object-cover rounded-full mx-auto"
                />
                <h2 className="mt-2 text-lg text-white font-semibold">
                  {player.name}
                </h2>
                <p className="text-sm text-gray-600">{player.cat_name}</p>
              </div>
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default Scrollbar;
