import { apiSlice } from "../api/apiSlice.js";

const extendedTokenApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getToken: builder.query({
      // This endpoint doesn't actually exist, it's only temporary
      query: () => "/token",
    }),
  }),
});

export const { useGetTokenQuery } = extendedUserApiSlice;
