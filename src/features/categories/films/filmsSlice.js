import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const FilmsAPi = createApi({
  reducerPath: "FilmsAPi",
  tagTypes: ["FILMSAPI"],
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL,
    headers: {
      accept: "application/json",
    },
  }),
  endpoints: (builder) => ({
    getAllFilms: builder.query({
      query: () => ({
        url: `films`,
        method: "Get",
      }),

      providesTags: ["FILMSAPI"],
    }),
    getFilmsById: builder.query({
      query: (id) => ({
        url: `films/${id}`,
        method: "Get",
      }),

      providesTags: ["FILMSAPI"],
    }),
  }),
});

export const { useGetAllFilmsQuery, useGetFilmsByIdQuery } = FilmsAPi;
