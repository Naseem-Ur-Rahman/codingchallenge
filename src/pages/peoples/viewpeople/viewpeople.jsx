import React from "react";
import { useParams } from "react-router-dom";
import { useGetPersonByIdQuery } from "../../../features/categories/people/peopleSlice";
import { HeroSection, Navbar, SinglePerson } from "../../../components";

const ViewSinglePerson = () => {
  const { id } = useParams();
  const { data, isLoading, isSuccess } = useGetPersonByIdQuery(id);
  return (
    <div>
      <Navbar />
      <HeroSection
        Heading="Welcome to a single man information"
        SubHeading="Here will be your favourite man complete details"
      />
      <SinglePerson data={data} isloading={isLoading} issuccess={isSuccess} />
    </div>
  );
};

export default ViewSinglePerson;
