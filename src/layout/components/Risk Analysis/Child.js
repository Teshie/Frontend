import React from "react";

const Child = ({ value }) => {
  return (
    <div>
      <p>{100 - value}</p>
    </div>
  );
};

export default Child;
