import React from "react";
import { HeroSection, Navbar, PlanetData } from "../../../components";
import { useGetPlanets } from "../../../customhooks/planets/useGetAllPlanets";

const Planets = () => {
  const { Planets, isloading, issuccess } = useGetPlanets();
  return (
    <>
      <Navbar />
      <HeroSection
        Heading="Welcome to the World of Planets"
        SubHeading="Here you will know everything about your favourite planets"
      />
      <PlanetData
        Planets={Planets}
        isloading={isloading}
        issuccess={issuccess}
      />
    </>
  );
};

export default Planets;
