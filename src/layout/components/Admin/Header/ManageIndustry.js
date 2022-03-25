import React, { useState } from "react";
import http from "../../../../resources/http";

const ManageIndustry = () => {
  const tokenn = JSON.parse(localStorage.getItem("cyber-minds"));
  const mytoken = tokenn.token;
  const [industry, setIndustry] = useState();

  const submit = (e) => {
    http
      .post(
        "http://127.0.0.1:8000/api/threat-catalog-models/industry-sectors/",
        {
          withCredentials: true,
          name: industry,
          headers: {
            Authorization: `Token ${mytoken}`,
          },
        }
      )
      .then(
        (response) => {
          alert("successeded");
        },
        (err) => {
          console.log(err);
        }
      );
  };
  return (
    <div>
      {" "}
      <div className="container-modal flex flex-col space-y-6 justify-center items-center mt-16">
        <label for="inp" class="inp">
          <input
            type="text"
            id="inp"
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
            placeholder="&nbsp;"
          />
          <span class="label">Industry Name</span>
          <span class="focus-bg"></span>
        </label>
        <button
          className="color bg p-2 rounded-md w-72"
          type="button"
          onClick={(e) => submit(e)}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default ManageIndustry;
