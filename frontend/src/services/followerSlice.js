import { apiSlice } from "./apiSlice.js";

const extendedFollowerApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getFollowers: builder.query({
      query: () => "/follower/",
    }),
  }),
});

export const { useGetFollowersQuery } = extendedFollowerApiSlice;
