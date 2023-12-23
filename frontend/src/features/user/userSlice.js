import { apiSlice } from "../api/apiSlice.js";

// For what should go inside userData check the documentation
const extendedUserApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "/user/",
      providesTags: (result, _error, _arg) => [
        "users",
        ...result.map((user) => ({ type: "user", user: user.username })),
      ],
    }),
    getUser: builder.query({
      query: (username) => ({
        url: `user/${username}/`,
      }),
      providesTags: (_result, _error, arg) => [{ type: "user", user: arg }],
    }),
    createNewUser: builder.mutation({
      query: (userData) => ({
        url: "/user/",
        method: "POST",
        body: userData,
      }),
      providesTags: (result, _error, _arg) => [
        { type: "user", user: result.username },
      ],
    }),
    updateUser: builder.mutation({
      query: (userData) => ({
        url: `/user/${userData.username}`,
        method: "PUT",
        body: userData,
      }),
      invalidatesTags: (_result, _error, arg) => [
        {
          type: "user",
          user: arg.username,
        },
      ],
    }),
    deleteUser: builder.mutation({
      query: (username) => ({
        url: `user/${username}`,
      }),
      invalidatesTags: (_result, _error, arg) => [
        {
          type: "user",
          user: arg.username,
        },
      ],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetUserQuery,
  useCreateNewUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = extendedUserApiSlice;
