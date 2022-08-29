import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 100,
    },
    reducers: {
        reset: (state) => { state.value = 0;},
        // increment: (state) => { state.value += 1;},
        // decrement: (state) => { state.value -= 1;},
        incrementByAmount: (state, action) => { state.value += action.payload},
        decrementByAmount: (state, action) => { state.value -= action.payload}
    }
});

export const {reset, increment, decrement, incrementByAmount, decrementByAmount} = counterSlice.actions;
export const selectCount = (state) => state.counter.value;

export default counterSlice.reducer;