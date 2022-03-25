import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { Spinner, Container } from "react-bootstrap";

import apiClient from "../../resources/apiClient";
import { set_user_status, set_user_data, set_token } from "../store/actions";

const Logout = (props) => {
  useEffect(() => {
    const clearLocalData = () => {
      props.set_token("");
      props.set_user_data({});
      props.set_user_status({
        approved: false,
        loggedIn: false,
        token: null,
      });
      props.history.push("/signin");
    };

    (async () => {
      try {
        await apiClient.auth.logout();
        clearLocalData();
        props.history.push("/signin");
      } catch (err) {
        console.log(err);
        clearLocalData();
      }
    })();
  }, [props]);

  return (
    <div style={{ height: "40vh" }}>
      <Container>
        <h1>Logging out...</h1>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </Container>
    </div>
  );
};

export default withRouter(
  connect(null, { set_token, set_user_status, set_user_data })(Logout)
);
