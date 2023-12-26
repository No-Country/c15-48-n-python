import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://maskotapp.pythonanywhere.com/api/",
  }),
  prepareHeaders: (headers, { getState }) => {
    const token = getState().token;

    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }

    return headers;
  },
  endpoints: () => ({}),
});
