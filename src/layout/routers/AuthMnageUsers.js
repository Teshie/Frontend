import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const AuthMnageUsers = ({ children, user_status, ...rest }) => {
  const redirect = () => {
    try {
      let type = JSON.parse(localStorage.getItem("cyber-minds"));
      let userType = type.user.user_type;
      switch (userType) {
        case "ClientUser":
          return [<Redirect to="/" />, children];
        case "ClientAdmin":
          return [<Redirect to="/adminhome" />, children];
        case "CybermindAdmin":
          return [<Redirect to="/manage_sector" />, children];
        default:
          console.log("redirect");
      }
    } catch (err) {
      return [<Redirect to="/signin" />, children];
    }
  };

  return (
    <Route
      {...rest}
      render={() => {
        return user_status.loggedIn ? redirect() : <Redirect to="/signin" />;
      }}
    />
  );
};

const mapStateToProps = ({ user_status }) => {
  return { user_status };
};

export default connect(mapStateToProps)(AuthMnageUsers);
