import React from "react";
import img from "../../assets/images/GalleryImages/puneri-tv-desk-banner-s11.png";
import bgimg from "../../assets/images/GalleryImages/gallery-bann.jpeg";
import bgimg2 from "../../assets/images/GalleryImages/banner-title.png";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTvList } from "../store/action/tvList-action";

const PuneriTv = (e) => {
  const dispatch = useDispatch();

  const {
    tvList = [],
    status,
    error,
  } = useSelector((state) => state.tvList || {});

  useEffect(() => {
    dispatch(getTvList());
  }, [dispatch]);

  return (
    <div>
      <div
        className="relative flex flex-row"
        style={{
          backgroundImage: `url(${bgimg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className="px-20 py-30 ml-40 my-30 text-white"
          style={{
            backgroundImage: `url(${bgimg2})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <h1 className="text-8xl font-bold text-center tracking-[15px]">
            PUNERI TV
          </h1>
        </div>
        <div className="text-white w-full">
          <img src={img} alt="" className="absolute w-160 bottom-0" />
        </div>
      </div>

      <div>
        <div className="py-20 w-50 mx-auto">
          <h1 className="py-2 bg-orange-500 mx-auto text-center text-2xl tracking-widest text-white italic">
            SEASON 11
          </h1>
        </div>

        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-5 px-20">
            {status === "loading" && <p>Loading gallery...</p>}
            {status === "failed" && <p className="text-red-600">{error}</p>}
            {status === "succeeded" &&
              tvList.map((item, index) => (
                <div
                  key={index}
                  className="border p-4 rounded shadow text-center"
                >
                  <iframe
                    width="560"
                    height="315"
                    src={`https://www.youtube.com/embed/${item.url}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    className="w-full"
                    allowFullScreen
                  ></iframe>
                  <h2 className="mt-2 text-lg font-bold">{item.name}</h2>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PuneriTv;
