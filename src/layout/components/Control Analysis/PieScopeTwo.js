import React from "react";
import { VictoryPie } from "victory";
const PieScopeTwo = () => {
  const data = [
    { x: "Legal", y: 60 },
    { x: "Health and Safety", y: 5 },
    { x: "Regulatory", y: 30 },
    { x: "Other Costs", y: 5 },
    { x: "Data Breach", y: 30 },
  ];
  return (
    <div>
      <VictoryPie
        className="text-sm text-center"
        data={data}
        startAngle={130}
        endAngle={600}
        height={300}
        colorScale={["#f0c60e", "#e87c10", "#229466", "#3b2687", "#3D1D45"]}
      />
    </div>
  );
};

export default PieScopeTwo;
