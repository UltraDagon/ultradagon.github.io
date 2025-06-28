import NavWindowBox from "../components/NavWindowBox";
import PopUpWindow from "../components/PopUpWindow";
import "./portfoliov2.css";

import React, { useState } from "react";

function PortfolioV2() {
  const [popUpWindows, setPopUpWindows] = useState([{ title: "deleteme" }]);

  function createPopUp(title: string) {
    setPopUpWindows([...popUpWindows, { title: title }]);
  }

  function removePopUp(title: string) {
    setPopUpWindows(popUpWindows.filter((e) => e.title != title));
  }

  window.onload = (event) => {
    removePopUp("deleteme");
  };

  return (
    <>
      <NavWindowBox
        onClickPopUp={createPopUp}
        xpos={40}
        ypos={100}
        width={800}
        height={600}
      />
      {popUpWindows.map((item) => (
        <PopUpWindow
          key={item.title}
          title={item.title}
          xpos={40}
          ypos={500}
          width={800}
          height={600}
        />
      ))}
    </>
  );
}

export default PortfolioV2;
