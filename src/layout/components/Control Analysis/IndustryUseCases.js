import React from "react";
import Chart from "react-apexcharts";

const IndustryUseCases = () => {
  return (
    <div>
      <Chart
        type="pie"
        width={500}
        height={400}
        series={[11, 22, 6, 6, 17, 22, 11, 6]}
        options={{
          labels: [
            "Zero-Trust",
            "Data Privacy",
            "Social Engineering",
            "Data Protection",
            "Supply Chain Management",
            "Ransomware",
            "Insider Threat",
            "Fraud",
          ],
          colors: [
            "#e87c10",
            "#ce9f2c",
            "#8807de",
            "#192373",
            "#11c4f5",
            "#147d2b",
            "#f55211",
            "#0055f2",
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

export default IndustryUseCases;
