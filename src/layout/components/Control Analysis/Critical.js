import React, { useState } from "react";
import RangeSlider from "react-bootstrap-range-slider";
import DetailTwo from "./DetailTwo";
import styled from "styled-components";
import { Link } from "react-router-dom";
import TopAttackVector from "./../Threat Scops/TopAttackVector";
import CurrencyAn from "./CurrencyAn";
import CriticalPercentValue from "./CriticalPercentValue";

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
const Critical = () => {
  const [currency, setCurrency] = useState(0);
  const [percentValue, setPercentValue] = useState(0);
  return (
    <div class="bg-gray-50 text-4xl">
      <div className="p-48 -mt-48 table_width">
        <Button to="/controlanalysis">
          <button className="m-10 detail">View Tactical</button>
        </Button>
        <div className="rounded overflow-hidden  justify-center items-center">
          <table class="GeneratedTable w-64 bg-gray-50">
            <thead></thead>
            <tbody>
              <tr className="font-semibold">
                <td></td>
                <td>
                  <div className="flex justify-center items-center">
                    Strategic( &gt;12 Months)
                    {/* <img
                      className="mx-2"
                      src="https://i.ibb.co/W5PRZzL/min-max.png"
                      alt="min-max"
                    /> */}
                  </div>
                </td>
              </tr>
              <tr>
                <td className="font-semibold">
                  {" "}
                  <span className="flex justify-center items-center">
                    <span>Risk Reduction</span>{" "}
                    <span className="text-sm mt-1">(in %)</span>
                  </span>
                </td>

                <td>
                  <div className="flex mx-16 space-x-4">
                    <div className="">0</div>
                    <RangeSlider
                      percentValue={percentValue}
                      min={50}
                      max={200}
                      onChange={(changeEvent) =>
                        setPercentValue(changeEvent.target.value)
                      }
                    />
                    <div className="">100</div>
                    <CriticalPercentValue
                      percentValue={(100 * percentValue) / 200}
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td className="font-semibold ">
                  Risk Reduction{" "}
                  <span className="text-sm">
                    {" "}
                    <br></br>(USD in millions)
                  </span>
                </td>

                <td className="space-y-10">
                  <div className="flex mx-16 space-x-4">
                    <div className="">50</div>
                    <RangeSlider
                      currency={currency}
                      min={50}
                      max={200}
                      onChange={(changeEvent) =>
                        setCurrency(changeEvent.target.value)
                      }
                    />
                    <div className="">200</div>
                    <CurrencyAn currency={currency} />
                  </div>
                </td>
              </tr>
              <tr>
                <td className="font-semibold ">Top 5 Controls</td>

                <td>
                  <DetailTwo />
                </td>
              </tr>
              <tr>
                <td className="font-semibold ">Scope Distribution</td>

                <td>
                  <div className="flex">
                    <TopAttackVector />
                    <TopAttackVector />
                  </div>
                </td>
              </tr>
              <tr>
                <td className="font-semibold h-36">
                  Potential Investment
                  <br></br>
                  <span className="text-sm font-sm">(USD in Millions)</span>
                </td>
                <td>
                  <div className="space-y-10 flex flex-col justify-center items-center">
                    <span className="inline-block text-black  text-4xl  px-3 py-1 font-semibold max-w-lg mr-2 mb-2">
                      2
                    </span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Critical;
