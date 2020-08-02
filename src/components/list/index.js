import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartActionCreater from "../../redux/productInCart/actionCreators";
const List = ({ productList }) => {
  const dispatch = useDispatch();
  const cartList = useSelector((state) => state.cartList);
  const addToCart = (item) => {
    const { cartData } = cartList;
    const dataExist = cartData.filter((cartitem) => cartitem.id == item.id);
    if (dataExist.length == 0) {
      dispatch(CartActionCreater(item));
    }
  };

  return productList.data.map((item) => {
    return (
      <li className="productitem" key={item.id}>
        <div>
          <div className="avator">
            <img src={item.image} />
          </div>
          <div className="productname">{item.brand}</div>
          <div className="productcost">Price - {item.price}</div>
          <div className="addtocart">
            <span onClick={() => addToCart(item)}>Add to Cart</span>
          </div>
        </div>
      </li>
    );
  });
};

export default List;
