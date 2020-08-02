import { PRODUCTLIST } from "./type";
const initState = {
  loading: true,
  data: [],
};

const ProductListReducer = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case PRODUCTLIST:
      return { ...state, data: payload, loading: false };
    default:
      return state;
  }
};

export default ProductListReducer;
