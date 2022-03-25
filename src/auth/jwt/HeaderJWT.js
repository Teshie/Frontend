import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "./context/AuthContext";

const HeaderJWT = () => {
  let { name } = useContext(AuthContext);
  return (
    <div>
      <Link to="/">Home</Link>
      <span>|</span>
      <Link to="/loginn">Login</Link>
      <p>{name}</p>
    </div>
  );
};

export default HeaderJWT;
