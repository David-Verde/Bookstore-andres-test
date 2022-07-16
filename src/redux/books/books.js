import { createSlice } from '@reduxjs/toolkit';
import { getBooks } from '../apiConnection';

const initialState = {
  books: [],
  status: null,
};

const reducer = createSlice({
  name: 'books',
  initialState,
  extraReducers: {
    [getBooks.pending]: (state) => ({
      ...state,
      status: 'loading',
    }),
    [getBooks.fulfilled]: (state, action) => ({
      ...state,
      books: action.payload,
      status: 'success',
    }),
    [getBooks.rejected]: (state) => ({
      ...state,
      status: 'error',
    }),
  },
});

export const { addBook, deleteBook } = reducer.actions;
export default reducer;
