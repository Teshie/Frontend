import React from 'react';
import Chart from 'react-apexcharts';

const VendorTacticalDonut = () => {
  return (
    <div className="font relative z-10">
      <h1 className="chart_text absolute top-16 font-semibold text-md left-24 p-6">
        B
      </h1>
      <Chart
        type="donut"
        width={300}
        height={300}
        series={[20, 30, 20, 30, 20, 5, 20, 10, 20, 30, 7, 30, 10, 15, 20, 30]}
        options={{
          labels: ['Test One', 'Test Two'],
          colors: ['#062341', '#ce9f2c'],

          stroke: {
            width: 0,
          },

          dataLabels: {
            enabled: false,

            formatter: function (val, opts) {
              /* Format labels here */
              return opts.w.config.series[opts.seriesIndex];
            },
          },
          legend: {
            show: false,
          },
        }}
      />
    </div>
  );
};

export default VendorTacticalDonut;
