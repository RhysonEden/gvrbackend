import React, { useEffect } from "react";

const GuideScreen = () => {
  useEffect(() => {
    sessionStorage.setItem("searchbar", "true");
  }, []);
  const mde = () => {
    window.open(
      "https://drive.google.com/file/d/1GHFLPiND2ggRGleALID1eZXy_oSYhOMu/view",
      "_blank"
    );
  };
  const netGuide = () => {
    window.open(
      "https://drive.google.com/file/d/1z3EFoIjVx26gHbCdz9kDZnQRqhYl7jSb/view",
      "_blank"
    );
  };
  return (
    <div className="guides">
      <button className="guidebutton" onClick={mde}>
        Insite 360 Guide MDE-5314
      </button>
      <button className="guidebutton" onClick={netGuide}>
        Insite 360 Connectivity Troubleshooting Guide
      </button>
    </div>
  );
};

export default GuideScreen;
