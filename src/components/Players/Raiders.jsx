import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPlayers } from "../store/action/player-action";
import { Link } from "react-router-dom";
import Tilt from "react-parallax-tilt";

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

  const raiders = players.filter((p) => p.cat_name === "Raiders");
  const defenders = players.filter((p) => p.cat_name === "Defenders");
  const allRounders = players.filter((p) => p.cat_name === "All Rounders");

  const renderPlayers = (list) =>
    list.map((player) => (
      <Link to={`/getPlayerDetails/${player.id}`} key={player.id}>
        <Tilt
          key={player.id}
          perspective={300}
          glareEnable= {false}
          scale={1.04}
          transitionSpeed={250}
        >
          <div className="mb-10">
            <img
              src={player.profile_image}
              alt={player.name}
              className="w-60 h-65 md:w-72 md:h-75 mx-auto"
            />
            <h2 className="mx-auto text-4xl font-bold text-center">
              {player.name}
            </h2>
            <p className="mt-1 text-xl text-orange-500 text-center">{player.position}</p>
          </div>
        </Tilt>
      </Link>
    ));

  {
    status === "loading" && <p>Loading...</p>;
  }
  {
    status === "failed" && <p className="text-red-600">{error}</p>;
  }

  return (
    <div>
      <section className="mb-10 ">
        <div
          className="md:w-1/3 bg-red-400 my-20"
          style={{ clipPath: "polygon(0 0, 100% 0, 95% 100%, 0% 100%)" }}
        >
          <h1 className="py-4 md:py-6 px-10 text-2xl md:text-4xl text-white italic flex justify-center md:justify-end">
            RAIDERS
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 md:px-40">{renderPlayers(raiders)}</div>
      </section>

      <section className="mb-10">
        <div
          className="md:w-1/3 bg-red-400 my-20"
          style={{ clipPath: "polygon(0 0, 100% 0, 95% 100%, 0% 100%)" }}
        >
          <h1 className="py-4 md:py-6 px-10 text-2xl md:text-4xl text-white italic flex justify-center md:justify-end">
            DEFENDERS
          </h1>
        </div>
        <Link>
          <div className="grid grid-cols-1 md:grid-cols-3 md:px-40 ">{renderPlayers(defenders)}</div>
        </Link>
      </section>

      <section className="mb-10">
        <div
          className="md:w-1/3 bg-red-400 my-20 "
          style={{ clipPath: "polygon(0 0, 100% 0, 95% 100%, 0% 100%)" }}
        >
          <h1 className="py-4 md:py-6 px-10 text-2xl md:text-4xl text-white italic flex justify-center md:justify-end">
            ALL ROUNDERS
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 md:px-40">{renderPlayers(allRounders)}</div>
      </section>
    </div>
  );
};

export default Raiders;
