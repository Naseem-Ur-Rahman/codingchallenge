import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const PeopleAPi = createApi({
  reducerPath: "PeopleAPi",
  tagTypes: ["PEOPLEAPI"],
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL,
    headers: {
      accept: "application/json",
    },
  }),
  endpoints: (builder) => ({
    getAllPeople: builder.query({
      query: () => ({
        url: `people`,
        method: "Get",
      }),

      providesTags: ["PEOPLEAPI"],
    }),
    getPersonById: builder.query({
      query: (id) => ({
        url: `people/${id}`,
        method: "Get",
      }),

      providesTags: ["PEOPLEAPI"],
    }),
  }),
});

export const { useGetAllPeopleQuery, useGetPersonByIdQuery } = PeopleAPi;
