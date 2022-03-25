import React, { useState } from "react";
import Slider from "react-smooth-range-input";
import "./rangeSlide.css";
const HoverExample = () => {
  return (
    <div class="container">
      <div class="slider">
        <input
          type="range"
          min="0"
          max="100"
          onchange="rangevalue.value=value"
        />
        <output id="rangevalue">60</output>
      </div>
    </div>
  );
};
export default HoverExample;
