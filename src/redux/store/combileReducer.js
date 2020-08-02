import { combineReducers } from "redux";
import ProductListReducer from "../productList/reducer";
import CartReducer from "../productInCart/reducer";

const RootReducer = combineReducers({
  productList: ProductListReducer,
  cartList: CartReducer,
});

export default RootReducer;
