import React from "react";
import { useGetFilmsByIdQuery } from "../../../features/categories/films/filmsSlice";
import { HeroSection, Navbar, SingleFilm } from "../../../components";
import { useParams } from "react-router-dom";

const ViewSingleFilm = () => {
  const { id } = useParams();
  const { data, isLoading, isSuccess } = useGetFilmsByIdQuery(id);
  return (
    <div>
      <Navbar />
      <HeroSection
        Heading="Welcome to a single movie information"
        SubHeading="Here will be your favourite movie complete details"
      />
      <SingleFilm data={data} isloading={isLoading} issuccess={isSuccess} />
    </div>
  );
};

export default ViewSingleFilm;
