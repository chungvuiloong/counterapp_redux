import { createSlice as pizza} from '@reduxjs/toolkit';

// this is the original comment
// export const counterSlice = createSlice({
export const counterSlice = pizza({
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