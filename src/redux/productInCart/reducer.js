import { CARTPRODUCT, CHANGEQUANTITY } from "./type";
const initState = {
  loading: true,
  cartData: [],
};

const CartReducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CARTPRODUCT:
      return {
        ...state,
        cartData: [...state.cartData, payload],
        loading: false,
      };
    case CHANGEQUANTITY:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default CartReducer;
