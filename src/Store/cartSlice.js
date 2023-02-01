import { createSlice } from '@reduxjs/toolkit'

const initialState = [];

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            // we can mutate the state here
            state.push(action.payload)
        },
        removeFromCart: (state, action) => {
            // we can mutate the state here
            console.log(action.payload);
            return state.filter((item) => item.id !== action.payload)
        }
    }

});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;