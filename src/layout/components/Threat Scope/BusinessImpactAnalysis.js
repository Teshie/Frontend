import React, { useEffect, useState } from "react";
import BusinessRisk from "./BusinessRisk/BusinessRisk";
import "./multiRangeSlider.css";
import "./styles.css";
import MapChart from "./MapChart";
import WorldMap from "./WorldMap";
import Charts from "./BarChart";
import Vend from "./MoreDetails/Vend";
import Geo from "./MoreDetails/Geo";
import { Button, Modal } from "react-bootstrap";
import { useHistory } from "react-router";
import "react-confirm-alert/src/react-confirm-alert.css";
import { Link } from "react-router-dom";
import AssetDetails from "./MoreDetails/AssetDetails";
import VendorDetailsBrief from "./MoreDetails/VendorDetailsBrief";
import RiskDetails from "./MoreDetails/RiskDetails";
import { useSelector, useDispatch } from "react-redux";
import {
  lowRisk,
  mediumRisk,
  highRisk,
} from "./../../../auth/store/actions/index";
import http from "../../../resources/http";
const BusinessImpactAnalysis = () => {
  const processId = useSelector((state) => state.id);
  const processName = useSelector((state) => state.name);

  const baseURL = `https://cyberminds-backend.herokuapp.com/api/business_process/business-impact/${processId}`;
  const [data, setData] = useState({});
  const history = useHistory();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalRiskOpen, setModalRiskOpen] = useState(false);
  const [modalOpenVendors, setModalOpenVendors] = useState(false);
  const [hide, setHide] = useState(false);
  const value = useSelector((state) => state.assetRisk);
  const [datas, setDatas] = useState([]);
  const [modal, setModal] = useState(false);
  const showModal = () => setModal(!modal);

  const [modalVendor, setModalVendor] = useState(false);
  const showModalVendor = () => setModalVendor(!modalVendor);
  const [modalAsset, setModalAsset] = useState(false);
  const showModalAsset = () => setModalAsset(!modalAsset);

  const dispatch = useDispatch();
  useEffect(() => {
    http
      .get(baseURL)
      .then((response) => {
        setData(response.data);
      })
      .then(
        (response) => {},
        (err) => {
          console.log(err);
        }
      )
      .catch((err) => {
        return false;
      });
  }, []);
  http
    .get(
      "https://cyberminds-backend.herokuapp.com/api/business_process/get-business-impact/" +
        processId
    )
    .then((response) => {
      setDatas(response.data);
    })
    .then(
      (response) => {},
      (err) => {
        console.log("No Data To Show");
      }
    )
    .catch((err) => {
      return false;
    });
  console.log("Your data here", datas);
  try {
    var asset = data.assets;

    var low = data.asset_risks?.find((obj) => obj.total_Low).total_Low;
    var medium = data.asset_risks?.find((obj) => obj.total_Medium).total_Medium;
    var high = data.asset_risks?.find((obj) => obj.total_High).total_High;
  } catch (err) {
    console.log("No data to show");
  }

  return (
    <>
      {asset < 1 ? (
        <h3 className="font bg-gray-200 color flex justify-center items-center text-red">
          <span className="">No Data to show for {processName}</span>
        </h3>
      ) : (
        hide
      )}

      <div className="p-5 font rounded-lg bg-gray-200 text-center  grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3  gap-4">
        <div className="rounded  relative flex justify-center items-center   overflow-hidden shadow-sm">
          <div className="space-y-20 -mt-20 flex flex-col vendor-width">
            <span className="flex justify-center items-center space-x-1 text-4xl px-3 py-1 font-semibold max-w-lg mr-2 mb-2">
              <span>Business Assets</span>
              <span className="text-gray-500 text-sm cursor-pointer">
                <Vend />
              </span>
            </span>
            <span className="inline-block  text-6xl  font-semibold max-w-lg mr-2 mb-2">
              {data.assets}
            </span>
          </div>

          <a className="text-decoration-none detail bottom-3 absolute flex justify-center items-center align-text-bottom">
            <Link
              onClick={() => showModalAsset()}
              className="text-decoration-none detail  flex justify-center items-center align-text-bottom"
              to="#"
            >
              More detail
            </Link>
          </a>
        </div>
        <div className="z-99 rounded-lg  relative flex justify-center items-center  overflow-hidden shadow-sm">
          <div className="space-y-20 -mt-20 flex flex-col vendor-width">
            <span className="flex  justify-center items-center space-x-1 text-4xl px-3 py-1 font-semibold max-w-lg mr-2 mb-2">
              <span>Vendors</span>
              <span className="text-gray-500 text-sm cursor-pointer">
                <Vend />
              </span>
            </span>
            <span className="inline-block  text-6xl  px-3 py-1 font-semibold max-w-lg mr-2 mb-2">
              {data.vendors}
            </span>
          </div>
          <a className="text-decoration-none detail bottom-3 absolute flex justify-center items-center align-text-bottom">
            <Link
              onClick={() => showModalVendor()}
              className="text-decoration-none detail  flex justify-center items-center align-text-bottom"
              to="#"
            >
              More detail
            </Link>
          </a>
        </div>

        <div className="rounded-lg    relative h-row-one space-y-16 flex justify-center items-center flex-col  overflow-hidden shadow-sm">
          <div className="">
            <span className="flex justify-center items-center space-x-0 text-4xl font-semibold ">
              <span>Asset Distribution by Risk</span>
              <span className="text-gray-500  text-sm cursor-pointer">
                <Vend />
              </span>
            </span>
          </div>
          <div className="table_width_risk">
            <table className=" text-white border_spacing GeneratedTable spaceUnder border-separate border border-slate-900">
              <thead>
                <tr>
                  <th className="high_color p-7">High</th>
                  <th className="medium_color p-7">Medium</th>
                  <th className="low_color p-7">Low</th>
                </tr>
              </thead>
              <tbody>
                {" "}
                <tr>
                  <td className="high_color ">{high}</td>
                  <td className="medium_color ">{medium}</td>
                  <td className="low_color ">{low}</td>
                </tr>
              </tbody>
            </table>
            {/* <Charts low={low} mid={medium} high={high} />
            <div className="flex mx-16 absolute bottom-6 space-x-16 text-sm">
              <p
                onClick={() => {
                  dispatch(lowRisk());
                  showModal();
                }}
                className="cursor-pointer"
              >
                Low
              </p>
              <p
                onClick={() => {
                  dispatch(mediumRisk());
                  showModal();
                }}
                className="cursor-pointer"
              >
                Medium
              </p>
              <p
                onClick={() => {
                  dispatch(highRisk());
                  showModal();
                }}
                className="cursor-pointer"
              >
                High
              </p>
            </div> */}
          </div>
          <a
            className="text-decoration-none detail bottom-3 absolute flex justify-center items-center align-text-bottom"
            href="https://www.google.com"
          >
            More detail
          </a>
        </div>
      </div>
      <div className="p-5 -mt-10 font rounded-lg bg-gray-200 text-center font-sans grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1  gap-4">
        <div className="  rounded h-96 relative shadow-md flex justify-center items-center flex-col overflow-hidden ">
          <span className="top-6 absolute flex justify-center items-center  text-4xl  font-semibold ">
            <span className="flex flex-col ">
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
            <div class="flex flex-col">
              <div class="overflow-x-auto ">
                <div class="py-4 inline-block min-w-full sm:px-3 lg:px-8">
                  <div class="overflow-hidden">
                    <table class="min-w-full text-center">
                      <thead class="border-b bg-gray-50 text-md">
                        <tr className="text-[100px] bg-white">
                          <th scope="col" class=" font-medium text-gray-900">
                            Operational
                          </th>
                          <th
                            scope="col"
                            class=" font-medium text-gray-900 px-3 py-4"
                          >
                            Financial
                          </th>
                          <th
                            scope="col"
                            class=" font-medium text-gray-900 px-3 py-4"
                          >
                            Regulatory
                          </th>
                          <th
                            scope="col"
                            class=" font-medium text-gray-900 px-3 py-4"
                          >
                            Health & Safety
                          </th>
                          <th
                            scope="col"
                            class=" font-medium text-gray-900 px-3 py-4"
                          >
                            Environmental
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr class=" border-b">
                          <td class="px-3 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            10
                          </td>
                          <td class=" text-gray-900 font-light px-3 py-4 whitespace-nowrap">
                            25
                          </td>
                          <td class=" text-gray-900 font-light px-3 py-4 whitespace-nowrap">
                            0
                          </td>
                          <td class=" text-gray-900 font-light px-3 py-4 whitespace-nowrap">
                            <td>{data.regulations + ""}</td>
                          </td>
                          <td class=" text-gray-900 font-light px-3 py-4 whitespace-nowrap">
                            0{" "}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a
            className="text-decoration-none detail bottom-3 absolute flex justify-center items-center align-text-bottom"
            href="https://www.google.com"
          >
            More detail
          </a>
        </div>
      </div>
      <div className="p-5 -mt-10 font rounded-lg bg-gray-200 text-center font-sans grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1  gap-4">
        <div></div>
        <div className="">
          <WorldMap />
        </div>
      </div>
      <Modal show={modal} className="mt-1">
        <Modal.Header closeButton onClick={() => showModal()}>
          <Modal.Title>{value} Risk Deatils</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <RiskDetails />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => showModal()}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={modalVendor} className="h-6">
        <Modal.Header closeButton onClick={() => showModalVendor()}>
          <Modal.Title>Vendor Detail</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <VendorDetailsBrief />
        </Modal.Body>
      </Modal>
      <Modal show={modalAsset} className="h-6">
        <Modal.Header closeButton onClick={() => showModalAsset()}>
          <Modal.Title>Asset Details</Modal.Title>
        </Modal.Header>
        <Modal.Body className="-mt-10">
          <AssetDetails />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default BusinessImpactAnalysis;
