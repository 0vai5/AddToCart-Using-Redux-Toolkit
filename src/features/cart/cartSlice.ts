import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store'; // Assuming this is your Redux store file

export interface CartItem {
  id: number;
  thumbnail: string;
  title: string;
  price: number;
  quantity: number;
}

export interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const { id } = action.payload;
      const existingItem = state.items.find(item => item.id === id);

      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    deleteFromCart: (state, action: PayloadAction<number>) => {
      const idToDelete = action.payload;
      state.items = state.items.filter(item => item.id !== idToDelete);
    },
    increaseQuantity: (state, action: PayloadAction<number>) => {
      const idToIncrease = action.payload;
      const itemToIncrease = state.items.find(item => item.id === idToIncrease);

      if (itemToIncrease) {
        itemToIncrease.quantity++;
      }
    },
    decreaseQuantity: (state, action: PayloadAction<number>) => {
      const idToDecrease = action.payload;
      const itemToDecrease = state.items.find(item => item.id === idToDecrease);

      if (itemToDecrease && itemToDecrease.quantity > 1) {
        itemToDecrease.quantity--;
      } else {
        state.items = state.items.filter(item => item.id !== idToDecrease);
      }
    },
  },
});


export const { addToCart, deleteFromCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;

export default cartSlice.reducer;
