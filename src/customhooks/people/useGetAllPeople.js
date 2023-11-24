import React from "react";
import { useGetAllPeopleQuery } from "../../features/categories/people/peopleSlice";
import { useNavigate } from "react-router-dom";

export const useGetPeople = () => {
  const navigate = useNavigate();
  const { data, isSuccess, isLoading } = useGetAllPeopleQuery(
    {},
    {
      refetchOnMountOrArgChange: true,
    }
  );

  const peopleData = React.useMemo(() => {
    if (!isSuccess || isLoading || !data || !data.results) {
      return [];
    }

    return data.results.map((person) => ({
      id: person.url.split("/").slice(-2, -1)[0],
      name: person.name,
      height: person.height,
      mass: person.mass,
      hairColor: person.hair_color,
      skinColor: person.skin_color,
      eyeColor: person.eye_color,
      DOB: person.birth_year,
      gender: person.gender,
    }));
  }, [data, isSuccess, isLoading]);

  const handleNavigate = (index) => {
    navigate(`/singlefilm/${index}`);
  };
  const handleplanetNavigate = (id) => {
    if (id) {
      const parts = id.split("/");
      const planetId = parts[parts.length - 2];
      navigate(`/planet/${planetId}`);
    }
  };

  const handlePeopleNavigate = (id) => {
    navigate(`/people/${id}`);
  };
  return {
    People: peopleData,
    isloading: isLoading,
    issuccess: isSuccess,
    handleNavigate,
    handleplanetNavigate,
    handlePeopleNavigate,
  };
};
