import React from "react";
import { AllFilmsData, HeroSection, Navbar } from "../../../components";
import { useGetFilms } from "../../../customhooks/films/useGetAllFilms";
const AllFilms = () => {
  const { Movies, isloading, issuccess } = useGetFilms();
  return (
    <div>
      <Navbar />
      <HeroSection
        Heading="Welcome to the World of Films"
        SubHeading="Here you will know everything about your favourite movies"
      />
      <AllFilmsData
        Movies={Movies}
        isloading={isloading}
        issuccess={issuccess}
      />
    </div>
  );
};

export default AllFilms;
