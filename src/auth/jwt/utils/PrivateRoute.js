import { Route, Redirect } from "react-router-dom";

import React from "react";

const PrivateRoute = ({ children, ...rest }) => {
  console.log("Teshuu");
  return <Route {...rest}></Route>;
};

export default PrivateRoute;
