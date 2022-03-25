import React from "react";
import { Bar } from "react-chartjs-2";

const arbitraryStackKey = "stack1";

const StackedBarchart = () => {
  return (
    <>
      {/* <div className="text-center">
        <Chart
          type="bar"
          width={400}
          height={235}
          fontSize={64}
          series={[
            {
              name: "Operational",
              data: [15, 25],
              color: "#062341",
            },
            {
              name: "Health & Safety",
              data: [0, 0],
              color: "#229466",
            },
            {
              name: "Environmental",
              data: [0, 0],
              color: "#00BFFF",
              //colors
              // color: "#00BFFF",
              // color: "#229466",
              // color: "#ce9f2c",
              // color: "#062341",
            },
            {
              name: "Financial",
              data: [20, 50],
              color: "#ce9f2c",
            },
          ]}
          options={{
            // colors: ["#04365d", "#ffca00"],
            chart: {
              stacked: true,
            },
            xaxis: {
              tickPlacement: "on",
              categories: ["Incident", "Breach"],
            },
            legend: {
              fontSize: "14px",
            },
          }}
        />
      </div> */}
      <div className="App z-100 relative">
        <div>
          <Bar
            data={{
              // Name of the variables on x-axies for each bar
              // labels: ["Low", "Medium", "High"],
              labels: ["Incident", "Breach"],
              datasets:
                //   {
                //     // Label for bars
                //     label: "Asset distribution by risk",
                //     // Data or value of your each variable
                //     data: [3, 5, 10],
                //     // Color of each bar
                //     backgroundColor: ["#00BFFF", "#04365d", "#ce9f2c"],
                //     fontSize: 24,
                //     // Border color of each bar
                //     borderColor: ["#00BFFF", "#04365d", "#ce9f2c"],
                //     borderWidth: 0.5,
                //   },
                // ],
                [
                  {
                    stack: arbitraryStackKey,
                    label: "Operational",
                    backgroundColor: "#062341",
                    data: [15, 25],
                  },
                  {
                    stack: arbitraryStackKey,
                    label: "Health & Safety",
                    backgroundColor: "#229466",
                    data: [0, 0],
                  },
                  {
                    stack: arbitraryStackKey,
                    label: "Environmental",
                    backgroundColor: "#00BFFF",
                    data: [0, 0],
                  },
                  {
                    stack: arbitraryStackKey,
                    label: "Financial",
                    backgroundColor: "#ce9f2c",
                    data: [20, 50],
                  },
                ],
            }}
            // Height of graph
            height={220}
            width={300}
            options={{
              maintainAspectRatio: false,
              scales: {
                x: {
                  fontSize: 24,
                  grid: {
                    display: false,
                  },
                },
                y: {
                  grid: {
                    display: false,
                  },
                },
              },
              tooltips: {
                callbacks: {
                  label: function (tooltipItem) {
                    return tooltipItem.yLabel;
                  },
                },
              },
              plugins: {
                legend: {
                  display: true,
                  position: "bottom",
                },
              },
              legend: {
                labels: {
                  style: {
                    fontSize: "24px",
                  },
                },
              },
            }}
          />
        </div>
      </div>
    </>
  );
};

export default StackedBarchart;
