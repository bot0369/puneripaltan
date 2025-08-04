import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGalleryDetails } from "../store/action/galleryDetails";
import { getGalleryList } from "../store/action/galleryList-action";
import { useParams, Link } from "react-router-dom";
import img from "../../assets/images/GalleryImages/puneri-gallery-desk-banner-s11.png";
import bgimg from "../../assets/images/GalleryImages/gallery-bann.jpeg";
import bgimg2 from "../../assets/images/GalleryImages/banner-title.png";
import { MdArrowLeft, MdArrowRight, MdClose } from "react-icons/md";
import Footer from "../../global/Footer";

const GalleryDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { galleryDetails, status, error } = useSelector(
    (state) => state.galleryDetails || {}
  );
  const { galleryList } = useSelector((state) => state.galleryList || {});

  const [prevMatch, setPrevMatch] = useState(null);
  const [nextMatch, setNextMatch] = useState(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    dispatch(getGalleryDetails(id));
    dispatch(getGalleryList());
  }, [dispatch, id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    if (galleryList?.length > 0 && galleryDetails?.id) {
      const sortedList = [...galleryList].sort(
        (a, b) => parseInt(a.id) - parseInt(b.id)
      );

      const currentIndex = sortedList.findIndex(
        (item) => String(item.id) === String(galleryDetails.id)
      );

      if (currentIndex !== -1) {
        const total = sortedList.length;
        const prevIndex = (currentIndex - 1 + total) % total;
        const nextIndex = (currentIndex + 1) % total;

        setPrevMatch(sortedList[prevIndex]);
        setNextMatch(sortedList[nextIndex]);
      } else {
        setPrevMatch(null);
        setNextMatch(null);
      }
    }
  }, [galleryList, galleryDetails]);

  const openModal = (index) => {
    setIsModalOpen(true);
    setCurrentIndex(index);
  };

  const closeModal = () => setIsModalOpen(false);

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? galleryDetails.match_images.length - 1 : prev - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((prev) =>
      prev === galleryDetails.match_images.length - 1 ? 0 : prev + 1
    );
  };

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
        {status === "loading" && <p className="text-center py-10">Loading...</p>}
        {status === "failed" && <p className="text-red-600 text-center py-10">{error}</p>}

        {status === "succeeded" && galleryDetails && (
          <div>
            <h1 className="text-5xl font-bold py-10 px-7 md:px-20 text-orange-600 text-center">
              {galleryDetails.name}
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 px-5 md:px-30 py-6 mb-20">
              {galleryDetails.match_images?.map((imageUrl, index) => (
                <div
                  key={index}
                  className="overflow-hidden cursor-pointer"
                  onClick={() => openModal(index)}
                >
                  <img
                    src={imageUrl}
                    className="w-full h-60 object-cover"
                    alt={`Gallery Image ${index + 1}`}
                  />
                </div>
              ))}
            </div>

            <div className="md:flex justify-between items-center text-2xl font-semibold relative">
              {prevMatch && (
                <Link
                  to={`/getGalleryDetails/${prevMatch.id}`}
                  className="relative bg-cover mb-10 md:mb-0 md:w-1/2 h-80 bg-center text-white flex justify-center items-center overflow-hidden"
                  style={{
                    backgroundImage: `url(${galleryDetails.main_image})`,
                  }}
                >
                  <div className="absolute inset-0 bg-black/60 z-0" />

                  <h1 className="z-10">{prevMatch.name}</h1>
                </Link>
              )}

              {nextMatch && (
                <Link
                  to={`/getGalleryDetails/${nextMatch.id}`}
                  className="relative bg-cover mb-10 md:mb-0 md:w-1/2 h-80 bg-center text-white flex justify-center items-center overflow-hidden"
                  style={{
                    backgroundImage: `url(${galleryDetails.main_image})`,
                  }}
                >
                  <div className="absolute inset-0 bg-black/60 z-0" />
                  <h1 className="z-10">{nextMatch.name} </h1>
                </Link>
              )}
            </div>


          </div>
        )}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <button
            className="absolute top-5 right-5 text-white text-3xl"
            onClick={closeModal}
          >
            <MdClose />
          </button>

          <button
            className="absolute left-4 text-white text-4xl"
            onClick={prevImage}
          >
            <MdArrowLeft />
          </button>

          <div className="max-w-4xl mx-auto p-4">
            <img
              src={galleryDetails.match_images?.[currentIndex]}
              alt={`Selected image ${currentIndex + 1}`}
              className="max-h-[80vh] object-contain"
            />
          </div>

          <button
            className="absolute right-4 text-white text-4xl"
            onClick={nextImage}
          >
            <MdArrowRight />
          </button>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default GalleryDetails;
