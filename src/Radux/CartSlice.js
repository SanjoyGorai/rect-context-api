import { createSlice } from '@reduxjs/toolkit';

const CartSlice = createSlice({
    name: "Cart",
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            state.push(action.payload);
        },
        remove(state, action) {
            return state.filter((item) => item.id !== action.payload)
        }
    }

});

export const { addToCart, remove } = CartSlice.actions
export default CartSlice.reducer;