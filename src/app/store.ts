import { configureStore, ThunkAction, Action, createSlice } from '@reduxjs/toolkit';

const scoreSlice = createSlice({
  name: 'Score',
  initialState:{
    score: 0,
    selected: false,
  },
  reducers: {
    updateScore: (state, action) => {state.score += action.payload;},
    updateSelected: (state, action) => {state.selected = !state.selected;}
  }
});

export const {updateScore, updateSelected} = scoreSlice.actions;
export const getScore = (state: any) => { return state.score.score; }
export const getSelected = (state: any) => { return state.score.selected; }

export const store = configureStore({
  reducer: {
    score: scoreSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
