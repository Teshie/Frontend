import React from "react";

const FinancialPercentagePenality = ({ penality }) => {
  return (
    <div>
      <p>{100 - penality}</p>
    </div>
  );
};

export default FinancialPercentagePenality;
