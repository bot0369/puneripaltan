import React from "react";
import img from "../../assets/images/GalleryImages/puneri-gallery-desk-banner-s11.png";
import bgimg from "../../assets/images/GalleryImages/gallery-bann.jpeg";
import bgimg2 from "../../assets/images/GalleryImages/banner-title.png";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGalleryList } from "../store/action/galleryList-action";
import { Link } from "react-router-dom";

const Gallery = () => {
  const dispatch = useDispatch();

  const {
    galleryList = [],
    status,
    error,
  } = useSelector((state) => state.galleryList || {});

  useEffect(() => {
    dispatch(getGalleryList());
  }, [dispatch]);

  return (
    <div>
      <div
        className="relative md:flex md:flex-row overflow-hidden"
        style={{
          backgroundImage: `url(${bgimg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className="h-150 md:h-full md:py-40 md:ml-60 md:my-30 text-white"
          style={{
            backgroundImage: `url(${bgimg2})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <h1 className="text-5xl px-10 py-30 md:px-0 md:py-0 md:text-8xl font-bold tracking-[5px] md:tracking-[15px]">GALLERY</h1>
        </div>
        <div className="text-white w-full">
          <img src={img} alt="" className="absolute w-120 bottom-25 md:bottom-0 scale-200 md:scale-100" />
        </div>
      </div>

      <div>
        <div className="py-20 w-50 mx-auto">
          <h1 className="py-2 bg-orange-500 mx-auto text-center text-2xl tracking-widest text-white italic">
            SEASON 11
          </h1>
        </div>

        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-5 md:gap-20 px-4 md:px-50 pb-20">
            {status === "loading" && <p>Loading gallery...</p>}
            {status === "failed" && <p className="text-red-600">{error}</p>}
            {status === "succeeded" &&
              galleryList.map((item, index) => (
                <Link to={`/getGalleryDetails/${item.id}`}>
                  <div key={index} className="md:text-center">
                    <img
                      src={item.main_image}
                      alt={item.cat_name}
                      className="w-full h-auto"
                    />

                    <div className="flex flex-cols py-2">
                      <div>
                        <h2
                          className="text-lg font-bold bg-orange-600 py-1 md:py-3 px-5 text-white text-[16px] md:text-xl font-normal italic"
                          style={{
                            clipPath:
                              "polygon( 0 0, 100% 0, 96% 100%, 0% 100%)",
                          }}
                        >
                          {item.name}
                        </h2>
                      </div>
                      <div
                        className="w-[25px] bg-orange-600"
                        style={{
                          clipPath:
                            "polygon(70% 0%, 100% 0, 30% 100%, 0% 100%)",
                        }}
                      ></div>
                      <div
                        className="w-[23px] bg-orange-600"
                        style={{
                          clipPath:
                            "polygon(75% 0%, 100% 0, 25% 100%, 0% 100%)",
                        }}
                      ></div>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
