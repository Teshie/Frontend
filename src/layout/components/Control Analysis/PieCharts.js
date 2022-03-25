import React from "react";
import Chart from "react-apexcharts";
const PieCharts = () => {
  return (
    <div className="p-0">
      <Chart
        type="doughnut"
        width={300}
        height={300}
        series={[800, 400, 200, 500]}
        options={{
          labels: ["Data Breach", "Fraud", "Misc", "Renc."],
        }}
      />
    </div>
  );
};

export default PieCharts;
