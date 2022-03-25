import React from "react";
import Chart from "react-apexcharts";

const Test = ({ low, middle, high }) => {
  return (
    <div>
      <Chart
        type="bar"
        width={300}
        height={300}
        // series={[11, 22, 6, 6, 17, 22, 11, 6]}

        series={[
          {
            name: "Operational",
            data: [15, 25],
          },
          {
            name: "Health & Safety",
            data: [0, 0],
          },
          {
            name: "Environmental",
            data: [0, 0],
          },
          {
            name: "Financial",
            data: [20, 50],
          },
        ]}
        options={{
          labels: ["Incident", "Breach"],
          colors: ["#062341", "#229466", "#00BFFF", "#ce9f2c"],
          grid: {
            show: true, // you can either change hear to disable all grids
            xaxis: {
              lines: {
                show: false, //or just here to disable only x axis grids
              },
            },
            yaxis: {
              lines: {
                show: false, //or just here to disable only y axis
              },
            },
          },
          chart: {
            stacked: true,
            toolbar: {
              show: false,
            },

            zoom: {
              enabled: true,
            },
            responsive: [
              {
                breakpoint: 480,
                options: {
                  legend: {
                    position: "right",
                    offsetX: -10,
                    offsetY: 0,
                  },
                },
              },
            ],
            plotOptions: {
              bar: {
                horizontal: true,
                borderRadius: 10,
              },
            },
            dataLabels: {
              enabled: true,
              position: "top",
              formatter: function (val) {
                return val;
              },
              horizontal: true,
              offsetX: 0,
              style: {
                fontSize: "10px",
                colors: ["#000"],
              },
            },
            legend: {
              position: "right",
              offsetY: 40,
            },
            fill: {
              opacity: 1,
            },
            lables: {
              show: true,
            },
          },
        }}
      />
    </div>
  );
};

export default Test;
