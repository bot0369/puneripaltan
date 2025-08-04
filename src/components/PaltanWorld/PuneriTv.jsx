import React, { use } from "react";
import img from "../../assets/images/GalleryImages/puneri-tv-desk-banner-s11.png";
import bgimg from "../../assets/images/GalleryImages/gallery-bann.jpeg";
import bgimg2 from "../../assets/images/GalleryImages/banner-title.png";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTvList } from "../store/action/tvList-action";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { useState } from "react";

const PuneriTv = () => {
  const dispatch = useDispatch();

  const {
    tvList = [],
    status,
    error,
  } = useSelector((state) => state.tvList || {});

  const [open, setOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [season, setSeason] = useState('11');
  const [activeId, setActiveId] = useState(7);

  const handleOpen = (videoUrl) => {
    setSelectedVideo(videoUrl);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedVideo(null);
  };

  const handleTab = (season) => {
    const cat_id = season === "11" ? 7 : 6;
    setSeason(season);
    setActiveId(cat_id);
  }

  useEffect(() => {
    dispatch(getTvList(activeId));
  }, [dispatch, activeId]);

  return (
    <div>
      <div
        className="relative flex flex-row overflow-hidden"
        style={{
          backgroundImage: `url(${bgimg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className="px-15 py-50 md:px-20 md:py-30 md:ml-40 md:my-30 text-white"
          style={{
            backgroundImage: `url(${bgimg2})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <h1 className="text-4xl mb-20 md:mb-0 md:text-8xl font-bold text-center tracking-[15px]">
            PUNERI TV
          </h1>
        </div>
        <div className="text-white w-full">
          <img src={img} alt="" className="absolute right-0 bottom-0 sm:w-80 md:w-[40rem] lg:w-[40rem] xl:w-[40rem]" />
        </div>
      </div>

      <div>
        <div className="py-20 w-fit mx-auto flex flex-cols">
          <button
            className={`py-2 px-5 mx-auto text-center text-2xl tracking-widest text-white italic ${season === "11" ? "bg-orange-500 text-white" : "bg-stone-400"
              }`}
            style={{
              clipPath: "polygon(6% 0, 100% 0, 94% 100%, 0% 100%)",
            }}
            onClick={() => handleTab("11")}
          >
            SEASON 11
          </button>
          <button
            className={`py-2 px-5 mx-auto text-center text-2xl tracking-widest text-white italic ${season === "10" ? "bg-orange-500 text-white" : "bg-stone-400"
              }`}
            style={{
              clipPath: "polygon(6% 0, 100% 0, 94% 100%, 0% 100%)",
            }}
            onClick={() => handleTab("10")}
          >
            SEASON 10
          </button>
        </div>

        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-5 px-4 md:px-20 md:pb-20">
            {status === "loading" && <p>Loading gallery...</p>}
            {status === "failed" && <p className="text-red-600">{error}</p>}
            {status === "succeeded" &&
              tvList.map((item, index) => (
                <div
                  key={index}
                  className="text-center cursor-pointer"
                  onClick={() => handleOpen(item.url)}
                >
                  <img
                    src={`https://img.youtube.com/vi/${item.url}/hqdefault.jpg`}
                    alt={item.name}
                    className="w-full h-fit object-cover"
                  />
                  <div className="flex flex-cols py-1 mb-5">
                    <div
                      className="bg-orange-600 h-15 md:h-full md:w-3/4"
                      style={{
                        clipPath: "polygon( 0 0, 100% 0, 96% 100%, 0% 100%)",
                      }}
                    >
                      <h2 className="text-xl text-white p-1 font-light italic">
                        {item.name}
                      </h2>
                    </div>
                    <div
                      className="w-[25px] bg-orange-600"
                      style={{
                        clipPath: "polygon(70% 0%, 100% 0, 30% 100%, 0% 100%)",
                      }}
                    ></div>
                    <div
                      className="w-[23px] bg-orange-600"
                      style={{
                        clipPath: "polygon(75% 0%, 100% 0, 25% 100%, 0% 100%)",
                      }}
                    ></div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      <Modal open={open} onClose={handleClose}>
        <Box
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black rounded-lg shadow-lg"
          sx={{ width: "80%", maxWidth: 900, height: 500 }}
        >
          {selectedVideo && (
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
        </Box>
      </Modal>
    </div>
  );
};

export default PuneriTv;
