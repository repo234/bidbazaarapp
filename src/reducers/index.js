import { combineReducers } from "redux";
import amontReducer from "./amountReducer";
import auth from "./auth";
import category from "./category";
import products from "./products";

const rootReducer = combineReducers({
  amount: amontReducer,
  user: auth,
  categories: category,
  products: products,
});
export default rootReducer;
