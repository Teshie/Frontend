import React from "react";
import "./styles.css";
const DetailOne = () => {
  return (
    <div>
      <div className="p-3 ">
        <div className="rounded overflow-hidden shadow-sm justify-center items-center">
          <table class="GeneratedTableDetail  text-2xl bg-gray-100">
            <thead></thead>
            <tbody>
              <tr className="font-bold">
                <td>Asset name</td>
                <td>Risk score</td>
              </tr>
              <tr>
                <td>Email Property</td>
                <td>200</td>
              </tr>
              <tr>
                <td>Database server</td>
                <td>200</td>
              </tr>
              <tr>
                <td>Web application</td>
                <td>200</td>
              </tr>
              <tr>
                <td>Access</td>
                <td>200</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DetailOne;
