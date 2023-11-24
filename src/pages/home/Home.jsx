import React from "react";
import { HeroSection, Navbar, ViewCategory } from "../../components";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection
        Heading="Be With Us to Explore The World"
        SubHeading="we are here to help you by exploring the world with us"
      />
      <ViewCategory />
    </div>
  );
};

export default Home;
