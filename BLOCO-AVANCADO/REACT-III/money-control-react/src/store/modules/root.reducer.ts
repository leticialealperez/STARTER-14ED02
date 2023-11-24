import { combineReducers } from "@reduxjs/toolkit";
import counterSlice from "./counter/counter.slice";
import carteiraSlice from "./carteira/carteira.slice";

const rootReducer = combineReducers({
  counter: counterSlice,
  carteira: carteiraSlice,
});

export default rootReducer;
