import React, { useState, useEffect } from 'react';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import VendorDetailsBrief from './VendorDetailsBrief';
import Pagination from './Pagination';
import { useSelector, useDispatch } from 'react-redux';
import ReactPaginate from 'react-paginate';
import './Modal.css';
import http from '../../../../resources/http';
import { Link } from 'react-router-dom';
import Dist from './Dist';

const VendersDetail = ({ textMe }) => {
  const selectedVendor = useSelector((state) => state.vendor);

  const [data, setData] = useState([]);
  const [datas, setDatas] = useState([]);
  const cpeValue = useSelector((state) => state.cpe);
  const selectedProduct = useSelector((state) => state.pr);
  const processId = useSelector((state) => state.id);
  let type = JSON.parse(localStorage.getItem('cyber-minds'));
  let clientID = type.user.client.id;
  const [pageNumber, setPageNumber] = useState(0);
  const baseURL =
    'https://cyberminds-backend.herokuapp.com/api/business_process/business-impact/cev-summery/' +
    cpeValue;

  const usersPerPage = 7;
  const pagesVisited = pageNumber * usersPerPage;

  useEffect(() => {
    http
      .get(
        'https://cyberminds-backend.herokuapp.com/api/business_process/get-business-impact-by-superuser/' +
          clientID +
          '/' +
          processId
      )
      .then((response) => {
        setDatas(response.data);
      })
      .then(
        (response) => {},
        (err) => {
          console.log('No Data To Show');
        }
      )
      .catch((err) => {
        return false;
      });
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
      );
  }, []);

  //Detail properties to displied for every product
  const critical = data
    ?.filter((vendors) => vendors?.severity === 'CRITICAL')
    .map((record) => record.severity);
  const high = data
    ?.filter((vendors) => vendors?.severity === 'HIGH')
    .map((record) => record.severity);
  console.log(high.length, 'length of high');
  const medium = data
    ?.filter((vendors) => vendors?.severity === 'MEDIUM')
    .map((record) => record.severity);
  const low = data
    ?.filter((vendors) => vendors?.severity === 'LOW')
    .map((record) => record.severity);
  console.log(selectedVendor, 'product new set');
  const DisplayCpeData = datas
    ?.filter((vendors) => vendors?.product === selectedProduct)
    .map((risk) => {
      return (
        <tr>
          <td className="product_color">{risk.product}</td>
          <td className="critical_color">{critical.length}</td>
          <td className="high_color">{high.length}</td>
          <td className="medium_color">{medium.length}</td>
          <td className="low_color">{low.length}</td>
        </tr>
      );
    });

  const DisplayData = data
    ?.slice(pagesVisited, pagesVisited + usersPerPage)
    .map((vender) => {
      return (
        <tr>
          <td className="color_id font-semibold">{vender?.VulnID}</td>
          <td className="table_width">{vender?.Summery[0]?.value}</td>
          <td>{vender?.exploitabilityScore}</td>
          <td>{vender?.severity}</td>
          <td>{vender?.impactScore}</td>
        </tr>
      );
    });

  const pageCount = Math.ceil(data?.result?.CVE_Items?.length / usersPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <div className="z-100 flex  justify-center relative space-x-16 items-center mt-10">
      <div className="text-black -mt-96">
        <div className="rounded overflow-hidden h-64 shadow-md flex flex-col  justify-center items-center">
          <div className="flex flex-col justify-center items-center space-y-4 table_width">
            <div className="flex space-x-4">
              <h3 className="text-4xl font-semibold">Vulnerability Heat Map</h3>{' '}
              <Dist />
            </div>
            <table className="text-white border_spacing GeneratedTableee spaceUnder border-separate border border-slate-900">
              <thead>
                <tr>
                  <th className="product_color">Product</th>
                  <th className="critical_color">Critical</th>
                  <th className="high_color">High</th>
                  <th className="medium_color">Medium</th>
                  <th className="low_color">Low</th>
                </tr>
              </thead>
              <tbody>{DisplayCpeData}</tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="text-black">
        <div className="rounded overflow-hidden flex  justify-center items-center">
          <table class="GeneratedTables">
            <thead>
              <tr>
                <th>Vuln ID</th>
                <th>Description Data</th>
                <th>Exploitability Score</th>
                <th>Severity</th>
                <th>Impact Score</th>
              </tr>
            </thead>
            <tbody>{DisplayData}</tbody>
          </table>
        </div>
        <div className="flex justify-end mx-96">
          <ReactPaginate
            previousLabel={'Previous'}
            nextLabel={'Next'}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={'paginationBttns'}
            previousLinkClassName={'previousBttn'}
            nextLinkClassName={'nextBttn'}
            disabledClassName={'paginationDisabled'}
            activeClassName={'paginationActive'}
          />
        </div>
      </div>
    </div>
  );
};

export default VendersDetail;
