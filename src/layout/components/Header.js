import { Link, withRouter, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { Navbar, Nav, Container } from "react-bootstrap";

import "./header.css";
import logo from "../../assets/logo.png";
import Login from "../../auth/pages/Login";

const Header = (props) => {
  const history = useHistory();
  const auth_links = props.user_status.loggedIn
    ? history.push("/adminhome")
    : history.push("/signin");
  const protected_links = props.user_status.approved ? (
    <Nav className="me-auto">
      <Nav.Link as={Link} to="/client_profile">
        Client profile
      </Nav.Link>
      <Nav.Link as={Link} to="/threat_profile">
        profile Threat
      </Nav.Link>
      <Nav.Link as={Link} to="/admin/threat_profile">
        Admin
      </Nav.Link>
    </Nav>
  ) : (
    <Nav className="me-auto"></Nav>
  );

  return (
    <div>
      {protected_links}
      {auth_links}

      {/* <div>
        token: {props.token}
        <br />
        user: {JSON.stringify(props.user)}
        <br />
        status: {JSON.stringify(props.user_status)}
      </div> */}
    </div>
  );
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(Header);
