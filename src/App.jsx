import { Route, Routes } from "react-router-dom";

import Home from "./components/Home/Home";
import Header from "./global/Header";
import Players from "./components/Players/Players";
import PaltanWorld from "./components/PaltanWorld/PaltanWorld";
import Tickets from "./components/Tickets";
import PuneriTv from "./components/PaltanWorld/PuneriTv";
import Gallery from "./components/PaltanWorld/Gallery";
import PlayerDetails from "./components/Players/PlayerDetails";
import GalleryDetails from "./components/PaltanWorld/GalleryDetails";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/players" element={<Players />} />
        <Route path="/paltanworld" element={<PaltanWorld />} />
        <Route path="/tickets" element={<Tickets />} />
        <Route path="/puneri-tv" element={<PuneriTv />} />
        <Route path="/puneri-gallery" element={<Gallery />} />
        <Route path="/getPlayerDetails/:id" element={<PlayerDetails />} />
        <Route path="/getGalleryDetails/:id" element={<GalleryDetails />} />

        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </>
  );
}

export default App;
