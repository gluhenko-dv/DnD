import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IBoardData, ReduxStatus } from '../../interfaces/interfaces';

type NewsState = ReduxStatus & {
    data: IBoardData[];
};

export const deleteBoardItem = createAsyncThunk('board/dalete', async (index: number) => {
    const newData = localStorage.boardData ? JSON.parse(localStorage.boardData) : [];
    if (newData.length !== 0) {
        newData.splice(index, 1);
        localStorage.boardData = JSON.stringify(newData);
    }
    return newData;
});

export const updateBoardData = createAsyncThunk('board/update', async (newData: IBoardData[]) => {
    localStorage.boardData = JSON.stringify(newData);
    return newData;
});

const initialState: NewsState = {
    status: 'idle',
    error: null,
    data: []
};

const boardSlice = createSlice({
    name: 'board',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(deleteBoardItem.pending, (state) => {
            state.status = 'loading';
        });
        builder.addCase(deleteBoardItem.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.data = [...action.payload];
        });
        builder.addCase(deleteBoardItem.rejected, (state, { error }) => {
            state.status = 'failed';
            state.error = error.message;
        });
        builder.addCase(updateBoardData.pending, (state) => {
            state.status = 'loading';
        });
        builder.addCase(updateBoardData.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.data = [...action.payload];
        });
        builder.addCase(updateBoardData.rejected, (state, { error }) => {
            state.status = 'failed';
            state.error = error.message;
        });
    }
});

export default boardSlice.reducer;
