import React from "react";

const FinancialPercentageLegal = ({ legal }) => {
  return (
    <div>
      <p>{100 - legal}</p>
    </div>
  );
};

export default FinancialPercentageLegal;
