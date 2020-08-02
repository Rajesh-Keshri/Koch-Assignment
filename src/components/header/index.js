import React, { useState } from "react";
import { faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Search } from "../filters";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const [visible, setVisible] = useState(false);
  const open = () => {
    visible ? setVisible(false) : setVisible(true);
  };
  const cartList = useSelector((state) => state.cartList);
  const { cartData = [] } = cartList;
  return (
    <header>
      <div className="brand">
        <NavLink to={"/"}>My Shopping Site</NavLink>
      </div>
      <div className="cart_info">
        <div className="search">
          <FontAwesomeIcon icon={faSearch} onClick={open} />
          {visible && <Search />}
        </div>
        <div className="cart">
          <NavLink to={"/checkout"}>
            <FontAwesomeIcon icon={faShoppingCart} />
            {cartData.length > 0 && (
              <span>
                <i>{cartData.length}</i>
              </span>
            )}
          </NavLink>
        </div>
      </div>
    </header>
  );
};
export default Header;
