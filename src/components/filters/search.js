import React, { useState } from "react";
import ProductListActionCreater from "../../redux/productList/actionCreators";
import { filterKeys } from ".";
import { useDispatch } from "react-redux";
import _ from "lodash";

const Search = () => {
  const [textValue, setTextValue] = useState("");
  const dispatch = useDispatch();
  const seachFilter = (e) => {
    setTextValue(e.target.value);
    filterKeys.searchkey = e.target.value;
    if (e.target.value.length > 2 || e.target.value.length == 0) {
      dispatch(ProductListActionCreater(filterKeys));
    }
  };

  return (
    <div className="searchbox">
      <input type="text" value={textValue} onChange={(e) => seachFilter(e)} />
    </div>
  );
};

export default Search;
