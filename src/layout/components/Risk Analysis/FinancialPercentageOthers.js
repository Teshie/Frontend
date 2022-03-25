import React from "react";

const FinancialPercentagetest = ({ others }) => {
  return (
    <div>
      <p>{100 - Math.trunc(others)}</p>
    </div>
  );
};

export default FinancialPercentagetest;
