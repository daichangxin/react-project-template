import { createSlice, Dispatch } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
    },
    reducers: {
        incremented: (state, action: { payload: number }) => {
            state.value += action.payload;
        },
        decremented: (state) => {
            state.value -= 1;
        },
    },
});

export const { incremented, decremented } = counterSlice.actions;

export const fetchIncrementCount = (count: number) => {
    return (dispatch: Dispatch) => {
        setTimeout(() => {
            dispatch(incremented(count));
        }, 2000);
    };
};
