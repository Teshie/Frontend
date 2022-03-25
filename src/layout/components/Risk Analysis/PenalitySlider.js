import React, { useState } from "react";
import RangeSlider from "react-bootstrap-range-slider";
import Child from "./Child";
const PenalitySlider = () => {
  const [value, setValue] = useState(0);
  const [display, setDisplay] = useState(false);
  return (
    <div className="flex justify-center items-center flex-col">
      <div className="">Penality ans fees</div>
      <div className="flex space-x-4">
        <div className="">0</div>
        <RangeSlider
          value={value}
          min={0}
          max={10}
          onChange={(changeEvent) => setValue(changeEvent.target.value)}
        />
        <div className="">10</div>
      </div>
      {display ? <Child value={value} /> : null}
    </div>
  );
};

export default PenalitySlider;
