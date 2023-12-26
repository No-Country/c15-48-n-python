import { apiSlice } from "../api/apiSlice.js";

const extendedTokenApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createToken: builder.mutation({
      query: (userData) => {
        console.log(userData);
        return { url: "token/", method: "POST", body: userData };
      },
      providesTags: ["token"],
    }),
    verifyToken: builder.mutation({
      query: (token) => {
        console.log(token);
        return {
          url: "/token/verify/",
          method: "POST",
          body: token,
        };
      },
    }),
    refreshToken: builder.mutation({
      query: (refresh_token) => {
        console.log(refresh_token);

        return {
          url: "/token/refresh/",
          method: "POST",
          body: refresh_token,
        };
      },
      invalidatesTags: ["token"],
    }),
  }),
});

export const {
  useCreateTokenMutation,
  useVerifyTokenMutation,
  useRefreshTokenMutation,
} = extendedTokenApiSlice;
