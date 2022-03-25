import React, { useEffect, useState } from 'react';
import http from '../../../../resources/http';

const Vendors = () => {
  const [data, setData] = useState({});
  const baseURL =
    'http://127.0.0.1:8000/api/business_process/business-impact/bussiness-assets-detail';

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
  const DisplayData = data.business_assets?.map((asset) => {
    return (
      <tr>
        <td>{asset.business_assets}</td>
        <td onClick={() => alert(asset.asset_name)}>{asset.asset_name}</td>
      </tr>
    );
  });
  return <div></div>;
};

export default Vendors;
