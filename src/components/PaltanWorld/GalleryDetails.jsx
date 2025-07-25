import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGalleryDetails } from "../store/action/galleryDetails";
import { useParams } from "react-router-dom";
import img from "../../assets/images/GalleryImages/puneri-gallery-desk-banner-s11.png";
import bgimg from "../../assets/images/GalleryImages/gallery-bann.jpeg";
import bgimg2 from "../../assets/images/GalleryImages/banner-title.png";

const GalleryDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { galleryDetails, status, error } = useSelector(
    (state) => state.galleryDetails || {}
  );

  useEffect(() => {
    if (id) {
      dispatch(getGalleryDetails(id));
    }
  }, [dispatch, id]);

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
          className="px-0 py-40 ml-60 my-30 text-white"
          style={{
            backgroundImage: `url(${bgimg2})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <h1 className="text-8xl font-bold tracking-[15px]">GALLERY</h1>
        </div>
        <div className="text-white w-full">
          <img src={img} alt="" className="absolute w-160 bottom-0" />
        </div>
      </div>

      <div>
        {status === "loading" && <p>Loading...</p>}
        {status === "failed" && <p className="text-red-600">{error}</p>}
        {status === "succeeded" && galleryDetails && (
          <div>
            <div>
              <h1 className="text-5xl font-bold py-10 px-20 text-orange-600 text-center ">{galleryDetails.name}</h1>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 px-30 py-6">
              {galleryDetails.match_images?.map((imageUrl, index) => (
                <div key={index} className="overflow-hidden">
                  <img
                    src={imageUrl}
                    className="w-full h-60 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GalleryDetails;
