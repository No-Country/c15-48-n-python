import { apiSlice } from "./apiSlice.js";

const extendedCommentsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getComments: builder.query({
      query: () => "/comments/",
    }),
  }),
});

export const { useGetCommentsQuery } = extendedCommentsApiSlice;
