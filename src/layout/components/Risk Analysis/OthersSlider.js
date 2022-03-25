import React, { useState } from "react";
import RangeSlider from "react-bootstrap-range-slider";
import Child from "./Child";
import RiskAnalysis from "./RiskAnalysis";
import FinancialPercentageOthers from "./FinancialPercentageOthers";
const OthersSlider = () => {
  const [mvalue, setMValue] = useState(0);
  const [display, setDisplay] = useState(false);
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="">Others</div>
      <div className="flex space-x-4">
        <div className="">0</div>
        <RangeSlider
          mvalue={mvalue}
          min={0}
          max={15}
          onChange={(changeEvent) => setMValue(changeEvent.target.value)}
        />
        <div className="">15</div>
      </div>
      {display ? <FinancialPercentageOthers mvalue={mvalue} /> : null}
    </div>
  );
};

export default OthersSlider;
