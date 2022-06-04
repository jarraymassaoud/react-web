import React from "react";
import Annonce from "../components/Annonce";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <div>
      <Annonce />
      <Navbar />
      <Slider />
      <Categories />
    </div>
  );
};

export default Home;
