import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import http from '../../../resources/http';
import ListIcon from '@mui/icons-material/List';
import { useDispatch, useSelector } from 'react-redux';
import BusinessImpactAnalysis from '../Threat Scope/BusinessImpactAnalysis';
import { id, name } from './../../../auth/store/actions/index';
const SidebarLink = styled(Link)`
  display: flex;
  color: white;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;
  font-family: 'Roboto', sans-serif;
  &:hover {
    border-left: 4px solid #ffca00;
    cursor: pointer;
    color: white;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 16px;
`;

const DropdownLink = styled(Link)`
  height: 60px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: white;
  font-size: 18px;
  &:hover {
    border-left: 4px solid #ffca00;
    cursor: pointer;
    color: white;
  }
`;

const SubMenu = ({ item, foo }) => {
  const dispatch = useDispatch();
  const [subnav, setSubnav] = useState(false);
  const [hide, setHide] = useState(false);

  const showSubnav = () => setSubnav(!subnav);
  const [data, setData] = useState([]);
  const [business_process, setBusinessProcess] = useState();

  const baseURL =
    'https://cyberminds-backend.herokuapp.com/api/business_process/get-my-business-process';
  useEffect(() => {
    http
      .get(baseURL)
      .then((response) => {
        setData(response.data);
      })
      .then(
        (response) => {},
        (err) => {
          console.log(err);
        }
      );
  }, []);
  return (
    <>
      <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
        <div>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </SidebarLink>
      {subnav &&
        data?.map((item, index) => {
          return (
            <DropdownLink to="#" key={index}>
              <ListIcon />
              <SidebarLabel
                onClick={() => {
                  dispatch(id(item.id));
                  dispatch(name(item.name));
                  foo();
                  window.location.reload();
                }}
              >
                {item.name}
              </SidebarLabel>
            </DropdownLink>
          );
        })}
    </>
  );
};

export default SubMenu;
