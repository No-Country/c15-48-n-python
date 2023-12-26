import { apiSlice } from "../api/apiSlice.js";

const extendedPostsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => "/posts",
      providesTags: (result, _error, _arg) => [
        ...result.map((post) => ({ type: "post", post: post.id })),
      ],
    }),
    getPost: builder.query({
      query: (id) => ({
        url: `posts/${id}/`,
      }),
      providesTags: (_result, _error, arg) => [{ type: "post", post: arg }],
    }),
    // get posts by specie - (cuando exista)
    createNewPost: builder.mutation({
      query: (postData) => ({
        url: "/posts/",
        method: "POST",
        body: postData,
      }),
      providesTags: (result, _error, _arg) => [
        { type: "post", post: result.id },
      ],
    }),
    deletePost: builder.mutation({
      query: (id) => ({
        url: `posts/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (_result, _error, arg) => [
        {
          type: "post",
          pet: arg.id,
        },
      ],
    }),
  }),
});

export const {
  useGetPostsQuery,
  useGetPostQuery,
  useCreateNewPostMutation,
  useDeletePostMutation,
} = extendedPostsApiSlice;
