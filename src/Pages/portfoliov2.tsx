import NavWindowBox from "../components/NavWindowBox";
import PopUpWindow from "../components/PopUpWindow";
import "./portfoliov2.css";

import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function PortfolioV2() {
  const location = useLocation(); // Used to tell when the site changes to get rid of the deleteme popup
  const [popUpWindows, setPopUpWindows] = useState([
    { title: "deleteme", xpos: -999, ypos: 0, width: 800, height: 600 },
  ]);

  function createPopUp(
    title: string,
    xpos: number,
    ypos: number,
    width: number,
    height: number
  ) {
    // If window does not already exist and there are less than 3 popUpWindows
    if (
      -1 == popUpWindows.findIndex((e) => e.title == title) &&
      popUpWindows.length < 3
    ) {
      // Make a new pop up window
      setPopUpWindows([
        ...popUpWindows,
        { title: title, xpos: xpos, ypos: ypos, width: width, height: height },
      ]);
    }
    // TODO: do some kind of alert if the window already exists
  }

  function removePopUp(title: string) {
    setPopUpWindows(popUpWindows.filter((e) => e.title != title));
  }

  //Deletes the deleteme popup at whenever the page is loaded
  useEffect(() => {
    removePopUp("deleteme");
  }, [location]);

  return (
    <>
      <h1 className="intro-text">
        Hello! This page is currently under development, but will be the general
        layout of my portfolio in the near future!
      </h1>
      <h2 className="intro-text">
        Also, the website's css in general is a bit messed up currently, but
        that won't be an issue once V2 is done.
      </h2>
      <NavWindowBox
        xpos={40}
        ypos={50}
        width={800}
        height={600}
        onClickPopUp={createPopUp}
      />
      {popUpWindows.map((item) => (
        <PopUpWindow
          key={item.title}
          title={item.title}
          xpos={item.xpos}
          ypos={item.ypos}
          width={item.width}
          height={item.height}
          onClickCloseWindow={removePopUp}
        />
      ))}
    </>
  );
}

export default PortfolioV2;
