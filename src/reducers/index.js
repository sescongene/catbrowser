import { combineReducers } from "redux";
import breedsReducer, { selectedBreedReducer } from "./breed";
import catsReducer from "./cat";

const rootReducer = combineReducers({
  breedsReducer,
  catsReducer,
  selectedBreedReducer,
});

export default rootReducer;
