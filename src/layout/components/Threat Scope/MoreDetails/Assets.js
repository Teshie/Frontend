import React, { useState } from "react";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

const Assets = () => {
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
          Count the distinct Assets from the Business Arch. <br></br>Model
          uploaded to the tool
        </div>
      )}
    </div>
  );
};

export default Assets;
