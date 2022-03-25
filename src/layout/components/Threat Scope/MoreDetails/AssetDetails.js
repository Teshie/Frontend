import React, { useState, useEffect } from 'react';
import http from '../../../../resources/http';
import './Modal.css';
import { cpeValue, id } from './../../../../auth/store/actions/index';
import { useSelector, useDispatch } from 'react-redux';

const AssetDetails = ({ setOpenModal }) => {
  const [data, setData] = useState([]);
  const processId = useSelector((state) => state.id);
  let type = JSON.parse(localStorage.getItem('cyber-minds'));
  let clientID = type.user.client.id;
  const baseURL =
    'http://127.0.0.1:8000/api/business_process/business-impact/bussiness-assets-detail';

  useEffect(() => {
    http
      .get(
        'http://127.0.0.1:8000/api/business_process/get-business-impact-by-superuser/' +
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
  console.log('Your asset detail here ', data);
  const DisplayData = data?.map((asset) => {
    return (
      <tr>
        <td>{asset.business_assets}</td>
        <td>{asset.asset_name}</td>
      </tr>
    );
  });
  return (
    <div className="z-100 flex justify-center mb-24 bg-white items-center mt-10">
      <div className="text-black">
        <div className="rounded overflow-hidden flex  justify-center items-center">
          <table class="table table-striped ">
            <thead>
              <tr>
                <th className="detail text-2xl">Business Asset</th>
                <th className="color text-2xl">Asset Name</th>
              </tr>
            </thead>
            <tbody>{DisplayData}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AssetDetails;
