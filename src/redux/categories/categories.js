import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
};

const reducer = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkStatus: (state, action) => ({
      ...state,
      categories: action.payload,
    }),
    extraReducers: (builder) => {
      builder.addDefaultCase((state) => state);
    },
  },
});

export const { checkStatus } = reducer.actions;
export default reducer;
