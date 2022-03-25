import React from "react";

const CriticalPercentValue = ({ percentValue }) => {
  return (
    <div>
      <p>{100 - percentValue}</p>
    </div>
  );
};

export default CriticalPercentValue;
