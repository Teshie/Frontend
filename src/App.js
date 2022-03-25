import ExcutiveSummary from "./layout/components/Excutive Summary/ExcutiveSummary";
import CRM from "./layout/components/Excutive Summary/CRM";
import Banking from "./layout/components/Excutive Summary/Banking";
import Credit from "./layout/components/Excutive Summary/Credit";
import Sidebar from "./layout/components/Sidebar/Sidebar";
import BusinessImpactAnalysis from "./layout/components/Threat Scope/BusinessImpactAnalysis";
import WorldMap from "./layout/components/Threat Scope/WorldMap";
import Layout from "./layout/pages/Layout";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import ThreatProfiling from "./layout/components/Threat Scops/ThreatProfiling";
import RiskAnalysis from "./layout/components/Risk Analysis/RiskAnalysis";
import ControlAnalysis from "./layout/components/Control Analysis/ControlAnalysis";
import Critical from "./layout/components/Control Analysis/Critical";
import ControlMain from "./layout/components/Control Analysis/ControlMain";
import Signup from "./auth/pages/Signup";
import Login from "./auth/pages/Login";
import HeaderAdmin from "./layout/components/Admin/Header/HeaderAdmin";
import AdminUpload from "./layout/components/Admin/Header/AdminUpload";
import Header from "./layout/components/Header";
import Logout from "./auth/pages/Logout";
import AssetDetails from "./layout/components/Threat Scope/MoreDetails/AssetDetails";
import VendorsDetail from "./layout/components/Threat Scope/MoreDetails/VendorsDetail";
import VendorDetailsBrief from "./layout/components/Threat Scope/MoreDetails/VendorDetailsBrief";
import RiskDetails from "./layout/components/Threat Scope/MoreDetails/RiskDetails";
import VendorsDetailHeader from "./layout/components/Threat Scope/MoreDetails/VendorsDetailHeader";
import SidebarCpe from "./layout/components/Threat Scope/MoreDetails/SidebarCpe";
import ApproveAccount from "./layout/components/SuperAdmin/ApproveAccount/ApproveAccount";
import UploadFiles from "./layout/components/SuperAdmin/ApproveAccount/UploadFiles";
import ViewFileData from "./layout/components/SuperAdmin/ApproveAccount/ViewFileData";
import ViewTcMapping from "./layout/components/SuperAdmin/ApproveAccount/ViewTcMapping";
import HomePage from "./auth/jwt/HomePage";
import LoginPage from "./auth/jwt/LoginPage";
import HeaderJWT from "./auth/jwt/HeaderJWT";
import PrivateRoute from "./auth/jwt/utils/PrivateRoute";
import RiskTCMappingAdmin from "./layout/components/Admin/Header/RiskTCMappingAdmin";
import BusinessImpactAdmin from "./layout/components/Admin/Header/BusinessImpactAdmin";
import ThreatCatalogAdmin from "./layout/components/Admin/Header/ThreatCatalogAdmin";
import EditModal from "./layout/components/Admin/Header/EditModal";
import ManageBusinessImpact from "./layout/components/Admin/Header/ManageBusinessImpact";
import { AuthProvider } from "./auth/jwt/context/AuthContext";
import { useEffect } from "react";
import ManageIndustry from "./layout/components/Admin/Header/ManageIndustry";
import UnAuthenticatedRoute from "./layout/routers/UnAuthenticatedRoute";
import AuthenticatedRoute from "./layout/routers/AuthenticatedRoute";
import ManageIndustries from "./layout/components/Admin/Header/ManageIndustries";
import Redirect from "./Redirect/Redirect";
import AuthenticatedSuperAdmin from "./layout/routers/AuthenticatedSuperAdmin";
import AuthManageClient from "./layout/routers/AuthManageClient";
import AuthManageSectors from "./layout/routers/AuthManageSectors";
import RiskAnalysisTwo from "./layout/components/Risk Analysis/RiskAnalysisTwo";
import RiskAnalysisThree from "./layout/components/Risk Analysis/RiskAnalysisThree";
import VendorCritical from "./layout/components/Admin/Header/VendorCritical";
import { UploadATCmapping } from "./layout/components/Admin/Header/UploadATCmapping";
import ChangePassword from "./layout/components/Admin/Header/ChangePassword";
import ChangePasswordRoute from "./layout/routers/ClientRoute/ChangePasswordRoute";

function App(props) {
  return (
    <Router>
      {/* <AuthProvider>
        <HeaderJWT />
        <PrivateRoute exact path="/">
          {" "}
          <HomePage />
        </PrivateRoute>
      </AuthProvider> */}
      <AuthenticatedRoute exact path="/">
        <Sidebar className="bg-gray-100" />
        <BusinessImpactAnalysis />
      </AuthenticatedRoute>
      <Switch>
        {/* #Client Pages Start*/}
        {/* #Client Pages Start*/}
        <Route exact path="/excutivesummary">
          <Sidebar className="bg-gray-100" />
          <ExcutiveSummary />
        </Route>
        <AuthenticatedRoute exact path="/billingenquery">
          <Sidebar className="bg-gray-100" />
          <ExcutiveSummary />
        </AuthenticatedRoute>
        <Route exact path="/riskanalysis">
          <Sidebar className="bg-gray-100" />
          <RiskAnalysisTwo />
        </Route>
        <Route exact path="/controlanalysis">
          <Sidebar className="bg-gray-100" />
          <ControlMain />
        </Route>
        <Route exact path="/threatprofiling">
          <Sidebar className="bg-gray-100" />
          <ThreatProfiling />
        </Route>
        {/* <Route exact path="/tactical">
          <Sidebar className="bg-gray-100" />
          <ControlAnalysis />
        </Route> */}
        <Route exact path="/tactical">
          <Sidebar className="bg-gray-100" />
          <Critical />
        </Route>
        <AuthenticatedRoute exact path="/crm">
          <Sidebar className="bg-gray-100" />
          <CRM />
        </AuthenticatedRoute>
        <AuthenticatedRoute exact path="/onlinebanking">
          <Sidebar className="bg-gray-100" />
          <Banking />
        </AuthenticatedRoute>
        <AuthenticatedRoute exact path="/creditmanagement">
          <Sidebar className="bg-gray-100" />
          <Credit />
        </AuthenticatedRoute>
        <AuthenticatedRoute exact path="/redirecting">
          <Redirect />
        </AuthenticatedRoute>
        <Route exact path="/risk_details">
          <RiskDetails />
        </Route>
        <Route exact path="/risk_analysis_two">
          <RiskAnalysisTwo />
        </Route>
        <Route exact path="/risk_analysis_three">
          <RiskAnalysisThree />
        </Route>
        <Route exact path="/vendor_critical_details">
          <VendorsDetailHeader />
          <VendorCritical />
        </Route>

        {/* #Client Pages End*/}
        {/* #Client Pages End*/}

        <Route exact path="/signup">
          <Signup />
        </Route>
        <ChangePasswordRoute exact path="/change_my_password">
          <ChangePassword />
        </ChangePasswordRoute>
        <AuthenticatedRoute exact path="/change_password">
          <ChangePassword />
        </AuthenticatedRoute>
        <UnAuthenticatedRoute exact path="/signin">
          <Login />
        </UnAuthenticatedRoute>

        {/* #Admin Pages Start*/}
        <AuthenticatedRoute exact path="/adminhome">
          <HeaderAdmin />
          <AdminUpload />
        </AuthenticatedRoute>
        <AuthenticatedRoute exact path="/admin">
          <Header />
        </AuthenticatedRoute>
        <Route exact path="/manage_business_impact">
          <HeaderAdmin />
          <ManageBusinessImpact />
        </Route>
        {/* #Admin Pages End*/}

        <Route exact path="/logout">
          <Logout />
        </Route>
        <Route exact path="/asset_details">
          <AssetDetails />
        </Route>
        <Route exact path="/vendor_details">
          <VendorsDetailHeader />
          <VendorsDetail />
        </Route>
        <AuthenticatedRoute exact path="/super_admin">
          <SidebarCpe />
          <ApproveAccount />
        </AuthenticatedRoute>
        <Route exact path="/super_admin_upload_files">
          <SidebarCpe />
          <UploadFiles />
        </Route>
        <AuthManageClient exact path="/manage_clients">
          <SidebarCpe />
          <EditModal />
        </AuthManageClient>
        <AuthenticatedSuperAdmin exact path="/business_impact">
          <SidebarCpe />
          <BusinessImpactAdmin />
        </AuthenticatedSuperAdmin>
        <Route exact path="/super_admin_view_files_tc_mapping">
          <SidebarCpe />
          <UploadFiles />
          <ViewTcMapping />
        </Route>
        <Route exact path="/risk_tc_mapping">
          <SidebarCpe />
          <RiskTCMappingAdmin />
        </Route>
        <Route exact path="/manage_atc_mapping">
          <SidebarCpe />
          <UploadATCmapping />
        </Route>
        <Route exact path="/threat_catalog">
          <SidebarCpe />
          <ThreatCatalogAdmin />
        </Route>
        <AuthManageSectors exact path="/manage_sector">
          <SidebarCpe />
          <ManageIndustries />
        </AuthManageSectors>
      </Switch>
    </Router>
  );
}

export default App;
