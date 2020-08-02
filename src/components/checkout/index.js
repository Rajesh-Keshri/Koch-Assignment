import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductListActionCreater from "../../redux/productList/actionCreators";
import CartItems from "../cartitems";
import TotalCartValue from "../totalcartvalue";

const Checkout = () => {
  const cartList = useSelector((state) => state.cartList);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ProductListActionCreater());
  });

  const { cartData = [] } = cartList;

  return (
    <div id="checkoutpage">
      {cartData.length > 0 ? (
        <>
          <CartItems />
          <TotalCartValue />
        </>
      ) : (
        <div className="emptybox">
          <h2 className="emptymsg">Cart is empty</h2>
        </div>
      )}
    </div>
  );
};

export default Checkout;
