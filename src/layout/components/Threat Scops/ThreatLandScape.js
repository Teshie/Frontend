import React from "react";
import Chart from "react-apexcharts";

const ThreatLandScape = () => {
  return (
    <div className="p-0">
      <Chart
        type="donut"
        width={460}
        height={450}
        series={[20, 20, 10, 50]}
        options={{
          labels: [
            "Web Application Attacks ",
            "DDoS",
            "Malicious Code",
            "Others",
          ],
          colors: [
            "#062341",
            "#00BFFF",
            "#229466",
            "#ce9f2c",

            //colors
            // color: "#00BFFF",
            // color: "#229466",
            // color: "#ce9f2c",
            // color: "#062341",
          ],
          stroke: {
            width: 0,
          },
          legend: {
            fontSize: "14px",
          },
          ticks: {
            precision: 0,
          },
        }}
      />
    </div>
  );
};

export default ThreatLandScape;
