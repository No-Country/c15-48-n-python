import { apiSlice } from "../api/apiSlice.js";

const extendedUserApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "/users",
    }),
  }),
});

export const { useGetUsersQuery } = extendedUserApiSlice;
