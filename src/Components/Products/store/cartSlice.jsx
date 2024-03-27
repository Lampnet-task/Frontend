import { createSlice } from "@reduxjs/toolkit";

// Initial state for the cart
const initialState = [];

// Slice for managing the cart state
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        // Action to add an item to the cart
        addToCart(state, action) {
            const { id } = action.payload;
            const existingItem = state.find(item => item.id === id);
            if (existingItem) {
                existingItem.quantity++;
            } else {
                state.push({ ...action.payload, quantity: 1 });
            }
        },
        // Action to remove an item from the cart
        removeFromCart(state, action) {
            return state.filter(item => item.id !== action.payload);
        },
        // Action to increment the quantity of an item in the cart
        incrementQuantity(state, action) {
            const itemId = action.payload;
            const itemToUpdate = state.find(item => item.id === itemId);
            if (itemToUpdate) {
                itemToUpdate.quantity++;
            }
        },
        // Action to decrement the quantity of an item in the cart
        decrementQuantity(state, action) {
            const itemId = action.payload;
            const itemToUpdate = state.find(item => item.id === itemId);
            if (itemToUpdate && itemToUpdate.quantity > 1) {
                itemToUpdate.quantity--;
            }
        }
    }
});

// Export actions from the cart slice
export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity } = cartSlice.actions;

// Export reducer for the cart slice
export default cartSlice.reducer;
