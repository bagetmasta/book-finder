import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_KEY = 'AIzaSyAQROnMsoeFLwQrFWkan4uJpTI0rO4Vyeo';

export const bookApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://www.googleapis.com/books/v1' }),
  endpoints: (builder) => ({
    fetchBooks: builder.query({
      query: ({ query, category, orderBy, page = 1 }) => {
        const maxResults = 30;
        const startIndex = (page - 1) * maxResults;
        const queryParam = category === 'all' ? query : `subject:${category}+${query}`;
        return `/volumes?q=${queryParam}&orderBy=${orderBy}&maxResults=${maxResults}&startIndex=${startIndex}&key=${API_KEY}`;
      }
    }),
  }),
});

export const { useFetchBooksQuery } = bookApi;
