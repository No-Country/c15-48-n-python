import { apiSlice } from "../api/apiSlice.js";

const extendedPetApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPets: builder.query({
      query: () => "/pet",
      providesTags: (result, _error, _arg) => [
        "pets",
        ...result.map((pet) => ({ type: "pet", pet: pet.nick })),
      ],
    }),
    getPet: builder.query({
      query: (nick) => ({
        url: `pet/${nick}/`,
      }),
      providesTags: (_result, _error, arg) => [{ type: "pet", pet: arg }],
    }),
    createNewPet: builder.mutation({
      query: (petData) => ({
        url: "/pet/",
        method: "POST",
        body: petData,
      }),
      providesTags: (result, _error, _arg) => [
        { type: "pet", pet: result.nick },
      ],
    }),
    updatePet: builder.mutation({
      query: (petData) => ({
        url: `/pet/${petData.nick}`,
        method: "PUT",
        body: petData,
      }),
      invalidatesTags: (_result, _error, arg) => [
        {
          type: "pet",
          pet: arg.nick,
        },
      ],
    }),
    deletePet: builder.mutation({
      query: (nick) => ({
        url: `pet/${nick}`,
        method: "DELETE",
      }),
      invalidatesTags: (_result, _error, arg) => [
        {
          type: "pet",
          pet: arg.nick,
        },
      ],
    }),
  }),
});

export const {
  useGetPetsQuery,
  useGetPetQuery,
  useCreateNewPetMutation,
  useUpdatePetMutation,
  useDeletePetMutation,
} = extendedPetApiSlice;
