import React from "react";
import HomeCard from "../home/HomeCard";
import "../home/home.css";

const Home: React.FC = () => {
  return (
    <section className="my-10 md:my-5">
      <HomeCard />
      <div className="w-full flex justify-center items-center mx-auto">
        <div className="flex justify-center mt-10 md:w-[77%] w-full h-[280px] rounded-[20px] last-card"></div>
      </div>
    </section>
  );
};

export default Home;
