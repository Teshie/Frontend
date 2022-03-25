import React, { useEffect, useState } from 'react';
import http from '../../../../resources/http';
import './Modal.css';
const ViewFileData = () => {
  const [data, setData] = useState({});
  const baseURL =
    'http://127.0.0.1:8000/api/business_process/business-impact/bussiness_asset_risk_details';

  useEffect(() => {
    http
      .get(baseURL)
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
  const DisplayData = data.business_impact_details?.map((asset) => {
    return (
      <tr>
        <td>{asset.hierarchy}</td>
        <td>{asset.business_assets}</td>
        <td>{asset.asset_name}</td>
        <td>{asset.vendors}</td>
        <td>{asset.product}</td>
        <td>{asset.version}</td>
        <td>{asset.cpe}</td>
        <td>{asset.asset_type}</td>
        <td>{asset.asset_categorization}</td>
        <td>{asset._regulations}</td>
        <td>{asset.asset_risk}</td>
      </tr>
    );
  });
  return (
    <div className="z-100">
      <div className="text-black">
        <div className="rounded overflow-hidden flex  justify-center items-center">
          <table class="GeneratedTable">
            <thead>
              <tr>
                <th className="detail text-2xl">Hierarchy</th>
                <th className="color text-2xl">Business assets</th>
                <th className="detail text-2xl">Asset Name</th>
                <th className="color text-2xl">Vendors</th>
                <th className="detail text-2xl">Product</th>
                <th className="color text-2xl">Version</th>
                <th className="detail text-2xl">CPE</th>
                <th className="color text-2xl">Asset Type</th>
                <th className="detail text-2xl">Asset Categorization</th>
                <th className="color text-2xl">Regulations</th>
                <th className="detail text-2xl">Asset Risk</th>
              </tr>
            </thead>
            <tbody>{DisplayData}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ViewFileData;
