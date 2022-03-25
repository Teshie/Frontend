import React, { useState } from "react";
import RangeSlider from "react-bootstrap-range-slider";
const StaticSlider = () => {
  const [value, setValue] = useState(0);
  const [display, setDisplay] = useState(false);
  return (
    <div className="flex mx-10 space-x-10 text-sm">
      <div className="flex space-x-4">
        <div className="">Min 0</div>
        <RangeSlider
          value={value}
          min={0}
          max={10}
          onChange={(changeEvent) => setValue(changeEvent.target.value)}
        />
        <div className="">10 Max </div>
      </div>
    </div>
  );
};

export default StaticSlider;
