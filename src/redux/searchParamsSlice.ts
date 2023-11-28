import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  query: "",
  category: "all",
  orderBy: "relevance",
  page: 1,
  newSearch: true
};

export const searchParamsSlice = createSlice({
  name: 'searchParams',
  initialState,
  reducers: {
    setSearchParams: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setSearchParams } = searchParamsSlice.actions;

export default searchParamsSlice.reducer;
