import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { low, medium, high, id } from './../../../../auth/store/actions/index';
import './Modal.css';
import { Link } from 'react-router-dom';
import http from '../../../../resources/http';
const RiskDetails = ({ setModalRiskOpen }) => {
  const [data, setData] = useState([]);
  const processId = useSelector((state) => state.id);
  const value = useSelector((state) => state.assetRisk);
  const dispatch = useDispatch();
  let type = JSON.parse(localStorage.getItem('cyber-minds'));
  let clientID = type.user.client.id;

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
          alert('No Data To Show');
        }
      )
      .catch((err) => {
        return false;
      });
  }, []);

  const DisplayData = data
    ?.filter((risks) => risks?.asset_risk === value)
    .map((risk) => {
      return (
        <tr>
          <td>{risk?.asset_name}</td>
          <td>{risk?.asset_categorization}</td>
        </tr>
      );
    });
  console.log('risks', data);
  return (
    <>
      <div className="z-100 flex justify-center mb-24 bg-white items-center mt-10">
        <div className="text-black">
          <div className="rounded overflow-hidden flex  justify-center items-center">
            <table class="table table-striped ">
              <thead>
                <tr>
                  <th>Asset Name</th>
                  <th>Asset Catagorization</th>
                </tr>
              </thead>
              <tbody>{DisplayData}</tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default RiskDetails;
