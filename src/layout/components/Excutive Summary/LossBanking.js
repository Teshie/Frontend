import React from "react";
import { VictoryPie } from "victory";
const LossBanking = () => {
  const data = [
    { x: "Legal", y: 30 },
    // { x: "Health and Safety", y: 5 },
    // { x: "Environmental", y: 40 },
    { x: "Regulatory", y: 30 },
    { x: "Other Costs", y: 40 },
    { x: "Data Breach", y: 30 },
  ];
  return (
    <div>
      <VictoryPie
        className="text-sm text-center"
        data={data}
        startAngle={130}
        endAngle={600}
        height={250}
        colorScale={["#f0c60e", "#e87c10", "#229466", "#3b2687", "#3D1D45"]}
      />
    </div>
  );
};

export default LossBanking;
