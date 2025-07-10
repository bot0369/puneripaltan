
import { Route, Routes } from "react-router-dom"

import Home from "./components/Home/Home";
import Header from "./global/Header";
import Players from "./components/Players/Players";
import Standings from "./components/Standings";
import Fixtures from "./components/Fixtures";
import PaltanWorld from "./components/PaltanWorld/PaltanWorld";
import Tickets from "./components/Tickets";
import YuvaPaltan from "./components/YuvaPaltan";
import PuneriTv from "./components/PaltanWorld/PuneriTv";
import Gallery from "./components/PaltanWorld/Gallery"

function App() {

  return (
    <>

        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/players" element={<Players />} />
          <Route path="/standings" element={<Standings />} />
          <Route path="/fixtures" element={<Fixtures/>} />
          <Route path="/paltanworld" element={<PaltanWorld/>} />
          <Route path="/tickets" element={<Tickets/>} />
          <Route path="/yuvapaltan" element={<YuvaPaltan/>} />
          <Route path="/puneri-tv" element={<PuneriTv/>} />
          <Route path="/puneri-gallery" element={<Gallery/>} />

          <Route path="*" element={<div>404 Not Found</div>} />

        </Routes>
    </>
  )
}

export default App
