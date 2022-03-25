import React from "react";
import ReactApexChart from "react-apexcharts";

const PieChart = (params) => {
  let options = {
    chart: {
      type: "pie",
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
    labels: params.data.fields,
    title: {
      text: "Threats",
    },
    tooltip: {
      enabled: true,
    },
  };

  return (
    <>
      <div id="chart">
        <ReactApexChart
          height={300}
          width={500}
          options={options}
          series={params.data.values}
          type="donut"
        />
      </div>
    </>
  );
};

export default PieChart;
