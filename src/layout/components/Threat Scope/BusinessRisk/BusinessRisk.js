import React from 'react';
import './Table.css';
import http from '../../../../resources/http';
import { useSelector } from 'react-redux';
import { id } from '../../../../auth/store/actions';
const BusinessRisk = () => {
  const processId = useSelector((state) => state.id);

  const baseURL = `https://cyberminds-backend.herokuapp.com/api/business_process/business-impact/${processId}`;
  const [data, setData] = React.useState({});
  React.useEffect(() => {
    http.get(baseURL).then((response) => {
      setData(response.data);
    });
  }, []);
  return (
    <div>
      <div className="text-black z-10">
        <div className="rounded overflow-hidden  justify-center items-center">
          <table class="GeneratedTableee text-black bg-gray-200">
            <thead></thead>
            <tbody className="text-2xl ">
              <tr>
                <td className="font-semibold">Operational</td>
                <td>10</td>
              </tr>
              <tr>
                <td className="font-semibold">Financial</td>
                <td>25</td>
              </tr>
              <tr>
                <td className="font-semibold">Regulatory</td>
                <td>{data.regulations + ''}</td>
              </tr>
              <tr>
                <td className="font-semibold">Health & Safety</td>
                <td>0</td>
              </tr>
              <tr>
                <td className="font-semibold">Environmental</td>
                <td>0</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BusinessRisk;
