import React from "react";
import Annonce from "../components/Annonce";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import Products from "../components/Products";

const Home = () => {
  return (
    <div>
      <Annonce />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
    </div>
  );
};

export default Home;
