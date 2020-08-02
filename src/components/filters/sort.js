import React from "react";
import ProductListActionCreater from "../../redux/productList/actionCreators";
import { filterKeys } from ".";
import { useDispatch } from "react-redux";
const Sort = () => {
  const dispatch = useDispatch();

  const listSort = (e) => {
    filterKeys.sortkey = e.target.value;
    dispatch(ProductListActionCreater(filterKeys));
  };
  return (
    <div className="sortbox">
      <div>Sorting</div>
      <div className="sortfield">
        <select onChange={(e) => listSort(e)}>
          <option value="">Sort by</option>
          <option value="asc">Sort by name Asc</option>
          <option value="desc">Sort by name Desc</option>
          <option value="htl">Sort by price high to low</option>
          <option value="lth">Sort by price low to high</option>
        </select>
      </div>
    </div>
  );
};

export default Sort;
