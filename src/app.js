import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Header from "./components/header";
import "./scss/style.scss";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <main>
          <Routes />
        </main>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
