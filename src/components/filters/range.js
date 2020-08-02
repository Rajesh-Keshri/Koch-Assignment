import React from "react";
import { Range } from "rc-slider";
import { filterKeys } from ".";
import ProductListActionCreater from "../../redux/productList/actionCreators";
import { useDispatch } from "react-redux";

const RangeFilter = () => {
  const dispatch = useDispatch();

  const rangeFilter = (e) => {
    filterKeys.range = e;
    dispatch(ProductListActionCreater(filterKeys));
  };

  return (
    <aside>
      <h2>Price Filter</h2>
      <div className="price_range">
        <Range
          min={0}
          max={10000}
          defaultValue={[0, 10000]}
          onAfterChange={(e) => rangeFilter(e)}
        />
      </div>
    </aside>
  );
};

export default RangeFilter;
