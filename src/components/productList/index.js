import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductListActionCreater from "../../redux/productList/actionCreators";
import { RangeFilter, Sort } from "../filters";
import List from "../list";

const ProductList = () => {
  const productList = useSelector((state) => state.productList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ProductListActionCreater());
  }, []);
  const { data } = productList;
  return (
    <div id="productpage">
      <RangeFilter />
      <div className="main">
        <Sort />
        {data.length > 0 ? (
          <ul className="productlist">
            <List productList={productList} />
          </ul>
        ) : (
          <div className="emptybox">
            <h2 className="emptymsg">Product not Available</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductList;
