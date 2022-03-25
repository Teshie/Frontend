import React, { useState } from "react";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

const Geo = () => {
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
        <div className="absolute bg z-100 -mx-48 -mt-32 text-white w-96  p-6 h-24">
          Marks the regions (Local or Global) where the processes are run
        </div>
      )}
    </div>
  );
};

export default Geo;
