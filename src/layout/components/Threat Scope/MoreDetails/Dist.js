import React, { useState } from "react";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

const Dist = () => {
  const [isShown, setIsShown] = useState(false);

  return (
    <div className="z-100">
      <button
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
      >
        <HelpOutlineIcon />
      </button>
      {isShown && (
        <div className="absolute bg z-100 -mx-10 -mt-32 text-white w-96  p-6 h-24">
          Count the distinct Assets by Risk from the Business Arch.<br></br>
          Model uploaded to the tool. amount.
        </div>
      )}
    </div>
  );
};

export default Dist;
