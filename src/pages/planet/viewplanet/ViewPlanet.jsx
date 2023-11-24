import React from "react";
import { useParams } from "react-router-dom";
import { HeroSection, Navbar, SinglePlanet } from "../../../components";
import { useGetPlanetByIdQuery } from "../../../features/categories/planets/planetsSlice";

const ViewSinglePlanet = () => {
  const { id } = useParams();
  const { data, isLoading, isSuccess } = useGetPlanetByIdQuery(id);
  return (
    <div>
      <Navbar />
      <HeroSection
        Heading="Welcome to a single planet information"
        SubHeading="Here will be your favourite planet complete details"
      />
      <SinglePlanet data={data} isloading={isLoading} issuccess={isSuccess} />
    </div>
  );
};

export default ViewSinglePlanet;
