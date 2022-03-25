import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link, Redirect } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import './style.css';
import BusinessRisk from './../Threat Scope/BusinessRisk/BusinessRisk';
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
  text-decoration: none;
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
  a:hover {
    color: #ffca00;
  }
  span {
    color: #04365d;
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
  margin-right: 50px;
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
  margin-right: 180px;
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
const SidebarWrap = styled.div`
  width: 100%;
  color: #ce9f2c;
`;
const Logo = styled.div`
  width: 250px;
  margin-left: 30px;
`;
const Name = styled.div`
  border-radius: 50px;
`;

const Sidebar = (props) => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

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
  const [hide, setHide] = useState(false);
  const [offset, setOffset] = useState(0);

  const [navbar, setNavbar] = useState(false);
  const showNavbar = () => setNavbar(!navbar);

  const [avatar, setAvatar] = useState(false);
  const showAvatar = () => setAvatar(!avatar);
  return (
    <div className="z-0 bg-gray-200 font">
      <Nav>
        <NavIcon to="#">
          <MenuIcon onClick={showSidebar} />
          <Logo to="/" className="sm:inline-flex hidden">
            <img
              height="100px"
              src="https://i.ibb.co/F3kB1p7/logo.png"
              alt="cyberminds-logo"
            />
          </Logo>

          <Navs className="font" to="#">
            {company_name}
          </Navs>
        </NavIcon>

        <Header className="text-md  space-x-4 " to="#">
          <Navs className="font" to="/">
            <div>Configurations</div>
          </Navs>
          <Navs to="#">
            <div className="font" onClick={showNavbar}>
              Analysis
              <ArrowDropDownIcon />
            </div>
          </Navs>

          <Navs to="/excutivesummary">
            <div>Executive Dashboard</div>
          </Navs>
          <Navs to="#" className="">
            <div>|</div>
          </Navs>
          <Navs to="#">
            {/* <div >Logout</div> */}
            <Name className="text-center avatar_bg second-color font-semibold w-10">
              {/* {username} */}
              <span onClick={showAvatar}>
                {username.charAt(0).toUpperCase()}
              </span>
            </Name>
          </Navs>
        </Header>
      </Nav>

      <NavbarMenu navbar={navbar}>
        <SidebarWrap className="space-y-3 font cursor-pointer">
          <div>
            <DropDownIcon to="/" className="" onClick={showNavbar}>
              Business Impact Analysis
              {hide ? <BusinessRisk financial="test" /> : null}
            </DropDownIcon>
          </div>
          <div>
            <DropDownIcon
              to="/threatprofiling"
              className=""
              onClick={showNavbar}
            >
              Threat Profiling
            </DropDownIcon>
          </div>
          <div>
            <DropDownIcon to="/riskanalysis" className="" onClick={showNavbar}>
              Risk Analysis
            </DropDownIcon>
          </div>
          <div>
            <DropDownIcon
              to="/controlanalysis"
              className=""
              onClick={showNavbar}
            >
              Control Analysis
            </DropDownIcon>
          </div>

          <div>
            <DropDownIcon to="#" onClick={showNavbar}>
              Recommendation
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
            <DropDownIcon to="/change_my_password" className="">
              Reset Password
            </DropDownIcon>
          </div>
        </SidebarWrap>
      </AvatarMenu>

      <SidebarNav sidebar={sidebar}>
        <SidebarWrap>
          <NavIcon to="#"></NavIcon>
          {SidebarData.map((item, index) => {
            return <SubMenu item={item} key={index} foo={showSidebar} />;
          })}
        </SidebarWrap>
      </SidebarNav>
      <div className="px-3">
        <img
          className="object-cover w-full z-10 h-48  mt-4  rounded-md shadow-lg"
          src="https://i.ibb.co/ZTgJT55/thumbnail.jpg"
          alt=""
        />
      </div>
      {/* <ThreatScope /> */}
    </div>
  );
};

export default Sidebar;
