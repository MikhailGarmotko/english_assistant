import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { User } from './types';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `http://localhost:3000`,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('access_token');
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    }
  }),
  endpoints: (builder) => ({
    getAllUsers: builder.query<void, void>({
      query: () => '/user'
    }),
    setProfile: builder.query<any, void>({
      query: () => '/auth/profile'
    }),
    createUser: builder.mutation<User, User>({
      query(payload) {
        return {
          url: '/user/create',
          method: 'POST',
          body: payload
        };
      }
    }),
    login: builder.mutation<User, User>({
      query(payload) {
        return {
          url: '/auth/login',
          method: 'POST',
          body: payload
        };
      }
    })
  })
});

export const { useGetAllUsersQuery, useCreateUserMutation, useLoginMutation, useSetProfileQuery } =
  authApi;
