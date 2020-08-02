import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Loader from "./components/loader";
const ProductList = lazy(() =>
  import(/*webpackChunkName:"productlist"*/ "./components/productList")
);

const Checkout = lazy(() =>
  import(/*webpackChunkName:"checkout"*/ "./components/checkout")
);

const Routes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route path="/" exact component={ProductList} />
        <Route path="/checkout" component={Checkout} />
      </Switch>
    </Suspense>
  );
};

export default Routes;
