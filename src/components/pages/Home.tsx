import React from "react";
import HomeCard from "../home/HomeCard";
import "../home/home.css";
import Slider from "../home/Swiper";

const Home: React.FC = () => {
  return (
    <section className="my-10 md:my-5">
      <HomeCard />
      <div className="w-full flex justify-center items-center mx-auto">
        <Slider />
      </div>
    </section>
  );
};

export default Home;
