import { useState } from "react";
import "./styles.css";
const RangeSliders = () => {
  const [rangeval, setRangeval] = useState(null);

  return (
    <div>
      <input
        type="range"
        className="text-green-500"
        min="199"
        max="3999"
        variant="text-green-500"
        onChange={(event) => setRangeval(event.target.value)}
      />
      <h4>The range value is {rangeval}</h4>
    </div>
  );
};

export default RangeSliders;
