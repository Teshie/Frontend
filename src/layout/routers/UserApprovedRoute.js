import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const UserApprovedRoute = ({ children, user_status, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => {
        return user_status.loggedIn && user_status.approved ? (
          children
        ) : (
          <Redirect to="/adminhome" />
        );
      }}
    />
  );
};

const mapStateToProps = ({ user_status }) => {
  return { user_status };
};

export default connect(mapStateToProps)(UserApprovedRoute);
