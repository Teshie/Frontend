import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { SidebarData } from './../../Sidebar/SidebarData';
import SubMenu from './../../Sidebar/SubMenu';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
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
  margin-right: 15px;
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

const VendorsDetailHeader = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  const [hide, setHide] = useState(false);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset);
    };
  }, []);

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
        </NavIcon>

        <Header className="text-md space-x-24" to="#">
          <Navs to="/">
            <div className="flex space-x-2">
              {' '}
              <div>
                <ArrowBackIcon />
              </div>{' '}
              <div>Back</div>
            </div>
          </Navs>
        </Header>
      </Nav>

      <NavbarMenu navbar={navbar}>
        <SidebarWrap className="space-y-3 font cursor-pointer">
          <div>
            <DropDownIcon to="/uploadimpact" className="" onClick={showNavbar}>
              Business Impact Analysis{' '}
            </DropDownIcon>
          </div>
          <div>
            <DropDownIcon to="/uploadrisk" className="" onClick={showNavbar}>
              Risk Analysis
            </DropDownIcon>
          </div>
          <div>
            <DropDownIcon to="/uploadcontrol" className="" onClick={showNavbar}>
              Control Analysis
            </DropDownIcon>
          </div>
          <div>
            <DropDownIcon to="/uploadthreat" className="" onClick={showNavbar}>
              Threat Profiling
            </DropDownIcon>
          </div>
        </SidebarWrap>
      </NavbarMenu>

      <SidebarNav sidebar={sidebar}>
        <SidebarWrap>
          <NavIcon to="#"></NavIcon>
          {SidebarData.map((item, index) => {
            return <SubMenu item={item} key={index} foo={showSidebar} />;
          })}
        </SidebarWrap>
      </SidebarNav>

      {/* <ThreatScope /> */}
    </div>
  );
};

export default VendorsDetailHeader;
