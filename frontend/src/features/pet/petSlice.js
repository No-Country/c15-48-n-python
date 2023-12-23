import { apiSlice } from "../api/apiSlice.js";

const extendedPetApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPets: builder.query({
      query: () => "/pet",
    }),
  }),
});

export const { useGetPetsQuery } = extendedPetApiSlice;
