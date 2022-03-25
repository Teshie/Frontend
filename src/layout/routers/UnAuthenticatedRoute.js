import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const UnAuthenticatedRoute = ({ children, user_status, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => {
        return !user_status.loggedIn ? children : <Redirect to="/signin" />;
      }}
    />
  );
};

const mapStateToProps = ({ user_status }) => {
  return { user_status };
};

export default connect(mapStateToProps)(UnAuthenticatedRoute);
