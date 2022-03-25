import React from "react";
import Chart from "react-apexcharts";

const BusinessObjectives = () => {
  return (
    <div className="p-0">
      <Chart
        className="z-0"
        type="donut"
        width={450}
        height={400}
        series={[15, 8, 8, 8, 46, 15]}
        options={{
          labels: [
            "New Product Launch",
            "Operational Efficiency",
            "Cloud Migration",
            "Online Presence",
            "Risk Reduction",
            "Regulations",
          ],
          colors: [
            "#04365d",
            "#e87c10",
            "#229466",
            "#872646",
            "#ce9f2c",
            "#00BFFF",
          ],
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

export default BusinessObjectives;
