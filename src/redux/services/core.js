import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const coreApi = createApi({
  reducerPath: "coreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam.p.rapidapi.com",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "67c535d81amsh9ecae47d661c04bp16c463jsn269553417b9b"
      );

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => "/charts/track" }),
  }),
});

export const { useGetTopChartsQuery } = coreApi;
