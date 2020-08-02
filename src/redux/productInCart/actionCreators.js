import { CARTPRODUCT, CHANGEQUANTITY } from "./type";
const CartActionCreater = (addedItem) => (dispatch) => {
  if (!addedItem.quantity) addedItem.quantity = 1;
  dispatch({
    type: CARTPRODUCT,
    payload: addedItem,
  });
};

export const ChangeQuantityActionCreater = (quantity) => (dispatch) => {
  dispatch({
    type: CHANGEQUANTITY,
    payload: quantity,
  });
};

export default CartActionCreater;
