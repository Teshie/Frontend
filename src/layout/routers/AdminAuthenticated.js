import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const AdminAuthenticated = ({ children, user_status, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => {
        return user_status.loggedIn ? children : <Redirect to="/super_admin" />;
      }}
    />
  );
};

const mapStateToProps = ({ user_status }) => {
  return { user_status };
};

export default connect(mapStateToProps)(AdminAuthenticated);
