import Footer from "../../global/Footer";
import LogoImage from "./LogoImage";
import Scroll from "./Scroll";
import Partners from "./Partners";
import Tickets from "./Tickets";
import PaltanWorld from "./PaltanWorld";
import News from "./News";

const Home = () => {
  return (
    <>
      <div>
        <LogoImage />
        <Scroll />  
        <Tickets />
        <PaltanWorld/>
        <News/>
        <Partners/>
        <Footer /> 
      </div>
    </>
  );
};

export default Home;
