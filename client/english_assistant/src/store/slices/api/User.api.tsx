import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { User } from '../../types';

export const userApi = createApi({
  reducerPath: 'userApi',
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
    getAllUsers: builder.query<any, void>({
      query: () => '/user'
    }),
    getAllUserWords: builder.query<any, any>({
      query: (id) => `user/finduserwords/${id}`
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
  })
});

export const { useGetAllUsersQuery, useGetAllUserWordsQuery, useCreateUserMutation} = userApi;
