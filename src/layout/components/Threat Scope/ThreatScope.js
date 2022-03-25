import React, { useState } from "react";
import BusinessRisk from "./BusinessRisk/BusinessRisk";
import "./multiRangeSlider.css";
import MapChart from "./MapChart";
import RangeSlider from "react-bootstrap-range-slider";
import Charts from "./BarChart";
import Assets from "./MoreDetails/Assets";
import Risk from "./MoreDetails/Risk";
import Vend from "./MoreDetails/Vend";
import Dist from "./MoreDetails/Dist";
import RiskRed from "./MoreDetails/RiskRed";
import IndustryImpacts from "./MoreDetails/IndustryImpacts";
import Geo from "./MoreDetails/Geo";
const ThreatScope = () => {
  const [seq, setSeqq] = useState(0);
  return (
    <>
      <div className="p-5 font bg-gray-100 text-center font-sans grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3  gap-4">
        <div className="rounded  overflow-hidden shadow-sm">
          <div className="space-y-20 flex flex-col vendor-width">
            <span className="flex justify-center items-center space-x-1 text-5xl  px-3 py-1 font-semibold max-w-lg mr-2 mb-2">
              <span color >Business Assets</span>
              <span className="text-gray-500 text-sm cursor-pointer">
                <Assets />
              </span>
            </span>
            <span className="inline-block  text-6xl  px-3 py-1 font-semibold max-w-lg mr-2 mb-2">
              18
            </span>
            <a
              className="text-decoration-none mt-36 detail"
              href="https://www.google.com"
            >
              More details
            </a>
          </div>
        </div>
        {/* <!--Card 1--> */}

        {/* <!--Card 1--> */}
        <div className="rounded  overflow-hidden shadow-sm">
          <div className="space-y-20 flex flex-col vendor-width">
            <span className="flex justify-center items-center space-x-1 text-3xl px-3 py-1 font-semibold max-w-lg mr-2 mb-2">
              <span>Vendors</span>
              <span className="text-gray-500 text-sm cursor-pointer">
                <Vend />
              </span>
            </span>
            <span className="inline-block  text-6xl  px-3 py-1 font-semibold max-w-lg mr-2 mb-2">
              20
            </span>
            <a
              className="text-decoration-none detail"
              href="https://www.google.com"
            >
              More details
            </a>
          </div>
        </div>
        {/* <!--Card 1--> */}

        {/* <!--Card 2--> */}

        {/* <!--Card 3--> */}
        <div className="rounded relative h-80 flex justify-center items-center flex-col  overflow-hidden shadow-sm">
          <div className="">
            <span className="flex justify-center items-center space-x-0 text-3xl font-semibold ">
              <span>Asset Distribution by Risk</span>
              <span className="text-gray-500 -mt-10 text-sm cursor-pointer">
                <Vend />
              </span>
            </span>
          </div>
          <div className="mx-16">
            <Charts />
            <a
              className="text-decoration-none detail"
              href="https://www.google.com"
            >
              More details
            </a>
          </div>
        </div>
      </div>
      <div className="p-5 font -mt-10 bg-gray-100 text-center font-sans grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2  gap-4">
        {/* <!--Card 1--> */}

        {/* <!--Card 1--> */}

        {/* <!--Card 1--> */}
        <div className=" rounded shadow-md flex justify-center items-center flex-col space-y-10  h-card  overflow-hidden ">
          <span className=" flex justify-center items-center  space-x-1 text-3xl  font-semibold ">
            <span className="flex flex-col">
              <span>Business Risks</span>
              <span className="text-sm text-gray-500">
                {" "}
                (Average ALE USD in Millions)
              </span>
            </span>
            <span className="text-gray-500 -mt-3 text-sm cursor-pointer">
              <Geo />
            </span>
          </span>

          <div className="">
            <BusinessRisk />
          </div>

          <a
            className="text-decoration-none detail"
            href="https://www.google.com"
          >
            More details
          </a>
        </div>
        <div className=" rounded shadow-md  overflow-hidden h-card">
          <span className=" flex justify-center items-center space-x-1 text-3xl  font-semibold ">
            <span>Geolocation of Assets</span>
            <span className="text-gray-500 text-sm cursor-pointer">
              <Geo />
            </span>
          </span>
          <div className="-mt-4">
            <MapChart />
          </div>
        </div>

        {/* <!--Card 2--> */}
      </div>
    </>
  );
};

export default ThreatScope;
