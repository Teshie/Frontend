import React, { useState } from "react";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import RangeSlider from "react-bootstrap-range-slider";
import Charts from "./../Threat Scope/BarChart";
import BusinessRisk from "./../Threat Scope/BusinessRisk/BusinessRisk";
import MapChart from "./../Threat Scope/MapChart";
import BusinessObjectives from "./BusinessObjectives";
import Hook from "./Hook";
import TopCyberThreats from "./TopCyberThreats";
import LossCRM from "./LossCRM";
import TopThreats from "./Top Threats/TopThreats";
import LossDistribution from "./Loss Distribution/LossDistribution";
const TestExcutive = () => {
  const [seq, setSeq] = useState(0);
  return (
    <div className="p-5 bg-gray-100 text-center font-sans grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3  gap-4">
      <div className="rounded overflow-hidden  shadow-md">
        <div className="justify-center space-y-6 mt-10 items-center flex flex-col ">
          <span className="space-x-1 flex  text-2xl font-semibold ">
            <span>Loss expense (2021/22)</span>
            <span className="inline-block  text-gray-500  text-sm font-semibold">
              (USD in Millions)
            </span>
            <span className="text-gray-500 text-sm cursor-pointer">
              <Hook />
            </span>
          </span>
          <span className="inline-block  text-md font-semibold ">Max loss</span>
          <span className="inline-block  text-6xl font-semibold">10</span>
        </div>
      </div>
      {/* <!--Card 1--> */}
      <div className="rounded relative overflow-hidden flex flex-col justify-center items-center shadow-md">
        <span className="flex justify-center items-center space-x-1 text-2xl px-3 py-1 font-semibold max-w-lg mr-2 mb-2">
          <span>Loss Distribution</span>
          <span className="text-gray-500 z-100 text-sm cursor-pointer">
            <Hook />
          </span>
        </span>
        <LossDistribution />
      </div>
      {/* <!--Card 1--> */}
      <div className="rounded overflow-hidden flex flex-col justify-center items-center shadow-md">
        <span className="flex space-x-1 justify-center items-center text-2xl px-3 py-1 font-semibold max-w-lg mr-2 mb-2">
          <span>Top cyber threats</span>
          <span className="text-gray-500 text-sm cursor-pointer">
            <Hook />
          </span>
        </span>
        <TopCyberThreats />
      </div>
      {/* <!--Card 1--> */}
      <div className="rounded overflow-hidden  shadow-md">
        <div className="justify-center space-y-10 items-center flex flex-col ">
          <span className="flex justify-center items-center space-x-1 text-2xl font-semibold ">
            <span> Revenue Contribution </span>{" "}
            <span className="inline-block  text-gray-500  text-sm font-semibold">
              (USD in Millions)
            </span>
            <span className="text-gray-500 text-sm cursor-pointer">
              <Hook />
            </span>
          </span>

          <span className="inline-block  text-6xl font-semibold  ">1</span>
        </div>
      </div>
      {/* <!--Card 2--> */}
      <div className="rounded overflow-hidden shadow-sm">
        <span className="inline-block mt-10 text-2xl font-semibold ">
          Financial Consequences{" "}
          <span className="inline-block  text-gray-500  text-sm font-semibold">
            (USD in Millions)
          </span>
          <span className="text-gray-500 text-3xl">
            <HelpOutlineIcon />
          </span>
        </span>
        <div className="flex flex-col justify-center items-center">
          <div className="flex -mx-16 text-sm space-x-4 p-5">
            <span>Min 5</span>
            <RangeSlider
              className="-mx-16"
              value={90}
              min={50}
              max={200}
              onChange={(changeEvent) => setSeq(changeEvent.target.value)}
            />
            <span>10 Max</span>
          </div>
        </div>
        <div className="space-x-36 text -mt-16">
          <span className="inline-block py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            Min
          </span>
          <span className="inline-block text-sm font-semibold text-gray-700 mr-2 mb-2">
            Max
          </span>
        </div>
      </div>
      <div className="rounded overflow-hidden shadow-sm">
        <span className="inline-block mt-10 text-2xl font-semibold ">
          Financial Consequences{" "}
          <span className="inline-block  text-gray-500  text-sm font-semibold">
            (USD in Millions)
          </span>
          <span className="text-gray-500 text-3xl">
            <HelpOutlineIcon />
          </span>
        </span>
        <div className="flex flex-col justify-center items-center">
          <div className="flex -mx-16 text-sm space-x-4 p-5">
            <RangeSlider
              className="-mx-16"
              value={90}
              min={50}
              max={200}
              onChange={(changeEvent) => setSeq(changeEvent.target.value)}
            />
          </div>
        </div>
        <div className="space-x-36 text -mt-16">
          <span className="inline-block py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            Min
          </span>
          <span className="inline-block text-sm font-semibold text-gray-700 mr-2 mb-2">
            Max
          </span>
        </div>
      </div>

      {/* <!--Card 3--> */}
      <div className="rounded overflow-hidden  shadow-md h-72">
        <div className="justify-center space-y-10 items-center flex flex-col ">
          <span className="flex justify-center mt-10 items-center space-x-1 text-2xl font-semibold ">
            <span> Total Investement </span>{" "}
            <span className="inline-block  text-gray-500  text-sm font-semibold">
              (USD in Millions)
            </span>
            <span className="text-gray-500 text-sm cursor-pointer">
              <Hook />
            </span>
          </span>
          <span className="mt-2 text-xl"> - BAU + Investment Requirement</span>{" "}
          <span className="inline-block  text-6xl font-semibold  ">20</span>
        </div>
      </div>
      <div className="rounded  shadow-md h-92">
        <div className="justify-center space-y-10 items-center flex flex-col ">
          <span className="flex justify-center mt-2 items-center space-x-1 text-2xl font-semibold ">
            <span> Business Objectives </span>{" "}
            <span className="text-gray-500 text-sm cursor-pointer">
              <Hook />
            </span>
          </span>
          <span className="">
            <BusinessObjectives />
          </span>
        </div>
      </div>
    </div>
  );
};

export default TestExcutive;
