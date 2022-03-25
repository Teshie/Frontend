import React from 'react';
import TopAttackVector from './TopAttackVector';
import MostExploitableAsset from './MostExploitableAsset';
import ThreatLandScape from './ThreatLandScape';
import Test from '../Control Analysis/Test';
import Dist from '../Threat Scope/MoreDetails/Dist';

const ThreatProfiling = () => {
  return (
    <>
      <div className="bg-gray-200">
        <div className="p-10 font text-2xl  grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
          <div className="rounded relative overflow-hidden shadow-sm h-80 flex justify-center items-center flex-col ">
            <div className="space-y-10 flex flex-col justify-center items-center">
              <span className="flex absolute top-12 justify-center items-center flex-col  text-4xl ">
                <span className="flex justify-center items-center text-4xl  ">
                  <span className="flex justify-center items-center  text-4xl font-semibold">
                    Potential Exploitable Paths
                  </span>
                  <span className="text-gray-500  text-sm cursor-pointer">
                    <Dist />
                  </span>
                </span>
                <span className="text-gray-500 text-sm">
                  (Incidents/ Breach)
                </span>
              </span>
              <span className="inline-block  text-6xl  px-3 py-1 font-semibold max-w-lg mr-2 mb-2">
                10/2
              </span>
            </div>
            <a
              className="text-decoration-none absolute align-text-bottom bottom-3  detail text-sm "
              href="https://www.google.com"
            >
              More detail
            </a>
          </div>

          <div className="rounded relative overflow-hidden shadow-sm h-80 flex justify-center items-center flex-col ">
            <div className="space-y-10 flex flex-col justify-center items-center">
              <span className="flex absolute top-12 justify-center items-center flex-col  text-4xl ">
                <span className="flex  justify-center items-center text-4xl  ">
                  <span className="flex justify-center items-center  text-4xl font-semibold">
                    Likelihood of Success{' '}
                  </span>
                  <span className="text-gray-500  text-sm cursor-pointer">
                    <Dist />
                  </span>
                </span>
                <span className="text-gray-500 text-sm">
                  (Incidents/ Breach)
                </span>
              </span>
              <span className="inline-block  text-6xl  px-3 py-1 font-semibold max-w-lg mr-2 mb-2">
                50%
              </span>
            </div>
            <a
              className="text-decoration-none absolute align-text-bottom bottom-3 detail text-sm "
              href="https://www.google.com"
            >
              More detail
            </a>
          </div>
          <div className="rounded relative overflow-hidden shadow-sm h-80 flex justify-center items-center flex-col ">
            <div className="space-y-10 flex flex-col justify-center items-center">
              <span className="flex justify-center items-center flex-col  text-4xl ">
                <span className="flex absolute top-11  justify-center items-center text-4xl  ">
                  <span className="flex  justify-center items-center  text-4xl font-semibold">
                    Frequency of Occurence
                  </span>
                  <span className="text-gray-500  text-sm cursor-pointer">
                    <Dist />
                  </span>
                </span>
              </span>
              <span className="inline-block space-x-2  text-3xl text-gray-500  px-3 py-1 font-semibold max-w-lg mr-2 mb-2">
                <span className="text-black text-6xl">1</span>
                <span>in</span> <span className="text-black text-6xl">2</span>
                <span>years</span>
              </span>
            </div>
            <a
              className="text-decoration-none absolute align-text-bottom bottom-3 detail text-sm "
              href="https://www.google.com"
            >
              More detail
            </a>
          </div>
        </div>
        <div className="p-10 font  text-2xl font-sans grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-2 gap-5">
          <div className="rounded h-96 relative overflow-hidden shadow-sm flex   flex-col justify-center items-center">
            <div className="flex h-72 flex-col justify-center items-center">
              <span className="flex absolute top-0 justify-center items-center space-x-3 text-4xl font-semibold ">
                <span>Financial Impacts</span>
                <span className="text-gray-500 mt-2 text-sm cursor-pointer">
                  <Dist />
                </span>
              </span>
              <span className="">
                <Test />
              </span>
              <span></span>
            </div>
            <a
              className="text-decoration-none detail text-sm absolute bottom-3"
              href="https://www.google.com"
            >
              More detail
            </a>{' '}
          </div>
          <div className="rounded h-96 relative overflow-hidden shadow-md flex flex-col justify-center items-center">
            <div className=" flex flex-col justify-center items-center">
              <span className="flex absolute top-0 justify-center items-center space-x-1 text-4xl font-semibold ">
                <span>Top Attack Vectors</span>
                <span className="text-gray-500 mt-2 text-sm cursor-pointer">
                  <Dist />
                </span>
              </span>
              <TopAttackVector />
              <a
                className="text-decoration-none absolute  bottom-3 text-sm detail"
                href="https://www.google.com"
              >
                More detail
              </a>
            </div>
          </div>
          <div className="rounded relative  overflow-hidden shadow-md h-80 flex flex-col justify-center items-center">
            <div className=" flex flex-col justify-center items-center">
              <span className="flex space-x-3 absolute top-0  text-4xl  font-semibold">
                <span>Most Exploitable Assets</span>
                <span className="text-gray-500 mt-2 text-sm cursor-pointer">
                  <Dist />
                </span>
              </span>
              <MostExploitableAsset />
              <a
                className="text-decoration-none absolute bottom-3 text-sm detail"
                href="https://www.google.com"
              >
                More detail
              </a>
            </div>
          </div>

          <div className="rounded relative overflow-hidden shadow-md flex flex-col justify-center items-center  h-80">
            <div className="flex justify-center items-center  flex-col">
              <span className="flex absolute top-0 space-x-3  text-4xl font-semibold ">
                <span>Current Industry Threats </span>
                <span className="text-gray-500 mt-2 text-sm cursor-pointer">
                  <Dist />
                </span>
              </span>
              <ThreatLandScape />
              <a
                className="text-decoration-none  absolute  bottom-3 text-sm detail"
                href="https://www.google.com"
              >
                More detail
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThreatProfiling;
