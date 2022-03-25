import React, { useState } from "react";
import RangeSlider from "react-bootstrap-range-slider";
import Child from "./Child";
const InteruptionSlider = () => {
  const [value, setValue] = useState(0);
  const [display, setDisplay] = useState(false);
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="">Business Interuption</div>
      <div className="flex space-x-4">
        <div className="">0</div>
        <RangeSlider
          value={value}
          min={0}
          max={5}
          onChange={(changeEvent) => setValue(changeEvent.target.value)}
        />
        <div className="">5</div>
      </div>
      {display ? <Child value={value} /> : null}
    </div>
  );
};

export default InteruptionSlider;
