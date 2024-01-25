import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import TPizza from "../models/pizza";

type TPizzaState = {
  list: TPizza[];
};
const initialState: TPizzaState = {
  list: [],
};
const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    addPizza(state, action: PayloadAction<TPizza>) {
      state.list.push(action.payload);
    },
    updatePizza(state, action: PayloadAction<TPizza>) {
      state.list = state.list.map((pizza) =>
        pizza.id === action.payload.id ? action.payload : pizza
      );
    },
    deletePizza(state, action: PayloadAction<number>) {
      state.list = state.list.filter((pizza) => pizza.id !== action.payload);
    },
  },
});
export default pizzaSlice.reducer;

export const { addPizza, updatePizza, deletePizza } = pizzaSlice.actions;
