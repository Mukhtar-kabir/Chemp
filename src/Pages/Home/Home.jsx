import "../Home/Home.scss";
import Navbar from "../../Component/Navbar/Navbar";
import Hero from "../../Component/Hero/Hero";
import Cars from "../../Component/Cars/Cars";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Hero />
      <Cars />
    </div>
  );
};

export default Home;
