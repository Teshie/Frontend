import React from "react";
import Chart from "react-apexcharts";

const BusinessObjectiveControl = () => {
  return (
    <div className="p-0">
      <Chart
        type="pie"
        width={475}
        height={400}
        series={[8, 15, 8, 8, 15, 46]}
        options={{
          labels: [
            "Online Presence",
            "Regulations",
            "Cloud Migration",
            "Operational Efficiency",
            "New Product Launch",
            "Risk Reduction",
          ],
          colors: [
            "#f55211",
            "#8807de",
            "#192373",
            "#11c4f5",
            "#147d2b",
            "#ce9f2c",
          ],

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

export default BusinessObjectiveControl;
