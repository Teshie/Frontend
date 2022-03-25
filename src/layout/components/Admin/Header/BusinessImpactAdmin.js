import React, { useEffect, useState } from "react";
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import http from "../../../../resources/http.js";
import { id, pid } from "../../../../auth/store/actions/index.js";
import { useDispatch, useSelector } from "react-redux";

const BusinessImpactAdmin = () => {
  const processId = useSelector((state) => state.pid);
  const clientId = useSelector((state) => state.id);
  const [company_name, setCompany] = useState(clientId);
  const [business_process, setBusinessProcess] = useState();
  const [business, setBusiness] = useState();
  const [data, setData] = useState([]);
  const [hide, setHide] = useState(false);
  const showHideButton = () => setHide(!hide);
  const [datas, setDatas] = useState([]);
  const dispatch = useDispatch();

  console.log("fetch super admin", clientId, processId);
  const baseURL =
    "https://cyberminds-backend.herokuapp.com/api/account/get-clients";
  const baseURLBusinessProcess =
    "https://cyberminds-backend.herokuapp.com/api/business_process/get-business-process-by-id/" +
    company_name;
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
        "https://cyberminds-backend.herokuapp.com/api/business_process/get-business-impact-by-superuser/" +
          clientId +
          "/" +
          processId
      )
      .then((response) => {
        setDatas(response.data);
      })
      .then(
        (response) => {},
        (err) => {
          console.log("No Data To Show");
        }
      )
      .catch((err) => {
        return false;
      });
  };
  useEffect(() => fetchData(), []);
  const deleteBusinessImpact = (e) => {
    let myfile = file;

    let formData = new FormData();
    formData.append("file", myfile);
    formData.append("business_process", business_process);
    formData.append("businuss impact analysis", "financial");
    http({
      url:
        "https://cyberminds-backend.herokuapp.com/api/business_process/delete-business-impact-by-superuser/" +
        clientId +
        "/" +
        processId,
      method: "DELETE",
      mode: "cors",
    }).then(
      (response) => {
        alert("File Deleted Sesscessfully");
      },
      (err) => {
        console.log(err);
      }
    );
  };
  const refresh = () => {
    window.location.reload();
  };
  console.log(clientId, processId);
  useEffect(() => {
    http
      .get(baseURLBusinessProcess)
      .then((response) => {
        setBusinessProcess(response.data);
      })
      .then(
        (response) => {},
        (err) => {
          console.log(err);
        }
      );
  }, [company_name]);
  const [file, setFile] = useState(null);
  const [client, setClient] = useState();
  const [showHide, setShowHide] = useState(true);
  const handleModalShowHide = () => setShowHide(!showHide);

  const handleFile = (e) => {
    let file = e.target.files[0];
    setFile(file);
  };
  const handleUploadFile = (e) => {
    let myfile = file;

    let formData = new FormData();
    formData.append("file", myfile);
    formData.append("client", company_name);
    formData.append("business_process", business);

    http({
      url: "https://cyberminds-backend.herokuapp.com/api/business_process/upload-business-impact-excel-by-superuser",
      method: "POST",
      mode: "cors",
      data: formData,
    }).then(
      (response) => {
        alert("File uploaded Sesscessfully");
      },
      (err) => {
        console.log(err);
      }
    );
  };
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
        <div className="flex">
          <div className="bg-gray-200 h-56 flex flex-col space-y-3 p-1">
            <div class="search_categories w-96">
              <div class="select">
                <select
                  value={company_name}
                  onChange={(e) => {
                    setCompany(e.target.value);
                    dispatch(id(e.target.value));
                  }}
                >
                  <option>Select Client</option>
                  {data?.map((x, y) => (
                    <option value={x.id}>{x.name}</option>
                  ))}
                </select>
              </div>
            </div>
            <div class="search_categories w-96">
              <div class="select">
                <select
                  value={business}
                  onChange={(e) => {
                    setBusiness(e.target.value);
                    dispatch(pid(e.target.value));
                  }}
                >
                  <option>Select Business Process</option>
                  {business_process?.map((x, y) => (
                    <option value={x.id}>{x.name}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex justify-around  mt-4">
              <input
                className=" w-64"
                type="file"
                name="file"
                onChange={(e) => handleFile(e)}
              />
              <button
                className="color bg  rounded-md  w-24"
                type="button"
                onClick={(e) => {
                  showHideButton();
                  fetchData();
                }}
              >
                {hide ? "Hide" : "Show"}
              </button>
            </div>
            <div class="flex flex-col space-y-4">
              <button
                className="color bg p-2 rounded-md mt-6"
                type="button"
                onClick={(e) => handleUploadFile(e)}
              >
                Uplaod File
              </button>
            </div>
          </div>
        </div>

        {/* <h1>Upload Business Impact Analysis File</h1> */}
      </div>

      {hide ? (
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
              <table class="GeneratedTables ">
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
      ) : null}
    </>
  );
};

export default BusinessImpactAdmin;
