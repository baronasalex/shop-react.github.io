import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        initialCart: []
    },
    redusers: {
        setItemInCart: (state, action) => {
            state.itemsInCart.push(action.payload)
        },
        deleteItemFromCart: (state, action) => {
            state.itemsInCart = state.itemsInCart.filter(product => product.id !== action.payload)
        }
    }
})

export const {setItemInCart, deleteItemFromCart}  = cartSlice.actions;
export default cartSlice.reducer