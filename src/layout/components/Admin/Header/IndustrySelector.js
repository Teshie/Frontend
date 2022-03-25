import React, { useEffect, useState } from "react";
import http from "../../../../resources/http";
import "./style.css";
const IndustrySelector = () => {
  const [company_name, setCompany] = useState();
  const [data, setData] = useState([]);
  const baseURL = "http://127.0.0.1:8000/api/account/get-clients";

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
          value={company_name}
          onChange={(e) => setCompany(e.target.value)}
        >
          <option>Select Client</option>
          {data?.map((x, y) => (
            <option value={x.id}>{x.name}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default IndustrySelector;
