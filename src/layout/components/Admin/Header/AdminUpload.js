import React, { useEffect, useState } from 'react';

import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { useDispatch, useSelector } from 'react-redux';
import { id, pid } from '../../../../auth/store/actions/index.js';
import http from '../../../../resources/http.js';

const AdminUpload = () => {
  const baseURL =
    'https://cyberminds-backend.herokuapp.com/api/business_process/get-my-business-process';
  const [file, setFile] = useState(null);
  const [client, setClient] = useState();
  const [showHide, setShowHide] = useState(false);
  const handleModalShowHide = () => setShowHide(!showHide);
  const [company_name, setCompany] = useState();
  const [data, setData] = useState([]);
  const [business_process, setBusinessProcess] = useState();
  let type = JSON.parse(localStorage.getItem('cyber-minds'));
  let clientID = type.user.client.id;
  const [datas, setDatas] = useState([]);
  const processId = useSelector((state) => state.pid);
  const dispatch = useDispatch();
  const [hide, setHide] = useState(false);
  const showHideButton = () => setHide(!hide);

  const fetchData = () => {
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
    http
      .get(
        `https://cyberminds-backend.herokuapp.com/api/business_process/get-business-impact/${processId}`
      )
      .then((response) => {
        setDatas(response.data);
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
  };
  useEffect(() => fetchData(), []);
  console.log(data);
  const handleFile = (e) => {
    let file = e.target.files[0];
    setFile(file);
  };
  const handleUploadFile = (e) => {
    let myfile = file;

    let formData = new FormData();
    formData.append('file', myfile);
    formData.append('business_process', business_process);
    formData.append('businuss impact analysis', 'financial');
    http({
      url: 'https://cyberminds-backend.herokuapp.com/api/business_process/upload-business-impact-excel-by-clientadmin',
      method: 'POST',
      mode: 'cors',
      data: formData,
    }).then(
      (response) => {
        console.log(response);
      },
      (err) => {
        console.log(err);
      }
    );
  };
  const deleteBusinessImpact = (e) => {
    let myfile = file;

    let formData = new FormData();
    formData.append('file', myfile);
    formData.append('business_process', business_process);
    formData.append('businuss impact analysis', 'financial');
    http({
      url: `https://cyberminds-backend.herokuapp.com/api/business_process/get-business-impact/${processId}`,
      method: 'DELETE',
      mode: 'cors',
    }).then(
      (response) => {
        alert('File Deleted Successfully');
      },
      (err) => {
        console.log(err);
      }
    );
  };
  const refresh = () => {
    window.location.reload();
  };
  console.log('process id', processId);
  const DisplayData = datas?.map((asset) => {
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
    <>
      <div className=" flex flex-col space-y-6 justify-center mt-10 items-center">
        <h4>Uplaod Business Impact Analysis File</h4>
        <div class="search_categories w-96">
          <div class="select">
            <select
              value={business_process}
              onChange={(e) => {
                setBusinessProcess(e.target.value);
                dispatch(pid(e.target.value));
              }}
            >
              <option>Select Business Process</option>
              {data?.map((x, y) => (
                <option value={x.id}>{x.name}</option>
              ))}
            </select>
          </div>
        </div>
        {/* <h1>Upload Business Impact Analysis File</h1> */}
        <div className="flex space-x-4">
          <input type="file" name="file" onChange={(e) => handleFile(e)} />
        </div>
        <button
          className="color bg p-2 rounded-md w-72"
          type="button"
          onClick={(e) => {
            fetchData();
            showHideButton();
          }}
        >
          {hide ? 'Show' : 'Hide'}
        </button>
        <button
          className="color bg p-2 rounded-md w-72"
          type="button"
          onClick={(e) => handleUploadFile(e)}
        >
          Clear and Upload new file
        </button>
      </div>
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
              alert('Deleted Successfully');
            }}
          >
            Delete All Data
          </button>
        </div>
        {hide ? (
          <div className="text-black">
            <div className="rounded overflow-hidden flex  justify-center items-center">
              <table class="GeneratedTables">
                <thead></thead>
              </table>
            </div>
          </div>
        ) : (
          <div className="text-black">
            <div className="rounded overflow-hidden flex  justify-center items-center">
              <table class="GeneratedTables">
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
        )}
      </div>
    </>
  );
};

export default AdminUpload;
