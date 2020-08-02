import { PRODUCTLIST } from "./type";
import { MockData } from "./mockData";
const ProductListActionCreater = (filterkeys = {}) => (dispatch) => {
  const data = dataFilter(MockData, filterkeys);
  dispatch({
    type: PRODUCTLIST,
    payload: data,
  });
};

const dataFilter = (data, filterkeys) => {
  const { sortkey, range = [], searchkey } = filterkeys;
  let filteredData = data;
  switch (sortkey) {
    case "htl":
      filteredData = data.sort((a, b) => b.price - a.price);
      break;
    case "lth":
      filteredData = data.sort((a, b) => a.price - b.price);
      break;
    case "asc":
      filteredData = data.sort((a, b) => {
        if (a.brand < b.brand) {
          return -1;
        } else if (a.brand > b.brand) {
          return 1;
        } else {
          return 0;
        }
      });
      break;
    case "desc":
      filteredData = data.sort((a, b) => {
        if (a.brand > b.brand) {
          return -1;
        } else if (a.brand > b.brand) {
          return 1;
        } else {
          return 0;
        }
      });
      break;
    default:
      filteredData = data;
      break;
  }

  filteredData = filteredData.filter((item) => {
    const [min, max] = range;
    return max ? item.price < max && item.price > min : item;
  });

  filteredData = filteredData.filter((item) => {
    return searchkey ? item.brand.startsWith(searchkey) : item;
  });

  return filteredData;
};

export default ProductListActionCreater;
