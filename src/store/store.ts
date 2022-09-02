import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from './counterSlice';

// 请勿直接使用store
export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        // add reducer here
    },
});
