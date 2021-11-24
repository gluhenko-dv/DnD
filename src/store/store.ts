import { configureStore } from '@reduxjs/toolkit';
import { PreloadedState } from 'redux';
import { useMemo } from 'react';
import rootReducer, { RootState } from './rootReducer';

export const initStore = (preloadedState: PreloadedState<RootState> = {}) =>
    configureStore({
        reducer: rootReducer,
        preloadedState,
        devTools: true
    });

export const useStore = (initialState: RootState) => {
    const store = useMemo(() => initStore(initialState), [initialState]);
    return store;
};
