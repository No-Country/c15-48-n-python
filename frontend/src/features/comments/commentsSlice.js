import { apiSlice } from "../api/apiSlice.js";

const extendedCommentsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getComments: builder.query({
      query: () => "/comments",
    }),
  }),
});

export const { useGetCommentsQuery } = extendedCommentsApiSlice;
