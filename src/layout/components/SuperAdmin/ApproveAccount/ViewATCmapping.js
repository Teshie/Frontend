import React, { useEffect, useState } from 'react';
import http from '../../../../resources/http';
import './Modal.css';
const ViewATCmapping = () => {
  const [data, setData] = useState([]);
  const baseURL =
    'https://cyberminds-backend.herokuapp.com/api/business_process/bussiness_atc_mapping_details';

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
  console.log(data, 'atc mapping');
  const deleteBusinessImpact = (e) => {
    http({
      url: 'https://cyberminds-backend.herokuapp.com/api/business_process/delete_atc_mapping',
      method: 'DELETE',
      mode: 'cors',
    }).then(
      (response) => {
        alert('File Deleted Sesscessfully');
      },
      (err) => {
        console.log(err);
      }
    );
  };
  const refresh = () => {
    window.location.reload();
  };
  const DisplayData = data.atc_mapping__details?.map((asset) => {
    return (
      <tr>
        <td>{asset.assets}</td>
        <td>{asset.threats}</td>
        <td>{asset.controls}</td>
      </tr>
    );
  });
  return (
    <div className="z-100">
      <div className="mt-36 flex space-x-10 justify-end items-end mr-16 text-lg">
        {/* <IconButton className="border-b">
            <EditIcon style={{ fontSize: 40 }} />
          </IconButton> */}

        <button
          className="color bg p-2 rounded-md"
          type="button"
          onClick={(e) => {
            deleteBusinessImpact(e);
            refresh();
          }}
        >
          Delete All Data
        </button>
      </div>
      <div className="text-black">
        <div className="rounded overflow-hidden flex  justify-center items-center">
          <table class="GeneratedTables">
            <thead>
              <tr>
                <th className="detail text-2xl">Assets</th>
                <th className="color text-2xl">Threats</th>
                <th className="detail text-2xl">Controls</th>
              </tr>
            </thead>
            <tbody>{DisplayData}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ViewATCmapping;
