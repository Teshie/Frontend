import React, { useState } from "react";
import LossDistribution from "./Loss Distribution/LossDistribution";
import RangeSlider from "react-bootstrap-range-slider";
import TopCyberThreats from "./TopCyberThreats";
import BusinessObjectives from "./BusinessObjectives";
import Expense from "./MoreInfo/Expense";
import Distribution from "./MoreInfo/Distribution";
import Threats from "./MoreInfo/Threats";
import Contribution from "./MoreInfo/Contribution";
import Consequence from "./MoreInfo/Consequence";
import Objectives from "./MoreInfo/Objectives";
import TotalInvestment from "./MoreInfo/TotalInvestment";
import Geo from "./../Threat Scope/MoreDetails/Geo";

const ExcutiveSummary = () => {
  const [seq, setSeq] = useState(0);
  const [red, setRed] = useState(0);
  return (
    <div className="flex flex-col font -space-y-8">
      <div className="p-10 bg-gray-200 text-2xl  grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        <div className="rounded overflow-hidden  shadow-md">
          <div className="justify-center space-y-16 mt-3 items-center flex flex-col">
            <span className="space-x-1 justify-center items-center flex  flex-col text-4xl font-semibold ">
              <span className="flex -mt-3 justify-center text-4xl items-center space-x-1">
                <span>Loss Exposure</span>{" "}
                <span className="text-gray-500 mt-2 text-sm cursor-pointer">
                  <Expense />
                </span>
              </span>
              <span className="inline-block mt-2  text-gray-500  text-sm font-semibold">
                (Annual Loss Event-USD in Millions)
              </span>
            </span>
            <span className="inline-block text-6xl font-semibold">35</span>
          </div>
        </div>
        {/* <!--Card 1--> */}
        <div className="rounded z-10 overflow-hidden flex flex-col justify-center items-center shadow-md">
          <span className="flex justify-center items-center space-x-1 text-4xl px-3 py-1 font-semibold max-w-lg mr-2 mb-2">
            <span className="flex justify-center  items-center space-x-1">
              <span className="flex flex-col justify-center items-center">
                <span>Loss Distribution</span>
                <span className="text-sm mt-2 text-gray-500">(in %)</span>
              </span>
            </span>{" "}
            <span className="text-gray-500 -mt-4 text-sm cursor-pointer">
              <Distribution />
            </span>
          </span>
          <LossDistribution />
        </div>
        {/* <!--Card 1--> */}
        <div className="rounded z-10 overflow-hidden flex flex-col justify-center items-center shadow-md">
          <span className="flex space-x-1 justify-center items-center text-4xl px-3 py-1 font-semibold max-w-lg mr-2 mb-2">
            <span className="flex justify-center  items-center space-x-3">
              {" "}
              <span className="flex flex-col justify-center items-center">
                <span>Top Cyber Risks</span>
                <span className="text-sm mt-2 text-gray-500">(in %)</span>
              </span>
            </span>{" "}
            <span className="text-gray-500 -mt-4 text-sm cursor-pointer">
              <Threats />
            </span>
          </span>
          <TopCyberThreats />
        </div>
      </div>

      <div className="p-5 font bg-gray-200 text-center font-sans grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3  gap-4">
        <div className="rounded overflow-hidden  shadow-md h-64">
          <div className="justify-center mt-10 space-y-10 items-center flex flex-col ">
            <span className="flex justify-center mt-2 items-center space-x-1 text-4xl font-semibold ">
              <span> Revenue Contribution </span>{" "}
              <span className="text-gray-500 text-sm cursor-pointer">
                <Contribution />
              </span>
            </span>
            <span className="inline-block mt-2  text-gray-500  text-sm font-semibold">
              (USD in Millions)
            </span>
            <span className="inline-block  text-6xl font-semibold  ">40</span>
          </div>
        </div>
        <div className="rounded flex flex-col justify-center items-center overflow-hidden shadow-md">
          <span className=" flex justify-center -mt-3 items-center text-4xl font-semibold space-x-1">
            <span>Investment Requirement</span>
            <span className="text-gray-500 text-sm cursor-pointer">
              <Consequence />
            </span>
          </span>
          <span className="inline-block text-gray-500  text-sm font-semibold">
            (USD in Millions)
          </span>
          <div className="flex flex-col -mt-6 justify-center items-center">
            <div className="flex -mx-16 text-sm space-x-4 p-5">
              <span className="text-xl font-bold mt-2">1</span>
              <span className="text-4xl color font-bold">
                <RangeSlider
                  className="-mx-16 p-2"
                  value={8}
                  min={1}
                  max={10}
                  onChange={(changeEvent) => setSeq(changeEvent.target.value)}
                />
              </span>
              <span className="text-xl font-bold mt-2">10</span>
            </div>
          </div>
          <div className="space-x-80 flex justify-center items-center  -mt-16">
            <span className="inline-block -mt-6 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              Min
            </span>
            <span className="inline-block -mt-6  text-sm font-semibold text-gray-700 mr-2 mb-2">
              Max
            </span>
          </div>
        </div>
        <div className=" rounded shadow-md flex flex-col   overflow-hidden h-64">
          <span className=" flex justify-center items-center mt-10 space-x-1 text-4xl  font-semibold ">
            <span>Risk Reduction</span>
            <span className="text-gray-500 text-sm cursor-pointer">
              <Geo />
            </span>
          </span>
          <span className="text-sm text-gray-500 font-semibold"> (in %)</span>
          <div className="-mt-6">
            <div className="flex flex-col justify-center items-center">
              <div className="flex text-sm space-x-4 p-5">
                <span className="text-xl font-bold mt-2">0</span>
                <span className="text-4xl color font-bold">
                  <RangeSlider
                    className="-mx-16 p-2"
                    value={41}
                    min={0}
                    max={100}
                    onChange={(changeEvent) => setRed(changeEvent.target.value)}
                  />
                </span>
                <span className="text-xl font-bold mt-2">100</span>
              </div>
            </div>
          </div>
          <div className="space-x-80 flex justify-center items-center  -mt-16">
            <span className="inline-block -mt-6 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              Min
            </span>
            <span className="inline-block -mt-6 text-sm font-semibold text-gray-700 mr-2 mb-2">
              Max
            </span>
          </div>
        </div>

        {/* <!--Card 2--> */}
      </div>
      <div className="p-10 font bg-gray-200 text-2xl font-sans grid grid-cols-1 sm:grid-cols-1 md:grid-cols- lg:grid-cols-2 xl:grid-cols-2 gap-5">
        <div className="rounded overflow-hidden  shadow-md h-80">
          <div className="justify-center space-y-16 items-center flex flex-col ">
            <span className="flex justify-center mt-3 items-center space-x-1 text-4xl font-semibold ">
              <span>Total Investment </span>{" "}
              <span className="text-gray-500 text-sm cursor-pointer">
                <TotalInvestment />
              </span>
            </span>
            <span className="inline-block mt-2  text-gray-500  text-sm font-semibold">
              (USD in Millions)
            </span>
            <span className="mt-2 text-sm">(BAU + Investment Requirement)</span>{" "}
            <span className="inline-block  text-6xl font-semibold  ">60</span>
          </div>
        </div>
        <div className="rounded  shadow-md ">
          <div className="justify-center space-y-0 items-center flex flex-col ">
            <span className="flex justify-center mt-2 items-center space-x-1 text-4xl font-semibold ">
              <span className="flex flex-col justify-center  items-center space-x-1">
                {" "}
                <span>Contribution to Business Objectives</span>
                <span className="text-sm mt-2">(in %)</span>
              </span>{" "}
              <span className="text-gray-500 -mt-5 text-sm cursor-pointer">
                <Objectives />
              </span>
            </span>
            <span className="">
              <BusinessObjectives />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExcutiveSummary;
