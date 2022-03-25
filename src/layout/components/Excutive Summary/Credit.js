import React from "react";
import MultiRangeSlider from "./PercentSlider/MultiRangeSlider";
import MilMultiRangeSlider from "./MilSlider/MultiRangeSlider";
import MostExploitableAsset from "./../Threat Scops/MostExploitableAsset";
import LossCredit from "./LossCredit";
import CyberCredit from "./CyberCredit";

const Credit = () => {
  return (
    <div className="p-10 bg-gray-100 text-2xl font-sans grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
      <div className="rounded overflow-hidden  shadow-md">
        <div className="justify-center space-y-6 mt-10 items-center flex flex-col ">
          <span className="inline-bloc   text-2xl font-semibold ">
            Loss expense (2021/22){" "}
            <span className="inline-block  text-gray-500  text-sm font-semibold">
              (USD in Millions)
            </span>
          </span>
          <span className="inline-block  text-md font-semibold ">Max loss</span>
          <span className="inline-block  text-6xl font-semibold">8</span>
        </div>
      </div>
      {/* <!--Card 1--> */}
      <div className="rounded overflow-hidden shadow-md">
        <span className="inline-block mx-16 text-2xl px-3 py-1 font-semibold max-w-lg mr-2 mb-2">
          Loss Distribution
        </span>
        <LossCredit />
      </div>
      {/* <!--Card 1--> */}
      <div className="rounded overflow-hidden shadow-md">
        <span className="inline-block mx-16 text-2xl px-3 py-1 font-semibold max-w-lg mr-2 mb-2">
          Top cyber threats
        </span>
        <CyberCredit />
      </div>
      {/* <!--Card 1--> */}
      <div className="rounded overflow-hidden  shadow-md">
        <div className="justify-center space-y-10 items-center flex flex-col ">
          <span className="inline-block  text-2xl font-semibold ">
            Revenue Contribution{" "}
            <span className="inline-block  text-gray-500  text-sm font-semibold">
              (USD in Millions)
            </span>
          </span>

          <span className="inline-block  text-6xl font-semibold  ">1</span>
        </div>
      </div>

      {/* <!--Card 2--> */}
      <div className="rounded flex flex-col  overflow-hidden shadow-md">
        <span className="inline-block mx-10 text-2xl px-3 py-1 font-semibold max-w-lg mr-2 mb-2">
          Investment Requirements
          <span className="inline-block  text-gray-500  text-sm font-semibold">
            (in Millions)
          </span>
        </span>
        <div className="-mx-10 -mt-12">
          {" "}
          <MilMultiRangeSlider
            min={0}
            max={15}
            onChange={({ min, max }) =>
              console.log(`min = ${min}, max = ${max}`)
            }
          />
        </div>

        <div className="space-x-36  text -mt-16 mx-24">
          <span className="inline-block py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            Min
          </span>
          <span className="inline-block  text-sm font-semibold text-gray-700 mr-2 mb-2">
            Max
          </span>
        </div>
      </div>

      <div className="rounded overflow-hidden shadow-md ">
        <span className=" flex justify-center items-center text-2xl px-3 py-1 font-semibold max-w-lg mr-2 mb-2">
          <span>Risk reduction </span>
          <span className="inline-block  text-gray-500  text-sm font-semibold">
            (in Millions)
          </span>
        </span>
        <div className="md:-mx-10 md:-mt-12">
          {" "}
          <MultiRangeSlider
            min={10}
            max={20}
            onChange={({ min, max }) =>
              console.log(`min = ${min}, max = ${max}`)
            }
          />
        </div>
        <div className="md:space-x-36  text md:-mt-16 md:mx-24">
          <span className="inline-block py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            Min
          </span>
          <span className="inline-block  text-sm font-semibold text-gray-700 mr-2 mb-2">
            Max
          </span>
        </div>
      </div>

      <div className="rounded  overflow-hidden shadow-md card_width h-64">
        <div className="space-y-2 flex flex-col justify-center items-center">
          <span className="inline-block  text-2xl px-3 py-1 font-semibold max-w-lg mr-2 mb-2">
            Top Vectors Attacks
          </span>
          <LossCredit />
          <a
            className="text-decoration-none  mx-36 text-sm"
            href="https://www.google.com"
          >
            More detail
          </a>
        </div>
      </div>
      <div className="rounded lg:mx-60 overflow-hidden shadow-md card_width h-64">
        <div className="space-y-2 flex flex-col justify-center items-center">
          <span className="inline-block  text-2xl px-3 py-1 font-semibold max-w-lg mr-2 mb-2">
            Most exploitable assets
          </span>
          <MostExploitableAsset />
          <a
            className="text-decoration-none  mx-36 text-sm"
            href="https://www.google.com"
          >
            More detail
          </a>
        </div>
      </div>
      {/* <!--Card 3--> */}
    </div>
  );
};

export default Credit;
