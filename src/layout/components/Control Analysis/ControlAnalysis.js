import React, { useState } from "react";
import PercentAnalysis from "./PercentAnalysis";
import RangeSlider from "react-bootstrap-range-slider";
import DetailOne from "./DetailOne";

import styled from "styled-components";
import { Link } from "react-router-dom";
import TopAttackVector from "./../Threat Scops/TopAttackVector";
import Geo from "../Threat Scope/MoreDetails/Geo";

const Button = styled(Link)`
  text-decoration: none;
  color: "white";
  a {
    color: #fff;
  }
  a:hover {
    color: #00f;
  }
`;

const ControlAnalysis = () => {
  const [value, setValue] = useState(0);
  const [percentValue, setPercentValue] = useState(0);
  return (
    <div class="bg-gray-50 text-3xl ">
      <Button to="/controlanalysis">
        <button className="m-10 detail">View Controls</button>
      </Button>
      <div className="p-10 bg-gray-100 -mt-10 font grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1">
        <div className="rounded overflow-hidden flex justify-center items-center shadow-sm">
          <div className="text-black">
            <div className="rounded overflow-hidden ">
              <table class="GeneratedTablee bg-gray-50">
                <thead></thead>
                <tbody>
                  <tr className="font-semibold">
                    <td></td>
                    <td className=" justify-center items-center ">
                      Tactical(&lt;=12 Months)
                    </td>
                  </tr>
                  <tr>
                    <td className="font-semibold text-2xl">
                      <span className=" justify-center items-center">
                        <span>Risk Reduction</span>{" "}
                        <span className="text-sm mt-1">(in %)</span>
                      </span>
                    </td>
                    <td className="">
                      <div className="flex justify-center items-center mx-40 space-x-4">
                        <div className="">0</div>
                        <RangeSlider
                          percentValue={percentValue}
                          min={0}
                          max={100}
                          variant={"green"}
                          size={"sm"}
                          onChange={(changeEvent) =>
                            setPercentValue(changeEvent.target.value)
                          }
                        />
                        <div className="">100</div>
                      </div>
                      <div>
                        <PercentAnalysis
                          percentValue={(100 * percentValue) / 100}
                        />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="font-semibold ">
                      Risk Reduction{" "}
                      <span className="text-sm"> (USD in millions)</span>
                    </td>
                    <td className="">
                      <div className="flex  justify-center items-center space-x-4">
                        <div className="text-sm mt-3">Min</div>
                        <div className="">50</div>
                        <RangeSlider
                          value={value}
                          min={50}
                          max={200}
                          onChange={(changeEvent) =>
                            setValue(changeEvent.target.value)
                          }
                        />
                        <div className="">200</div>
                        <div className="text-sm mt-3">Max</div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="font-semibold ">Top 5 Controls</td>
                    {/* <td>
                      
                    </td> */}
                    <div className="bg-gray-50 font text-2xl font-sans grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
                      <div className="rounded overflow-hidden">
                        <div className="justify-center text-3xl font-semibold items-center flex space-x-1">
                          <span>
                            <DetailOne />
                          </span>
                        </div>
                      </div>
                      <div className="rounded overflow-hidden">
                        <div className="justify-center text-3xl font-semibold items-center flex space-x-1">
                          <span>
                            <DetailOne />
                          </span>
                        </div>
                      </div>
                    </div>
                  </tr>
                  <tr>
                    <td className="font-semibold">Scope Distribution</td>
                    <div className="bg-gray-50 font text-2xl font-sans grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
                      <div className="rounded overflow-hidden">
                        <div className="justify-center text-3xl font-semibold items-center flex space-x-1">
                          <span>
                            <TopAttackVector />
                          </span>
                        </div>
                      </div>
                      <div className="rounded overflow-hidden">
                        <div className="justify-center text-3xl font-semibold items-center flex space-x-1">
                          <span>
                            <TopAttackVector />
                          </span>
                        </div>
                      </div>
                    </div>
                  </tr>
                  <tr>
                    <td className="font-semibold h-36">
                      Potential Investment
                      <br></br>
                      <span className="text-sm font-sm">(USD in Millions)</span>
                    </td>
                    <td>
                      <div className="space-y-10 flex flex-col justify-center items-center ">
                        <span className="inline-block  text-4xl text-black  px-3 py-1 font-semibold max-w-lg mr-2 mb-2">
                          3
                        </span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ControlAnalysis;
