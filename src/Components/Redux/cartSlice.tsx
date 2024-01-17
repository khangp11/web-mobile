import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Food } from '../Type';

export interface CartState {
    items: Food[];
}

const initialState: CartState = {
    items: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setCart: (state, action: PayloadAction<CartState>) => {
            return action.payload;
        },
        addToCart: (state, action: PayloadAction<Food>) => {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity = (existingItem.quantity || 1) + 1;
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }
        },
        removeFromCart: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter(item => item.id !== action.payload);
            localStorage.setItem('user', JSON.stringify(state));
        },
        decrementQuantity: (state, action: PayloadAction<number>) => {
            const existingItem = state.items.find(item => item.id === action.payload);

            if (existingItem && existingItem.quantity && existingItem.quantity > 1) {
                existingItem.quantity -= 1;
            } else {
                state.items = state.items.filter(item => item.id !== action.payload);
            }
            localStorage.setItem('user', JSON.stringify(state));
        },
        incrementQuantity: (state, action: PayloadAction<number>) => {
            const existingItem = state.items.find(item => item.id === action.payload);

            if (existingItem) {
                existingItem.quantity += 1;
            }
            localStorage.setItem('user', JSON.stringify(state));
        },
    },
});

export const { setCart, addToCart, removeFromCart, decrementQuantity, incrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;
