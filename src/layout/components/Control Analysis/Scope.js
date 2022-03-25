import React from "react";
import Chart from "react-apexcharts";

const Scope = () => {
  return (
    <div className="p-0">
      <Chart
        type="donut"
        width={422}
        height={400}
        series={[800, 400, 200, 500]}
        options={{
          labels: ["Business", "Cyber", "Technology", "Third-Party"],
          colors: ["#ce9f2c", "#11c4f5", "#147d2b", "#f55211"],
          stroke: {
            width: 0,
          },
          legend: {
            position: "right",
            fontSize: 12,
          },
        }}
      />
    </div>
  );
};

export default Scope;
