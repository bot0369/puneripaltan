import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPlayers } from "../store/action/player-action";

const Raiders = () => {
  const dispatch = useDispatch();

  const {
    players = [],
    status,
    error,
  } = useSelector((state) => state.player || {});

  useEffect(() => {
    dispatch(getPlayers());
  }, [dispatch]);

  const raiders = players.filter((p)=>p.cat_name === "Raiders");
  const defenders = players.filter((p)=>p.cat_name === "Defenders");
  const allRounders = players.filter((p)=>p.cat_name === "All Rounders");

  const renderPlayers = (list)=>(
    list.map((player)=>(
      <div key={player.id} className="">
            <img
              src={player.profile_image}
              alt={player.name}
              className="w-90 h-90 mx-auto"
            />
            <h2 className="mt-2 text-lg font-bold text-center">
              {player.name}
            </h2>
            <p className="mt-2 text-md  text-center">{player.position}</p>
          </div>
    ))
  )


  {status === "loading" && <p>Loading...</p>}
  {status === "failed" && <p className="text-red-600">{error}</p>}

  return (
    <div>
        <section className="mb-10 ">
          <div className="w-1/3 bg-red-400 my-20" style={{ clipPath: 'polygon(0 0, 100% 0, 95% 100%, 0% 100%)' }}>
            <h1 className="py-6 px-10 text-4xl text-white italic flex justify-end">RAIDERS</h1>
          </div>
          <div className="grid grid-cols-3 ">
            {renderPlayers(raiders)}
          </div>
        </section>

        <section className="mb-10">
           <div className="w-1/3 bg-red-400 my-20" style={{ clipPath: 'polygon(0 0, 100% 0, 95% 100%, 0% 100%)' }}>
            <h1 className="py-6 px-10 text-4xl text-white italic flex justify-end">DEFENDERS</h1>
          </div>
          <div className="grid grid-cols-3">
            {renderPlayers(defenders)}
          </div>
        </section>

        <section className="mb-10">
           <div className="w-1/3 bg-red-400 my-20 " style={{ clipPath: 'polygon(0 0, 100% 0, 95% 100%, 0% 100%)' }}>
            <h1 className="py-6 px-10 text-4xl text-white italic flex justify-end">ALL ROUNDERS</h1>
          </div>
          <div className="grid grid-cols-3">
            {renderPlayers(allRounders)}
          </div>
        </section>
    </div>
  );
};

export default Raiders;
