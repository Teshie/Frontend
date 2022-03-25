import React from 'react';
import './controlMain.css';
import BusinessObjectiveControl from './BusinessObjectiveControl';
import Scope from './Scope';
import IndustryUseCases from './IndustryUseCases';
import Geo from '../Threat Scope/MoreDetails/Geo';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const Button = styled(Link)`
  text-decoration: none;
  color: 'white';
  a {
    color: #fff;
  }
  a:hover {
    color: #00f;
  }
`;
const ControlMain = () => {
  return (
    <div className="bg-gray-200 font relative flex flex-col space-y-2">
      <Button to="/tactical">
        <button className="p-10 detail text-3xl font">View Tactical</button>
      </Button>
      <div className="p-10 bg-gray-200  font grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1">
        <div className="rounded overflow-hidden  shadow-sm">
          <div className="text-black">
            <div className="rounded flex justify-center items-center  overflow-hidden ">
              <table class="GeneratedTablee flex  text-2xl justify-center items-center  text-black bg-gray-200">
                <thead></thead>
                <tbody>
                  <tr className="text-2xl font-semibold second-color">
                    <td>Controls</td>
                    <td>
                      Process / App
                      <br /> Impact
                    </td>
                    <td>
                      Financial Risk
                      <br /> Reduction(%)
                    </td>
                    <td>
                      Financial Risk
                      <br /> Reduction($)
                    </td>
                    <td>
                      Implementation
                      <br /> Cost($)
                    </td>
                  </tr>
                  <tr>
                    <td className="text-xl font-black">
                      Identity Management, <br></br> Authentication and Access
                      Control
                    </td>
                    <td>
                      Customer Relationship Management,<br></br> Online Banking
                    </td>
                    <td>-30</td>
                    <td>-10,501,976.84</td>
                    <td>2,200,000</td>
                  </tr>
                  <tr>
                    <td className="text-xl font-black">
                      Awareness and Training
                    </td>
                    <td>
                      Customer Relationship Management,<br></br> Online Banking,
                      Billing Inquiries
                    </td>
                    <td>-6</td>
                    <td>-2,000,500</td>
                    <td>100,000</td>
                  </tr>
                  <tr>
                    <td className="text-xl font-black">
                      Monitor Database Activity{' '}
                    </td>
                    <td>
                      Customer Relationship Management, <br></br> Billing
                      Inquiries
                    </td>
                    <td>-2</td>
                    <td>-591,737.51</td>
                    <td>500,000</td>
                  </tr>
                  <tr>
                    <td className="text-xl font-black">
                      Supply Chain - Risk Assessment
                    </td>
                    <td>Customer Relationship Management</td>
                    <td>-2</td>
                    <td>-581,275.94</td>
                    <td>100,000</td>
                  </tr>
                  <tr>
                    <td className="text-xl font-black">
                      Continuous Monitoring
                    </td>
                    <td>Customer Relationship Management</td>
                    <td>-1</td>
                    <td>-300,000</td>
                    <td>5,000,000</td>
                  </tr>
                  <tr>
                    <td className="text-xl font-black">Anomalies and Events</td>
                    <td>
                      Customer Relationship Management,<br></br> Online Banking,
                      Billing Inquiries
                    </td>
                    <td>-1</td>
                    <td>-227,086.8</td>
                    <td>0</td>
                  </tr>
                  <tr>
                    <td className="text-xl font-black">
                      Information Protection<br></br> Process and Procedures
                    </td>
                    <td>
                      Customer Relationship Management,<br></br> Online Banking,
                    </td>
                    <td>-1</td>
                    <td>-190,000</td>
                    <td>50,000</td>
                  </tr>
                  <tr>
                    <td className="text-xl font-black">
                      Asset Management <br></br> - System Inventory
                    </td>
                    <td>
                      Customer Relationship Management,<br></br> Online Banking,
                      Billing Inquiries
                    </td>
                    <td>-1</td>
                    <td>-175,932.84</td>
                    <td>75,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <a
              className="detail text-decoration-none  mt-3 pb-3   justify-center text-sm flex items-center"
              href="https://www.google.com"
            >
              More Detail
            </a>
          </div>
        </div>
      </div>
      <div className="bg-gray-200 font text-2xl font-sans grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1">
        <div className="rounded overflow-hidden">
          <div className="justify-center text-3xl font-semibold items-center flex space-x-1">
            <span>Contributions</span>
            <span className="text-gray-500 mt-2 text-sm cursor-pointer">
              <Geo />
            </span>
          </div>
        </div>
      </div>
      <div className="p-10 bg-gray-200 font text-2xl font-sans grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-3">
        <div className="rounded overflow-hidden  shadow-md">
          <div className="justify-center items-center flex flex-col">
            {/* <span className="space-x-1 justify-center items-center flex  flex-col text-3xl font-semibold ">
              <span>Business Objective</span>
            </span> */}
            <div className="justify-center text-2xl font-semibold items-center flex space-x-1">
              <span>Business Objective</span>
              <span className="text-gray-500 mt-2 text-sm cursor-pointer">
                <Geo />
              </span>
            </div>
            <BusinessObjectiveControl />
            <a
              className="text-decoration-none detail text-sm mt-4 pb-3"
              href="https://www.google.com"
            >
              More detail
            </a>
          </div>
        </div>
        {/* <!--Card 1--> */}
        <div className="rounded relative overflow-hidden  shadow-md">
          <div className="justify-center items-center flex flex-col">
            <div className="justify-center text-2xl font-semibold items-center flex space-x-1">
              <span>Responsible Group</span>
              <span className="text-gray-500 mt-2 pb-3 text-sm cursor-pointer">
                <Geo />
              </span>
            </div>
            <Scope />
            <a
              className="text-decoration-none detail pb-3 text-sm absolute bottom-0 inline-block align-text-bottom"
              href="https://www.google.com"
            >
              More detail
            </a>
          </div>
        </div>
        {/* <!--Card 1--> */}
        <div className="rounded relative overflow-hidden  shadow-md">
          <div className="justify-center items-center flex flex-col">
            <div className="justify-center  text-2xl font-semibold items-center flex space-x-1">
              <span>Industry Use Cases</span>
              <span className="text-gray-500 mt-3 text-sm cursor-pointer">
                <Geo />
              </span>
            </div>
            <IndustryUseCases />
            <a
              className="text-decoration-none detail absolute bottom-3  inline-block align-text-bottom text-sm"
              href="https://www.google.com"
            >
              More detail
            </a>
          </div>
        </div>
      </div>
      <div className="p-10 space-y-6 bg-gray-200 text-2xl font grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1">
        <div className="justify-center text-3xl font-semibold items-center flex space-x-1">
          <span className="font-semibold ">Aggregation Insights</span>
          <span className="text-gray-500 mt-2 text-sm cursor-pointer">
            <Geo />
          </span>
        </div>
        <div className="rounded overflow-hidden  shadow-sm">
          <div className="text-black">
            <div className="rounded flex justify-center items-center  overflow-hidden ">
              <table class="GeneratedTablee text-2xl flex justify-center items-center  text-black bg-gray-200">
                <thead></thead>
                <tbody>
                  <tr className="text-2xl font-semibold  w-96 second-color">
                    <td>Total Risk Reduction ($)</td>
                    <td>Total Risk Reduction (%)</td>
                    <td>Residual Risk ($)</td>
                    <td>Total Implementation Cost($)</td>
                    <td>Computed ROI(%)</td>
                  </tr>
                  <tr>
                    <td>-14,568,509.93</td>
                    <td>-41.62</td>
                    <td>21,000,000.00</td>
                    <td>8,025,000</td>
                    <td>75</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <a
            className="detail text-decoration-none mt-2 pb-2 justify-center text-sm flex items-center"
            href="https://www.google.com"
          >
            More Detail
          </a>
        </div>
      </div>
    </div>
  );
};

export default ControlMain;
