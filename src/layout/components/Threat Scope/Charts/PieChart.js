import React from "react";
import Chart from "react-apexcharts";
import "./styles.css";
const PieChartDonut = () => {
  return (
    <>
      <div className="height text-center mx-20">
        <Chart
          type="pie"
          width={240}
          height={200}
          series={[
            {
              name: "Asset Distribution by risk",
              data: [200, 300, 400],
            },
          ]}
          options={{
            colors: ["#04365d", "#ff0000", "#ff0000"],
            xaxis: {
              tickPlacement: "on",
              categories: ["Low", "Medium", "High"],
            },
            distributed: true,
          }}
        />
      </div>
    </>
  );
};

export default PieChartDonut;
