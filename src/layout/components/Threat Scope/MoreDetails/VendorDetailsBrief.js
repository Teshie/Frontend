import React, { useState, useEffect } from 'react';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import './ModalVendors.css';
import VendersDetail from './VendorsDetail';
import { Link } from 'react-router-dom';

import { cpeValue, id, vendors } from './../../../../auth/store/actions/index';
import { useSelector, useDispatch } from 'react-redux';
import http from '../../../../resources/http';

const VendorDetailsBrief = ({ setOpenModalVendors }) => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const processId = useSelector((state) => state.id);
  let type = JSON.parse(localStorage.getItem('cyber-minds'));
  let clientID = type.user.client.id;

  useEffect(() => {
    http
      .get(
        'https://cyberminds-backend.herokuapp.com/api/business_process/get-business-impact-by-superuser/' +
          clientID +
          '/' +
          processId
      )
      .then((response) => {
        setData(response.data);
      })
      .then(
        (response) => {},
        (err) => {
          console.log('No Data To Show');
        }
      )
      .catch((err) => {
        return false;
      });
  }, []);

  const DisplayData = data
    ?.filter((vendors) => vendors?.vendors != null)
    .map((risk) => {
      return (
        <tr>
          <td
            className="link_hover pb-2 pt-2 mt-36"
            onClick={() => {
              dispatch(vendors(risk.vendors));
            }}
          >
            <Link
              className="p-10 link_hover text-decoration-none second-color  vendor_list_font_size"
              to="/vendor_critical_details"
            >
              {risk.vendors}
            </Link>
          </td>
        </tr>
      );
    });
  return (
    <div className="z-100  flex justify-center mb-24 bg-white items-left mt-10 -m-2">
      <div className="text-black ">
        <div className="rounded overflow-hidden flex  ">
          <table class=" text-white border_spacing Generated ">
            <tbody className="table_width">{DisplayData}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default VendorDetailsBrief;
