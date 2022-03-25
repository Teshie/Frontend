import React, { useEffect, useState } from "react";
import http from "../../../../resources/http";
import "./Modal.css";
const ViewTcMapping = () => {
  const [data, setData] = useState([]);
  const baseURL =
    "https://cyberminds-backend.herokuapp.com/api/business_process/risk-tc-mapping-details";

  useEffect(() => {
    http
      .get(baseURL)
      .then((response) => {
        setData(response.data);
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
  }, []);
  console.log(data, "atc mapping");
  const deleteBusinessImpact = (e) => {
    http({
      url: "https://cyberminds-backend.herokuapp.com/api/business_process/delete_tc_mapping",
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
  const DisplayData = data.tc_mapping_details?.map((asset) => {
    return (
      <tr>
        <td>{asset.cost_category}</td>
        <td>{asset.path}</td>
        <td>{asset.threat_category}</td>
        <td>{asset.threats}</td>
        <td>{asset.asset_type}</td>
        <td>{asset.comment}</td>
        <td>{asset.operational}</td>
        <td>{asset.reputational}</td>
        <td>{asset.financial}</td>
        <td>{asset.health_and_safety}</td>
        <td>{asset.environment}</td>
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
          //   onClick={(e) => this.handleUploadFileTcMapping(e)}
        >
          Edit
        </button>
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
          <table class="table">
            <thead>
              <tr>
                <th className="detail text-2xl">Cost Category</th>
                <th className="color text-2xl">Path</th>
                <th className="detail text-2xl">Threat Category (PK)</th>
                <th className="color text-2xl">Threats (ISO)</th>
                <th className="detail text-2xl">Asset Type</th>
                <th className="color text-2xl">Comment</th>
                <th className="detail text-2xl">Operational</th>
                <th className="color text-2xl">Reputational</th>
                <th className="detail text-2xl">Financial</th>
                <th className="color text-2xl">Health and Safety</th>
                <th className="detail text-2xl">Environment</th>
              </tr>
            </thead>
            <tbody>{DisplayData}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ViewTcMapping;
