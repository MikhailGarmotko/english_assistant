import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Word } from '../../types';

export const wordApi = createApi({
  reducerPath: 'wordApi',
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
    getAllWords: builder.query<void, void>({
      query: () => '/wordlist'
    }),
    createWord: builder.mutation<any, any>({
      query(payload) {
        return {
          url: '/wordlist/create',
          method: 'POST',
          body: payload
        };
      }
    })
  })
});

export const { useGetAllWordsQuery, useCreateWordMutation } = wordApi;