import React from "react";

const FinacialPercentage = ({ financialValue }) => {
  return (
    <div>
      <p>{100 - financialValue}</p>
    </div>
  );
};

export default FinacialPercentage;
