import { apiSlice } from "../api/apiSlice.js";

const extendedBlockerApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBlockers: builder.query({
      query: () => "/blocker/",
    }),
  }),
});

export const { useGetBlockersQuery } = extendedBlockerApiSlice;
