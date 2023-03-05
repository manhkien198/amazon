import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { ProductProps } from '../models/index';
interface InitialStateProps {
  items: ProductProps[];
}
const initialState: InitialStateProps = {
  items: [],
};
export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      let newBasket = [...state.items];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.log(
          `Cant remove product (id: ${action.payload.id}) as its not in basket `
        );
      }
      state.items = newBasket;
    },
  },
});
export const { addToBasket, removeFromBasket } = basketSlice.actions;
export const selectItems = (state: RootState) => state.basket.items;
export const selectTotal = (state: RootState) =>
  state.basket.items.reduce((total, item) => total + item.price, 0);
export default basketSlice.reducer;
