import React from "react";

const valueAnalysis = ({ percentValue }) => {
  return (
    <div>
      <p className="">{100 - percentValue}%</p>
    </div>
  );
};

export default valueAnalysis;
