import React from "react";
import Chart from "react-apexcharts";

const LossDistribution = () => {
  return (
    <div className="p-0 z-0">
      <Chart
        type="donut"
        width={400}
        height={400}
        series={[29.3, 0, 0, 44.9, 25.8]}
        options={{
          labels: [
            "Legal",
            "Health and Safety",
            "Environmental",
            "Regulatory",
            "Other Costs",
          ],
          colors: ["#062341", "#872646", "#229466", "#ce9f2c", "#00BFFF"],

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

export default LossDistribution;
