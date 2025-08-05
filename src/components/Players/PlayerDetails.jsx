import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPlayerDetails } from "../store/action/playerDetails";
import { useParams } from "react-router-dom";
import bgimg from "../../assets/images/players/fixtures-bg.jpeg";
import Footer from "../../global/Footer";
import ScrollBar2 from "./ScrollBar2";
import playerImages from "./playerImages";

const PlayerDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { playerDetails, status, error } = useSelector(
    (state) => state.playerDetails || {}
  );

  useEffect(() => {
    if (id) {
      dispatch(getPlayerDetails(id));
    }
  }, [dispatch, id]);

  const localImageObj = playerImages.find((img) => img.id === parseInt(id));
  const localImage = localImageObj ? localImageObj.image : null;

  return (
    <div>
      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && <p className="text-red-600">{error}</p>}
      {status === "succeeded" && playerDetails && (
        <div>
          
          <div className="">
            {localImage && (
              <img
                src={localImage}
                alt={playerDetails.name}
                className=""
              />
            )}
          </div>

          <div
            className="py-10 md:px-56 md:py-20 md:flex md:flex-cols"
            style={{
              backgroundImage: `url(${bgimg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            
              <img src={playerDetails.full_image} alt="" className="mx-auto pt-10 md:pt-0 w-60"/>
            
            <div className="">
              <div className="md:flex md:flex-cols gap-30 md:ml-8 px-15 md:px-0">
                <div>
                  <h1
                    className="bg-[#fa4300] text-center text-2xl font-bold text-white mb-5 px-5 md:px-10 py-2"
                    style={{
                      clipPath: "polygon(6% 0, 100% 0, 94% 100%, 0% 100%)",
                    }}
                  >
                    JERSEY NO.
                  </h1>
                  <p className="text-center text-xl font-bold">
                    {playerDetails.jersey_no}
                  </p>
                </div>
                <div>
                  <h1
                    className="bg-[#fa4300] text-center text-2xl font-bold text-white mb-5 px-10 py-2"
                    style={{
                      clipPath: "polygon(6% 0, 100% 0, 94% 100%, 0% 100%)",
                    }}
                  >
                    POSITION
                  </h1>
                  <p className="text-center text-xl font-bold">
                    {playerDetails.position}
                  </p>
                </div>
              </div>

              <div className="mt-20 px-15 md:px-0">
                <div className="w-full h-0.5 bg-stone-300 mb-15 "></div>
                <h1
                  className="bg-[#fa4300] text-center text-2xl font-bold text-white mb-10 w-full md:w-fit px-13 py-2"
                  style={{
                    clipPath: "polygon(6% 0, 100% 0, 94% 100%, 0% 100%)",
                  }}
                >
                  VITALS
                </h1>
              </div>
              <div className="flex flex-cols gap-10 md:gap-60 px-6">
                <div>
                  <div className="flex flex-col text-stone-400 gap-5">
                    <h1>Name</h1>
                    <h1>Date of Birth</h1>
                    <h1>Nationality</h1>
                  </div>
                </div>
                <div>
                  <div className="flex flex-col gap-5">
                    <h1>{playerDetails.name}</h1>
                    <h1>{playerDetails.date_of_birth}</h1>
                    <h1>{playerDetails.nationality}</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h1 className="text-5xl md:text-8xl text-center py-1 md:py-5 text-[#fa4300] font-bold">
              STATISTICS
            </h1>
          </div>

          <div className="md:flex md:flex-cols gap-22 py-10 bg-stone-100 text-center">
            <div
              className="md:w-1/3 bg-[#fa4300] text-white text-3xl italic font-bold my-auto py-5 pr-10 flex justify-center md:justify-end"
              style={{
                clipPath: "polygon(0 0, 100% 0, 97% 100%, 0% 100%)",
              }}
            >
              <h1>OVERALL</h1>
            </div>
            <div>
              <div className="text-center py-3 w-35 mx-auto text-3xl mt-10 mb-3 font-bold bg-white">
                {playerDetails.Matches_played}
              </div>
              <div className="">
                <h1>MATCHES PLAYED</h1>
              </div>
            </div>
            <div>
              <div className="text-center py-3 w-35 mx-auto text-3xl mt-10 mb-3 font-bold bg-white">
                {playerDetails.total_ponints_earned}
              </div>
              <div>
                <h1>TOTAL POINTS EARNED</h1>
              </div>
            </div>
            <div>
              <div className="text-center py-3 w-35 mx-auto text-3xl mt-10 mb-3 font-bold bg-white">
                {playerDetails.most_points_in_a_match}
              </div>
              <div>
                <h1>MOST POINTS IN A MATCH</h1>
              </div>
            </div>
            <div>
              <div className="text-center py-3 w-35 mx-auto text-3xl mt-10 mb-3 font-bold bg-white">
                {playerDetails.not_out_percentage}
              </div>
              <div>
                <h1>NOT OUT PERCENTAGE</h1>
              </div>
            </div>
          </div>

          <div className="md:flex md:flex-cols gap-20 my-20">
            <div
              className="md:w-1/3 bg-[#fa4300] h-full text-white text-3xl italic font-bold py-5 pr-10 flex justify-center md:justify-end"
              style={{
                clipPath: "polygon(0 0, 100% 0, 97% 100%, 0% 100%)",
              }}
            >
              <h1>RAID</h1>
            </div>
            <div className="md:grid md:grid-cols-2 gap-x-20 gap-y-10 ">
              <div className="text-center m-10 md:m-0">
                <div className="text-center py-3 w-35 mx-auto text-3xl mb-3 font-bold bg-stone-100">
                  {playerDetails.no_of_super_raids}
                </div>
                <div>
                  <h1>NO OF SUPER RAIDS</h1>
                </div>
              </div>
              <div className="text-center m-10 md:m-0">
                <div className="text-center py-3 w-35 mx-auto text-3xl mb-3 font-bold bg-stone-100">
                  {playerDetails.super_10s}
                </div>
                <div>
                  <h1>SUPER 10S</h1>
                </div>
              </div>
              <div className="text-center m-10 md:m-0">
                <div className="text-center py-3 w-35 mx-auto text-3xl mb-3 font-bold bg-stone-100">
                  {playerDetails.avg_raid_points}
                </div>
                <div>
                  <h1>AVG. RAID POINTS</h1>
                </div>
              </div>
            </div>
            <div className="mx-auto w-50 h-50 rounded-[50%] border-20 border-orange-500 text-center flex flex-col justify-center items-center">
              <h1>TOTAL RAID</h1>
              <p>0</p>
            </div>
            <div className="text-center">
              <p
                className="mx-auto py-1 w-40 my-15 text-3xl text-center mb-3 font-bold bg-stone-100"
                style={{
                  clipPath: "polygon(6% 0, 100% 0, 94% 100%, 0% 100%)",
                }}
              >
                %
              </p>
              <h1>RAID STRIKE RATE</h1>
            </div>
          </div>

          <div className="md:flex md:flex-cols gap-17 my-20 py-20 bg-stone-100">
            <div
              className="md:w-1/3 bg-[#fa4300] text-white text-3xl italic font-bold h-full py-5 pr-10 flex justify-center md:justify-end"
              style={{
                clipPath: "polygon(0 0, 100% 0, 97% 100%, 0% 100%)",
              }}
            >
              <h1>TACKLES</h1>
            </div>
            <div className="md:grid md:grid-cols-2 gap-15">
              <div className="text-center m-10 md:m-0">
                <div className="py-3 w-35 mx-auto text-3xl  mb-3 font-bold bg-white">
                  {playerDetails.no_of_super_tackles}
                </div>
                <div>
                  <h1>NO. OF SUPER TACKLES</h1>
                </div>
              </div>
              <div className="text-center m-10 md:m-0">
                <div className="py-3 w-35 mx-auto text-3xl  mb-3 font-bold bg-white">
                  {playerDetails.total_tacle_points}
                </div>
                <div>
                  <h1>TOTAL TACKLE POINTS</h1>
                </div>
              </div>
            </div>
            <div className="md:flex md:flex-cols gap-10">
              <div className="mx-auto w-50 h-50 rounded-[50%] border-20 text-center flex flex-col justify-center items-center">
                <h1>TOTAL TACKLE</h1>
                <p>0</p>
              </div>
              <div className="text-center">
                <p
                  className="mx-auto py-1 w-40 my-15 text-3xl text-center mb-3 font-bold bg-white"
                  style={{
                    clipPath: "polygon(6% 0, 100% 0, 94% 100%, 0% 100%)",
                  }}
                >
                  %
                </p>
                <h1>TACKLE STRIKE RATE</h1>
              </div>
            </div>
          </div>

          <div>
            <div className="text-6xl md:text-8xl font-bold text-orange-500 text-center">
              <h1>OTHER PLAYERS</h1>
            </div>
            <div>
              <ScrollBar2 currentPlayerId={parseInt(id)} />
            </div>
          </div>

          <div>
            <Footer />
          </div>
        </div>
      )}
    </div>
  );
};

export default PlayerDetails;
