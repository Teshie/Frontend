import React, { useEffect, useState } from "react";
import http from "../../../../resources/http";
import "./Modal.css";
const ViewCatalog = () => {
  const [data, setData] = useState([]);
  const baseURL =
    "https://cyberminds-backend.herokuapp.com/api/threat-catalog/catalog-list";

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
  console.log("threat cathalog", data);
  const foo = data?.map((item, index) =>
    item.attack_sequence?.map((catalog, i) => (
      <tr key={i}>
        <td>{catalog.sequence}</td>
        <td>{catalog.threat.name}</td>
        <td>{catalog.action}</td>
        <td>{catalog.consequence}</td>
      </tr>
    ))
  );
  console.log(data, "catalog list");
  const DisplayData = data.map((catalog) => {
    return (
      <tr>
        <td>{catalog.year}</td>
        <td>{catalog.events}</td>
        <td>{catalog.industry_sector}</td>
        <td>{catalog.threat_category}</td>
        <td>{catalog.threat_description}</td>
        <td>{catalog.threat_scenario}</td>
        <td>{catalog.primary_actor}</td>
        <td>{catalog.target}</td>
        <td>{catalog.trigger}</td>
        <td>{catalog.motivation}</td>
        <td>{catalog.assets}</td>
        <td>{catalog.severity}</td>
        <td>{catalog.business_risk}</td>
        <td>{catalog.business_impact}</td>
      </tr>
    );
  });
  const DisplayDataSequence = data?.attack_sequence?.map((sequence) => {
    return (
      <tr>
        <td>{sequence.sequence}</td>
        <td>{sequence.action}</td>
        <td>{sequence.industry_sector}</td>
        <td>{sequence.threat_category}</td>
        <td>{sequence.threat_description}</td>
        <td>{sequence.threat_scenario}</td>
        <td>{sequence.primary_actor}</td>
        <td>{sequence.target}</td>
        <td>{sequence.trigger}</td>
        <td>{sequence.motivation}</td>
        <td>{sequence.assets}</td>
        <td>{sequence.severity}</td>
        <td>{sequence.business_risk}</td>
        <td>{sequence.business_impact}</td>
      </tr>
    );
  });
  const deleteBusinessImpact = (e) => {
    http({
      url: "http://127.0.0.1:8000/api/threat-catalog/catalog_delete",
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
  return (
    <div className="z-100 pb-10">
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
                <th className="detail text-2xl">Year</th>
                <th className="detail text-2xl">Events</th>
                <th className="detail text-2xl">Industry Sector</th>
                <th className="color text-2xl">Threat Category</th>
                <th className="detail text-2xl">Threat Description</th>
                <th className="color text-2xl">Threat Scenario</th>
                <th className="detail text-2xl">Primary Actor</th>
                <th className="color text-2xl">Target</th>
                <th className="detail text-2xl">Triggers</th>
                <th className="color text-2xl">Motivation/Intent</th>
                <th className="detail text-2xl">Assets</th>
                <th className="color text-2xl">Severity</th>
                <th className="detail text-2xl">Business Risks</th>

                <th className="detail text-2xl">Business Impact</th>
              </tr>
            </thead>
            <tbody>{DisplayData}</tbody>
          </table>
          <table class="GeneratedTableee">
            <thead>
              <tr>
                <th className="detail text-2xl">Sequence</th>
                <th className="detail text-2xl">Events</th>
                <th className="detail text-2xl">Action</th>
                <th className="detail text-2xl">Consequence</th>
              </tr>
            </thead>
            <tbody>{foo}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ViewCatalog;
