import React, { Component, useState } from "react";
import { Bar } from "react-chartjs-2";
import { confirmAlert } from "react-confirm-alert";
const Charts = ({ low, mid, high }) => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="App mt-3">
      <div style={{ maxWidth: "650px" }}>
        <Bar
          data={{
            // Name of the variables on x-axies for each bar
            labels: ["", "", ""],
            datasets: [
              {
                label: "Asset distribution by risk",
                data: [low, mid, high],
                backgroundColor: ["#00BFFF", "#04365d", "#ce9f2c"],
                fontSize: 24,
                borderColor: ["#00BFFF", "#04365d", "#ce9f2c"],
                borderWidth: 0.5,
              },
            ],
          }}
          height={200}
          width={350}
          options={{
            // onClick: function (evt, element) {
            //   if (element.length > 0) {
            //     var ind = element[0]._index;
            //     setModalOpen(true);
            //   }
            // },
            maintainAspectRatio: true,
            scales: {
              x: {
                fontSize: 24,
                ticks: {
                  beginAtZero: false,
                },
                grid: {
                  display: false,
                },
              },
              y: {
                ticks: {
                  beginAtZero: false,
                },
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
                display: false,
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
  );
};
export default Charts;
