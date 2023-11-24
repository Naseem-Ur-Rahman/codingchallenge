import React from "react";
import { useGetAllPlanetsQuery } from "../../features/categories/planets/planetsSlice";
import { useNavigate } from "react-router-dom";
export const useGetPlanets = () => {
  const navigate = useNavigate();
  const { data, isSuccess, isLoading } = useGetAllPlanetsQuery(
    {},
    {
      refetchOnMountOrArgChange: true,
    }
  );

  const planetData = React.useMemo(() => {
    if (!isSuccess || isLoading || !data || !data.results) {
      return [];
    }

    return data.results.map((person) => ({
      id: person.url.split("/").slice(-2, -1)[0],
      name: person.name,
      rotation: person.rotation_period,
      orbitalPeriod: person.orbital_period,
      diameter: person.diameter,
      climate: person.climate,
      gravity: person.gravity,
      terrain: person.terrain,
      surfaceWater: person.surface_water,
    }));
  }, [data, isSuccess, isLoading]);
  const handleNavigate = (resident) => {
    if (resident) {
      const parts = resident.split("/");
      const residentId = parts[parts.length - 2];
      navigate(`/people/${residentId}`);
    }
  };
  return {
    Planets: planetData,
    isloading: isLoading,
    issuccess: isSuccess,
    handleNavigate,
  };
};
