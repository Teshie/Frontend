import React from 'react';
import Chart from 'react-apexcharts';

const VendorTacticalRadial = ({ myValue }) => {
  return (
    <div>
      <Chart
        type="radialBar"
        width={300}
        height={360}
        series={[99, 99, 99]}
        options={{
          plotOptions: {
            radialBar: {
              hollow: {
                size: '30px',
              },
              dataLabels: {
                name: {
                  fontSize: '22px',
                },
                value: {
                  color: '#111',
                  fontSize: '36px',
                  show: true,
                },
                total: {
                  fontSize: '18px',
                  show: true,
                  label: 'Compliance',
                },
              },
            },
          },

          colors: ['#04365d', '#f7f7fc', '#f7f7fc', '#f7f7fc'],
        }}
      />
    </div>
  );
};

export default VendorTacticalRadial;
