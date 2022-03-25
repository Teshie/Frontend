import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { SidebarData } from './../../Sidebar/SidebarData';
import SubMenu from './../../Sidebar/SubMenu';
import Redirect from '../../../../Redirect/Redirect';
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
  span {
    color: #04365d;
  }
`;

const HeaderAdmin = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  const [hide, setHide] = useState(false);
  const [offset, setOffset] = useState(0);

  const [avatar, setAvatar] = useState(false);
  const showAvatar = () => setAvatar(!avatar);
  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset);
    };
  }, []);

  const [navbar, setNavbar] = useState(false);
  const showNavbar = () => setNavbar(!navbar);
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
  return (
    <div className="z-0 bg-gray-200">
      <Nav>
        <NavIcon to="#">
          <div className="invisible lg:visible">
            <MenuIcon onClick={showSidebar} />
          </div>
          <Logo to="/" className="">
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

        <Header className="text-md space-x-24" to="#">
          <Navs to="/manage_business_impact">
            <div className="font">Manage Business process</div>
          </Navs>
          <Navs to="#">
            <div className="font" onClick={showNavbar}>
              Manage Files
              <ArrowDropDownIcon />
            </div>
          </Navs>
          <Navs to="#" className="">
            <div>|</div>
          </Navs>
          <Name className="text-center avatar_bg second-color font-semibold w-10">
            {/* {username} */}
            <span onClick={showAvatar}>{username.charAt(0).toUpperCase()}</span>
          </Name>
        </Header>
      </Nav>

      <NavbarMenu navbar={navbar}>
        <SidebarWrap className="space-y-3 font cursor-pointer">
          <div>
            <DropDownIcon to="/adminhome" className="" onClick={showNavbar}>
              Business Impact Analysis{' '}
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

export default HeaderAdmin;
