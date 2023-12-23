import { apiSlice } from "../api/apiSlice.js";

const extendedLikesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getLikes: builder.query({
      query: () => "/likes",
    }),
  }),
});

export const { useGetLikesQuery } = extendedLikesApiSlice;
