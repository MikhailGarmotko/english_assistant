import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { User } from '../../types';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_HOST,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('access_token');
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    }
  }),
  endpoints: (builder) => ({
    setProfile: builder.query<any, void>({
      query: () => '/auth/profile'
    }),
    login: builder.mutation<User, User>({
      query(payload) {
        return {
          url: '/auth/login',
          method: 'POST',
          body: payload
        };
      }
    }),
    loginWithGoogle: builder.mutation<User, User>({
      query(payload) {
        return {
          url: '/auth/google',
          method: 'POST',
          body: payload
        };
      }
    })
  })
});

export const {
  useLoginMutation,
  useLoginWithGoogleMutation,
  useSetProfileQuery
} = authApi;
