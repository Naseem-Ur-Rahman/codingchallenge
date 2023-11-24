import React from "react";
import { HeroSection, Navbar, PeopleData } from "../../../components";
import { useGetPeople } from "../../../customhooks/people/useGetAllPeople";

const People = () => {
  const { People, isloading, issuccess } = useGetPeople();
  return (
    <>
      <Navbar />
      <HeroSection
        Heading="Welcome to the World of People"
        SubHeading="Here you will know everything about your favourite man"
      />
      <PeopleData People={People} isloading={isloading} issuccess={issuccess} />
    </>
  );
};

export default People;
