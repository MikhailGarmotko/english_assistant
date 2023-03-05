import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { List } from '../../types';

export const translateApi = createApi({
  reducerPath: 'translateApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `https://mashape-community-urban-dictionary.p.rapidapi.com/`,
    // mode:'no-cors',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key','370a8f4eabmshb9c4f5d7ed20ac7p104d42jsn7061f7dd0a18');
      headers.set('X-RapidAPI-Host', 'mashape-community-urban-dictionary.p.rapidapi.com');
      return headers;
    }
  }),
  endpoints: (builder) => ({
    getWord: builder.query<List, string>({
      query: (name) => `define?term=${name}`
    })
  })
});

export const {useGetWordQuery} = translateApi;