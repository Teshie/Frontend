import React, { useState, useEffect } from 'react';
import VendorTacticalDonut from './VendorTacticalDonut';

import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import http from '../../../../resources/http';
import { cpe, products } from '../../../../auth/store/actions';
import VendersDetail from './../../Threat Scope/MoreDetails/VendorsDetail';
import VendorTacticalRadial from './VendorTacticalRadial';
import Dist from './../../Threat Scope/MoreDetails/Dist';

const VendorCritical = () => {
  const [data, setData] = useState([]);
  const [datas, setDatas] = useState([]);
  const [clickedAsset, setClickedAsset] = useState('');
  const [hide, setHide] = useState(false);
  const dispatch = useDispatch();
  const processId = useSelector((state) => state.id);
  let type = JSON.parse(localStorage.getItem('cyber-minds'));
  let clientID = type.user.client.id;
  const [loading, setLoading] = useState(false);
  const selectedVendor = useSelector((state) => state.vendor);
  const cpeValue = useSelector((state) => state.cpe);
  const baseURL =
    'https://cyberminds-backend.herokuapp.com/api/business_process/business-impact/cev-summery/' +
    cpeValue;
  useEffect(() => {
    setLoading(true);
    http
      .get(
        'https://cyberminds-backend.herokuapp.com/api/business_process/get-business-impact-by-superuser/' +
          clientID +
          '/' +
          processId
      )
      .then((response) => {
        setData(response.data);
        setLoading(false);
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
    http
      .get(baseURL)
      .then((response) => {
        setDatas(response.data);
      })
      .then(
        (response) => {},
        (err) => {
          console.log(err);
        }
      );
  }, []);

  //Detail properties to displied for every product
  const critical = datas
    ?.filter((vendors) => vendors?.severity === 'CRITICAL')
    .map((record) => record.severity);
  const high = datas
    ?.filter((vendors) => vendors?.severity === 'HIGH')
    .map((record) => record.severity);
  const medium = datas
    ?.filter((vendors) => vendors?.severity === 'MEDIUM')
    .map((record) => record.severity);
  const low = datas
    ?.filter((vendors) => vendors?.severity === 'LOW')
    .map((record) => record.severity);
  const DisplayData = data
    ?.filter((vendors) => vendors?.vendors === selectedVendor)
    .map((risk) => {
      return (
        <tr>
          <td
            className="product_color link_hover"
            onClick={() => {
              dispatch(cpe(risk.cpe));
              dispatch(products(risk.product));
            }}
          >
            <Link
              className="text-decoration-none white_color"
              to="/vendor_details"
            >
              {risk.product}
            </Link>
          </td>
          {/* <td className="critical_color">{critical.length}</td>
          <td className="high_color">{high.length}</td>
          <td className="medium_color">{medium.length}</td>
          <td className="low_color">{low.length}</td> */}
        </tr>
      );
    });
  console.log(data, 'any cpe?');
  return (
    <>
      <div className="bg-gray-200">
        <div className="p-10 font text-2xl  grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5">
          <div className="rounded z-10 overflow-hidden flex flex-col justify-center items-center shadow-md">
            <div className="flex space-x-4">
              <h3 className="text-4xl font-semibold">Cyber Rating</h3>
              <Dist />
            </div>

            <VendorTacticalDonut />
          </div>
          <div className="rounded z-10 overflow-hidden -space-y-4 flex flex-col justify-center items-center shadow-md">
            <div className="flex space-x-4">
              <h3 className="text-4xl font-semibold">Compliance Rating</h3>
              <Dist />
            </div>
            <VendorTacticalRadial />
          </div>
        </div>
        <div className="p-16 font place-items-center  bg-gray-200 text-2xl font-sans grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-5">
          <div className="  space-y-4 overflow-hidden flex flex-col justify-center items-center  ">
            <div className="flex space-x-4">
              <h3 className="text-4xl font-semibold">
                {selectedVendor} Products
              </h3>
              <Dist />
            </div>
            <div className=" ">
              <table className="text-white border_spacing text-center Generated border-separate border border-slate-900">
                <thead>
                  <tr>
                    <th className="bg">Product Name</th>
                    {/* <th className="critical_color">Critical</th>
                    <th className="high_color">High</th>
                    <th className="medium_color">Medium</th>
                    <th className="low_color">Low</th> */}
                  </tr>
                </thead>
                <tbody>
                  {loading ? (
                    <h2 className="color">Loading....</h2>
                  ) : (
                    DisplayData
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VendorCritical;
