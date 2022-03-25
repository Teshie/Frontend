import React from "react";
import Chart from "react-apexcharts";
const TopCyberThreats = () => {
  return (
    <div className="p-0">
      <Chart
        type="pie"
        width={380}
        height={400}
        series={[15, 25, 25]}
        options={{
          labels: ["Ransomware", "Fraud", "Misc."],
          colors: ["#00BFFF", "#ce9f2c", "#04365d"],
          stroke: {
            width: 0,
          },
          dataLabels: {
            enabled: true,
            formatter: function (val, opts) {
              /* Format labels here */
              return opts.w.config.series[opts.seriesIndex];
            },
          },
        }}
      />
    </div>
  );
};

export default TopCyberThreats;
