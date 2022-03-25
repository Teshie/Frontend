import React, { useEffect } from "react";

const Redirect = (props) => {
  let type = JSON.parse(localStorage.getItem("cyber-minds"));
  const userType = type.user.user_type;
  useEffect(() => {
    const redirect = () => {
      switch (userType) {
        case "ClientUser":
          return <Redirect to="/" />;
        case "ClientAdmin":
          return <Redirect to="/adminhome" />;
        case "CybermindAdmin":
          return <Redirect to="//super_admin" />;
        default:
          alert("redirect error");
      }
    };
    redirect();
  }, [userType]);
  return <div>jvjhv</div>;
};

export default Redirect;
