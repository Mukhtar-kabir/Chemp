import "../Home/Home.scss";
import Navbar from "../../Component/Navbar/Navbar";
import Hero from "../../Component/Hero/Hero";
import Cars from "../../Component/Cars/Cars";
import Search from "../../Component/Search/Search";
import Partners from "../../Component/Partners/Partners";
import Process from "../../Component/Process/Process";
import Services from "../../Component/Services/Services";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Hero />
      <Search />
      <Partners />
      <Process />
      <Services />
      <Cars />
    </div>
  );
};

export default Home;
