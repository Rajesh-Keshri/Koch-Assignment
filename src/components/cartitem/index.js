import React from "react";
import { faPlusCircle, faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector, useDispatch } from "react-redux";
import { ChangeQuantityActionCreater } from "../../redux/productInCart/actionCreators";
const CartItem = () => {
  const cartList = useSelector((state) => state.cartList);
  const dispatch = useDispatch();
  const { cartData = [] } = cartList;

  const increaseQuantity = (cartItem) => {
    cartItem.quantity += 1;
    dispatch(ChangeQuantityActionCreater(cartItem.quantity));
  };

  const descreaseQuantity = (cartItem) => {
    if (cartItem.quantity > 0) {
      cartItem.quantity -= 1;
    }
    dispatch(ChangeQuantityActionCreater(cartItem.quantity));
  };

  return cartData.map((cartItem) => {
    return (
      <div className="selectedproduct" key={cartItem.id}>
        <div className="product">{cartItem.brand}</div>
        <div className="quantity">
          <span>
            <FontAwesomeIcon
              icon={faMinusCircle}
              onClick={() => descreaseQuantity(cartItem)}
            />
          </span>
          <span>{cartItem.quantity}</span>
          <span>
            <FontAwesomeIcon
              icon={faPlusCircle}
              onClick={() => increaseQuantity(cartItem)}
            />
          </span>
        </div>
      </div>
    );
  });
};

export default CartItem;
