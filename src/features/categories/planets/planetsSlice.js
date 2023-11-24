import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const PlanetsAPi = createApi({
  reducerPath: "PlanetsAPi",
  tagTypes: ["PLANETSAPI"],
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL,
    headers: {
      accept: "application/json",
    },
  }),
  endpoints: (builder) => ({
    getAllPlanets: builder.query({
      query: () => ({
        url: `planets`,
        method: "Get",
      }),

      providesTags: ["PLANETSAPI"],
    }),
    getPlanetById: builder.query({
      query: (id) => ({
        url: `planets/${id}`,
        method: "Get",
      }),

      providesTags: ["PLANETSAPI"],
    }),
  }),
});

export const { useGetAllPlanetsQuery, useGetPlanetByIdQuery } = PlanetsAPi;
