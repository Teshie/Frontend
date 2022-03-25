import React from "react";
import Chart from "react-apexcharts";

const TopAttackVector = () => {
  return (
    <div className="font">
      <Chart
        className="mx-96"
        type="pie"
        width={450}
        height={400}
        series={[30, 30, 30]}
        options={{
          labels: [
            "Stolen Credentials",
            "Business Disruption",
            "Data Compromise",
          ],
          colors: ["#ce9f2c", "#062341", "#00BFFF", "#229466"],
          //colors
          // color: "#00BFFF",
          // color: "#229466",
          // color: "#ce9f2c",
          // color: "#062341",
          stroke: {
            width: 0,
          },
          legend: {
            fontSize: "14px",
            position: "right",
            align: "start",
            padding: "0",
          },
        }}
      />
    </div>
  );
};

export default TopAttackVector;
