import { configureStore } from "@reduxjs/toolkit";
import pizzaReducer from "./pizzaSlice.ts";

const store = configureStore({
  reducer: pizzaReducer,
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
