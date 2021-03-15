import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import { productReducer } from "./productsReducer";

const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
});
export default rootReducer;
