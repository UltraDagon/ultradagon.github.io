import NavWindowBox from "../components/NavWindowBox";
import PopUpWindow from "../components/PopUpWindow";
import "./portfoliov2.css";

import React, { useState } from "react";

function PortfolioV2() {
  //const [popUpWindows, setPopUpWindows] = useState({});

  return (
    <>
      <NavWindowBox xpos={40} ypos={100} width={800} height={600} />
      <PopUpWindow xpos={40} ypos={500} width={800} height={600} />
    </>
  );
}

export default PortfolioV2;
