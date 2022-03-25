import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link, Redirect } from 'react-router-dom';

import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const Nav = styled.div`
  background: #062341;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 100;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #ffca00;
  :hover {
    color: #ffca00;
  }
`;
const DropDownIcon = styled(Link)`
  text-decoration: none;
  color: #ce9f2c;
  font-weight: bold;
  a {
    color: #fff;
  }
  a:hover {
    color: #ce9f2c;
  }
`;
const Navs = styled(Link)`
  text-decoration: none;
  a {
    color: #ce9f2c;
  }
  span {
    color: #04365d;
  }
  a:hover {
    color: #ffca00;
  }
  color: #ce9f2c;
  font-weight: bold;
  font-family: Verdana, sans-serif;
`;
const Header = styled.div`
  font-size: 4rem;
  height: 80px;
  display: flex;
  margin-right: 2rem;
  align-items: center;
  color: #ffca00;
  cursor: pointer;
  div {
    font-size: 17px;
    cursor: pointer;
    color: #ce9f2c;
  }
  div:hover {
    color: #ffca00;
  }
`;

export const SidebarNav = styled.div`
  background: #062341;
  width: 300px;
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  position: fixed;
  color: white;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 100;
`;
const NavbarMenu = styled.div`
  background: #062341;
  width: 270px;
  padding: 20px;
  height: 220px;
  display: flex;

  color: #ce9f2c;
  margin-right: 585px;
  margin-top: 60px;
  justify-content: flex-start;
  position: fixed;
  top: 0;
  right: ${({ navbar }) => (navbar ? '0' : '-100%')};
  transition: 0ms;
  z-index: 100;
  :hover {
    color: #ffca00;
  }
  div {
    color: #ce9f2c;
  }
`;
const SidebarWrap = styled.div`
  width: 100%;
  color: #ce9f2c;
`;
const Logo = styled.div`
  width: 150px;
`;
const Name = styled.div`
  border-radius: 50px;
  span {
    color: #04365d;
  }
`;
const AvatarMenu = styled.div`
  background: #062341;
  width: 270px;
  padding: 20px;
  height: 220px;
  display: flex;
  color: #ce9f2c;

  margin-top: 60px;
  justify-content: flex-start;
  position: fixed;
  top: 0;
  right: ${({ navbar }) => (navbar ? '0' : '-100%')};
  transition: 0ms;
  z-index: 100;
  :hover {
    color: #ffca00;
  }
  div {
    color: #ce9f2c;
  }
`;
const SidebarCpe = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  const [hide, setHide] = useState(false);
  const [offset, setOffset] = useState(0);

  const [avatar, setAvatar] = useState(false);
  const showAvatar = () => setAvatar(!avatar);

  const logout = () => {
    localStorage.clear();
    window.location.reload();
  };
  try {
    var tokenn = JSON.parse(localStorage.getItem('cyber-minds'));
    var mytoken = tokenn?.token;
    var username = tokenn.user.username;
    var company_name = tokenn.user.client.name;
  } catch (e) {
    <Redirect to="/signin" />;
  }
  const [navbar, setNavbar] = useState(false);
  const showNavbar = () => setNavbar(!navbar);
  return (
    <div className="z-0 bg-gray-200">
      <Nav>
        <NavIcon to="/">
          <Logo to="/" className="">
            <img
              height="100px"
              src="https://i.ibb.co/F3kB1p7/logo.png"
              alt="cyberminds-logo"
            />
          </Logo>
          <Navs className="font" to="#">
            CyberMinds
          </Navs>
        </NavIcon>

        <Header className="text-md space-x-10" to="#">
          {/* <Navs to="/super_admin_view_files">
            <div className="flex space-x-10">
              {" "}
              
              <div>View Business Impact</div>
            </div>
          </Navs> */}
          <Navs to="#">
            <div className="font" onClick={showNavbar}>
              Manage File
              <ArrowDropDownIcon />
            </div>
          </Navs>
          <Navs to="/manage_clients">
            <div className="font">Manage Clients</div>
          </Navs>
          <Navs to="/manage_sector">
            <div className="font">Manage Industry</div>
          </Navs>
          <Navs to="/super_admin">
            <div className="font">Manage User</div>
          </Navs>
          <Navs to="#" className="">
            <div>|</div>
          </Navs>

          {/* <div >Logout</div> */}
          <Name className="text-center avatar_bg second-color font-semibold w-10">
            {/* {username} */}
            <span onClick={showAvatar}>{username.charAt(0).toUpperCase()}</span>
          </Name>

          {/* <Navs to="/super_admin_view_files_tc_mapping">
            <div className="flex space-x-10">
              {" "}
             
              <div>View Threat Risk-TC Mapping</div>
            </div>
          </Navs> */}
          {/* <Navs to="/super_admin">
            <div className="flex space-x-10">
              
              <div>Manage Users</div>
            </div>
          </Navs> */}
          {/* <Navs to="/super_admin_upload_files">
            <div className="flex space-x-10">
              {" "}
              <div>Upload File</div>
            </div>
          </Navs> */}
        </Header>
      </Nav>

      <NavbarMenu navbar={navbar}>
        <SidebarWrap className="space-y-3 font cursor-pointer">
          <div>
            <DropDownIcon
              to="/business_impact"
              className=""
              onClick={showNavbar}
            >
              Business Impact Analysis{' '}
            </DropDownIcon>
          </div>
          <div>
            <DropDownIcon
              to="/risk_tc_mapping"
              className=""
              onClick={showNavbar}
            >
              Risk TC Mapping
            </DropDownIcon>
          </div>
          <div>
            <DropDownIcon
              to="/manage_atc_mapping"
              className=""
              onClick={showNavbar}
            >
              ATC Mapping
            </DropDownIcon>
          </div>
          <div>
            <DropDownIcon
              to="/threat_catalog"
              className=""
              onClick={showNavbar}
            >
              Threat Catalog
            </DropDownIcon>
          </div>
          <div>
            <DropDownIcon to="/uploadthreat" className="" onClick={showNavbar}>
              Control Catalog
            </DropDownIcon>
          </div>
        </SidebarWrap>
      </NavbarMenu>
      <AvatarMenu navbar={avatar}>
        <SidebarWrap className="space-y-3 font cursor-pointer">
          <div>
            <DropDownIcon to="#" className="" onClick={logout}>
              Logout
            </DropDownIcon>
          </div>
          <div>
            <DropDownIcon
              to="/change_password"
              className=""
              // onClick={showNavbar}
            >
              Reset Password
            </DropDownIcon>
          </div>
        </SidebarWrap>
      </AvatarMenu>
      {/* <ThreatScope /> */}
    </div>
  );
};

export default SidebarCpe;
