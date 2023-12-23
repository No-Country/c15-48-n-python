import { apiSlice } from "../api/apiSlice.js";

const extendedTokenApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createToken: builder.mutation({
      query: (userData) => ({
        url: "/token",
        method: "POST",
        body: userData,
      }),
      providesTagsTags: ["token"],
    }),
    verifyToken: builder.mutation({
      query: (token) => ({
        url: "/token",
        method: "POST",
        body: token,
      }),
    }),
    refreshToken: builder.mutation({
      query: (refresh_token) => ({
        url: "/token",
        method: "POST",
        body: refresh_token,
      }),
      invalidatesTags: ["token"],
    }),
  }),
});

export const {
  useCreateTokenMutation,
  useVerifyTokenMutation,
  useRefreshTokenMutation,
} = extendedTokenApiSlice;
