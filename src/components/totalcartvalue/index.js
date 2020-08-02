import React from "react";
import CartValue from "../cartvalue";
import { useSelector } from "react-redux";
const TotalCartValue = () => {
  const cartList = useSelector((state) => state.cartList);
  const { cartData = [] } = cartList;
  const total = cartData.reduce((total, item) => {
    return (total += item.price * item.quantity);
  }, 0);

  return (
    <div className="totalcartvalue">
      <CartValue cartItems={cartData} />
      <div className="amountblk">
        <div>Total</div>
        <div>{total}</div>
      </div>
      <div className="amountblk">
        <div>Discount</div>
        <div>0%</div>
      </div>
      <div className="amountblk">
        <div>Sub total</div>
        <div>{total}</div>
      </div>
    </div>
  );
};

export default TotalCartValue;
