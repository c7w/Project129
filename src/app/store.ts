import { configureStore, ThunkAction, Action, createSlice } from '@reduxjs/toolkit';

const scoreSlice = createSlice({
  name: 'Score',
  initialState:{
    scoreSheet: {
      Class1: 0,
      Class2: 0,
      next: 1
    },
    selected: false,
    contentStatus: 0, // 0 display none, 1 Question, 2 End,
    username: "",
    renderReport: 0,
  },
  reducers: {
    updateScore: (state, action) => {state.scoreSheet = action.payload;},
    updateSelected: (state, action) => {state.selected = !state.selected;},
    updateContentStatus: (state, action) => {state.contentStatus = action.payload; },
    updateUsername: (state, action) => {state.username = action.payload;},
    updateReport: (state, action) => {state.renderReport = action.payload;},
    
  }
});

export const {updateScore, updateSelected, updateContentStatus, updateUsername, updateReport} = scoreSlice.actions;
export const getScore = (state: any) => { return state.score.scoreSheet; }
export const getSelected = (state: any) => { return state.score.selected; }
export const getContentStatus = (state:any) => {return state.score.contentStatus};
export const getUsername = (state:any) => {return state.score.username};
export const getRenderReport = (state:any) => {return state.score.renderReport};

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
