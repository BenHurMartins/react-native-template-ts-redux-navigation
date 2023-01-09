import {createSlice} from '@reduxjs/toolkit';

export type AppState = {
  count: number;
};

const INITIAL_STATE: AppState = {
  count: 0,
};

const recipeReducer = createSlice({
  name: 'recipe',
  initialState: INITIAL_STATE,
  reducers: {
    increment: state => {
      state.count += 1;
    },
    decrement: state => {
      state.count -= 1;
    },
  },
});

export const {increment, decrement} = recipeReducer.actions;

export default recipeReducer.reducer;
