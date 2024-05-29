import Masthead from "../components/Home/Masthead";
import Statsblock from "../components/Home/Statsblock";
// import Speakers from "../components/Home/Speakers";
// import Schedule from "../components/Home/Schedule";
// import Ticketcards from "../components/Home/Ticketcards";
// import Infosec from "../components/Home/Infosec";
import AboutHome from "../components/Home/AboutHome";
import Gallery from "../components/Gallery/Gallery"; // Import Gallery component


const Home = () => {
  return (
    <>
      <Masthead />
      <Statsblock />
      <AboutHome />
      <Gallery/>
      {/* <Speakers /> */}
      {/* <Schedule /> */}
      {/* <Ticketcards /> */}
      {/* <Infosec /> */}
    </>
  );
};

export default Home;
