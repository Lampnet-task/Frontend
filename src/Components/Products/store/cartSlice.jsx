import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const { id } = action.payload;
            const existingItem = state.find(item => item.id === id);
            if (existingItem) {
                existingItem.quantity++;
            } else {
                state.push({ ...action.payload, quantity: 1 });
            }
        },
        removeFromCart(state, action) {
            return state.filter(item => item.id !== action.payload);
        },
        incrementQuantity(state, action) {
            const itemId = action.payload;
            const itemToUpdate = state.find(item => item.id === itemId);
            if (itemToUpdate) {
                itemToUpdate.quantity++;
            }
        },
        decrementQuantity(state, action) {
            const itemId = action.payload;
            const itemToUpdate = state.find(item => item.id === itemId);
            if (itemToUpdate && itemToUpdate.quantity > 1) {
                itemToUpdate.quantity--;
            }
        }
    }
});

export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity } = cartSlice.actions;

export default cartSlice.reducer;
