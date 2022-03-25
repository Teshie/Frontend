import React from "react";
import { VictoryPie } from "victory";
const PieScopeOne = () => {
  const data = [
    { x: "Ransomware", y: 10 },
    { x: "Fraud", y: 30 },
    { x: "Misc", y: 10 },
  ];
  return (
    <div>
      <VictoryPie
        className="text-sm text-center"
        data={data}
        startAngle={130}
        endAngle={600}
        height={300}
        colorScale={["#04365d", "#f0c60e", "#229466"]}
      />
    </div>
  );
};

export default PieScopeOne;
