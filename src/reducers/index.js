import { combineReducers } from "redux";
import auction from "./auction";
import auth from "./auth";
import category from "./category";
import products from "./products";
import userproducts from "./userproducts";
import history from "./history";

const rootReducer = combineReducers({
  user: auth,
  categories: category,
  products: products,
  userproducts: userproducts,
  auction: auction,
  history: history,
});
export default rootReducer;
