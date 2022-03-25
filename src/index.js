import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import authStore from "./auth/store";

ReactDOM.render(
  <Provider store={authStore}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
