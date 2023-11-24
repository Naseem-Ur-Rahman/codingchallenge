import React from "react";
import { useGetAllFilmsQuery } from "../../features/categories/films/filmsSlice";
import { useNavigate } from "react-router-dom";

export const useGetFilms = () => {
  const navigate = useNavigate();
  const { data, isSuccess, isLoading } = useGetAllFilmsQuery(
    {},
    {
      refetchOnMountOrArgChange: true,
    }
  );

  const filmData = React.useMemo(() => {
    if (
      !isSuccess ||
      isLoading ||
      !data ||
      !data.results ||
      !Array.isArray(data.results)
    ) {
      return [];
    }

    return data.results.map((movie) => ({
      id: movie.url.split("/").slice(-2, -1)[0],
      title: movie.title,
      eposide: movie.episode_id,
      director: movie.director,
      producer: movie.producer,
      releaseData: movie.release_date,
    }));
  }, [data, isSuccess, isLoading]);

  const handleNavigate = (index) => {
    navigate(`/people/${index}`);
  };
  return {
    Movies: filmData,
    isloading: isLoading,
    issuccess: isSuccess,
    handleNavigate,
  };
};
