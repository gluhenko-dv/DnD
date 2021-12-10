import { combineReducers } from '@reduxjs/toolkit';
import BoardSlice from './Board/BoardSlice';

const rootReducer = combineReducers({
  board: BoardSlice
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
