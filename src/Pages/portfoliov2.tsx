import NavWindowBox from "../components/NavWindowBox";
import PopUpWindow from "../components/PopUpWindow";
import "./portfoliov2.css";

import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function PortfolioV2() {
  const location = useLocation(); // Used to tell when the site changes to get rid of the deleteme popup
  const [popUpWindows, setPopUpWindows] = useState([{ title: "deleteme" }]);

  function createPopUp(title: string) {
    // If window does not already exist
    if (-1 == popUpWindows.findIndex((e) => e.title == title)) {
      // Make a new pop up window
      setPopUpWindows([...popUpWindows, { title: title }]);
    }
    // TODO: do some kind of alert if the window already exists
  }

  function removePopUp(title: string) {
    console.log("hello");
    setPopUpWindows(popUpWindows.filter((e) => e.title != title));
  }

  //Deletes the deleteme popup at whenever the page is loaded
  useEffect(() => {
    removePopUp("deleteme");
  }, [location]);

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
