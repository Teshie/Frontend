import React, { useState } from "react";
import RangeSlider from "react-bootstrap-range-slider";
import Child from "./Child";
import RiskAnalysis from "./RiskAnalysis";

const Slider = () => {
  const [value, setValue] = useState(0);
  const [display, setDisplay] = useState(false);
  return (
    <div className="flex mx-16">
      <div className="">Min</div>
      <RangeSlider
        value={value}
        min={0}
        max={10}
        onChange={(changeEvent) => setValue(changeEvent.target.value)}
      />
      <div className="">Max</div>
      {display ? <Child value={value} /> : null}
    </div>
  );
};

export default Slider;
