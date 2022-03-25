import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "../../auth/pages/Login";
import Logout from "../../auth/pages/Logout";
import Signup from "../../auth/pages/Signup";
import LandingPage from "../../landing/pages/LandingPage";
import ClientProfile from "../../client_profile/pages/ClientProfile";
import ThreatProfile from "../../threat_profile/pages/ThreatProfile";
import UploadThreatProfile from "../../admin/pages/UploadThreatProfile";

import AuthenticatedRoute from "../routers/AuthenticatedRoute";
import UnAuthenticatedRoute from "../routers/UnAuthenticatedRoute";
import UserApprovedRoute from "../routers/UserApprovedRoute";

import Header from "../components/Header";
import Footer from "../components/Footer";

function Layout() {
  return (
    <BrowserRouter>
      <Header />
      <UploadThreatProfile />
      <Switch>
        <Route path="/" exact>
          <LandingPage />
        </Route>
        <UnAuthenticatedRoute path="/login" exact>
          <Login />
        </UnAuthenticatedRoute>
        <UnAuthenticatedRoute path="/signup" exact>
          <Signup />
        </UnAuthenticatedRoute>
        <AuthenticatedRoute path="/logout" exact>
          <Logout />
        </AuthenticatedRoute>
        <UserApprovedRoute path="/client_profile" exact>
          <ClientProfile />
        </UserApprovedRoute>
        <UserApprovedRoute path="/threat_profile" exact>
          <ThreatProfile />
        </UserApprovedRoute>
        <UserApprovedRoute path="/admin/threat_profile" exact>
          <UploadThreatProfile />
        </UserApprovedRoute>
        <Route path="/" render={() => <div>404</div>}></Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default Layout;
