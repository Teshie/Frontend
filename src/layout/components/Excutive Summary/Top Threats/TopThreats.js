import React from "react";
import Chart from "react-apexcharts";
const TopThreats = () => {
  return (
    <div className="p-0">
      <Chart
        type="donut"
        width={400}
        height={400}
        series={[800, 400, 200, 500]}
        options={{
          labels: ["Data Breach", "Fraud", "Misc", "Renc."],
          colors: ["#e87c10", "#f0c60e", "#801134", "#192373", "#872646"],
          stroke: {
            width: 0,
          },
        }}
      />
    </div>
  );
};

export default TopThreats;
