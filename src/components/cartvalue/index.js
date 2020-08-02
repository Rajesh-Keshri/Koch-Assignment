import React from "react";
const CartValue = ({ cartItems }) => {
  return cartItems.map((item) => {
    return (
      <div className="cartitems" key={item.id}>
        <div className="cartitem">
          <div className="cartproduct">
            {item.brand} <span>X {item.quantity}</span> :
          </div>
          <div className="productvalue">{item.quantity * item.price}</div>
        </div>
      </div>
    );
  });
};

export default CartValue;
