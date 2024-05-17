import { apiService } from "../apiService";

const authEndpoints = apiService.injectEndpoints({
  tagType: ["auth"],
  endpoints: (builder) => ({
    signIn: builder.mutation({
      query: (arg) => ({
        url: "/auth/login",
        method: "POST",
        body: arg,
      }),
      invalidatesTags: ["auth"],
    }),
    signUp: builder.mutation({
      query: (arg) => ({
        url: "/auth/register",
        method: "POST",
        body: arg,
      }),
      invalidatesTags: ["auth"],
    }),
    signOut: builder.mutation({
      query: (token) => ({
        url: "/auth/logout",
        method: "POST",
        headers: { authorization: `Bearer ${token}` },
      }),
      invalidatesTags: ["auth"],
    }),
  }),
});

export const { useSignInMutation, useSignUpMutation, useSignOutMutation } =
  authEndpoints;
