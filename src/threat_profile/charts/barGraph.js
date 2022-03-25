import React from 'react';
import ReactApexChart from 'react-apexcharts';

function BarChart(params) {
  const series = [{
    name: params.name,
    data: params.data.values,
  }];
  const options = {
    chart: {
      type: 'bar',
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: 'bottom',
          },
        },
      },
    ],
    xaxis: {
      labels: {
        rotate: -45
      },
      categories: params.data.fields,
      tickPlacement: 'on'
    },
    yaxis: {
      title: {
        text: params.name,
      },
    },
    title: {
      text: params.title,
    },
  };

  return (
    <>
      <div id="chart">
        <ReactApexChart
          height={300}
          width={500}
          options={options}
          series={series}
          type="bar"
        />
      </div>
    </>
  );
}

export default BarChart;
