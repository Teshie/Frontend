import React, { useState } from "react";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

const Distribution = () => {
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
          Shows the distribution by different Risk categories. <br></br>{" "}
          Uploaded from the Excel 
        </div>
      )}
    </div>
  );
};

export default Distribution;
