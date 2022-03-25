import React from "react";
import Chart from "react-apexcharts";

const CurrentThreat = () => {
  return (
    <div className="p-0">
      <Chart
        type="pie"
        width={350}
        height={650}
        series={[40, 10, 9, 20, 1, 20]}
        options={{
          labels: [
            "Stolen card",
            "Regulation",
            "48.5",
            "Hello World",
            "Others",
            "Malware code",
          ],
        }}
      />
    </div>
  );
};

export default CurrentThreat;
