import React, { useEffect, useState } from "react";
import http from "../../../../resources/http";
import "./style.css";
const DropDownSelector = () => {
  const [business_process, setBusinessProcess] = useState();
  const [data, setData] = useState([]);
  const baseURL =
    "http://127.0.0.1:8000/api/business_process/get-my-business-process";

  useEffect(() => {
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
  }, []);
  return (
    <div class="search_categories w-96">
      <div class="select">
        <select
          value={business_process}
          onChange={(e) => setBusinessProcess(e.target.value)}
        >
          <option>Select Business Process</option>
          {data?.map((x, y) => (
            <option value={x.name}>{x.name}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default DropDownSelector;
