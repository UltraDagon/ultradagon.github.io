import { useState, useEffect, MouseEventHandler } from "react";
import ExpandingConsoleText from "./ExpandingConsoleText";
//import "./NavWindowBox.css";

//https://stackoverflow.com/questions/52005083/how-to-define-css-variables-in-style-attribute-in-react-and-typescript
declare module "react" {
  interface CSSProperties {
    [key: `--${string}`]: string | number;
  }
}

interface Props {
  xpos: number;
  ypos: number;
  width: number;
  height: number;
  onClickPopUp: Function;
}

function NavWindowBox(props: Props) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [mouseOldPosition, setOldMousePosition] = useState({ x: 0, y: 0 });
  const [grabbed, setGrabbed] = useState(false);
  const [xpos, setXpos] = useState(props.xpos);
  const [ypos, setYpos] = useState(props.ypos);
  const [tutorialFinished, setTutorialFinished] = useState(false);

  // Allows the window to be movable
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });

      if (grabbed) {
        setXpos(xpos + mousePosition.x - mouseOldPosition.x);
        setYpos(ypos + mousePosition.y - mouseOldPosition.y);
      } else {
        if (ypos < 0) setYpos(0);
        if (xpos < 0) setXpos(0);
      }

      setOldMousePosition(mousePosition);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", Release);
  }, [grabbed, xpos, ypos, mousePosition, mouseOldPosition]);

  function Grab() {
    setGrabbed(true);
  }

  function Release() {
    setGrabbed(false);
  }

  function clickPopUpLink(title: string) {
    let parentWindow = document.getElementById("nav-window-output");
    let width = 800;
    let height = 600;
    setTutorialFinished(true);

    if (parentWindow != null) {
      width = parentWindow.clientWidth;
      height = parentWindow.clientHeight;
    }

    props.onClickPopUp(title, xpos + 50, ypos + 50, width, height);
  }

  return (
    <div
      className="window"
      style={{
        "--xpos": (xpos > 0 ? xpos : 0) + "px",
        "--ypos": (ypos > 0 ? ypos : 0) + "px",
        "--width": props.width + "px",
        "--height": props.height + "px",
      }}
    >
      <div
        className={"header " + (grabbed ? "" : "un") + "grabbed"}
        onMouseDown={Grab}
        onMouseUp={Release}
      >
        <p>[C:\] C:\WINDOWS\system32\cmd.exe</p>
      </div>
      <div className="content">
        <div id="nav-window-output" className="output">
          <p>
            C:\WINDOWS\system32{">"}dir /b{"\n\n"}
          </p>
          <p>
            <span
              className={"pop-up-link" + (tutorialFinished ? "" : " tutorial")}
              onClick={() => clickPopUpLink("How To Use")}
            >
              how_to_use {tutorialFinished ? "" : "(click here)"}
            </span>
            {"\n\n"}
          </p>
          <p>about_me</p>
          <ExpandingConsoleText
            head={"socials"}
            children={[
              <p key={1}>
                |--{">"}{" "}
                <a href="https://github.com/UltraDagon" target="_blank">
                  GitHub
                </a>
              </p>,
              <p key={2}>
                |--{">"}{" "}
                <a href="https://linkedin.com/in/dagon-w" target="_blank">
                  LinkedIn
                </a>
              </p>,
              <p key={3}>
                `--{">"}{" "}
                <a href="mailto:dagon.williams@gmail.com" target="_blank">
                  Email
                </a>
              </p>,
            ]}
          />
          <ExpandingConsoleText
            head="projects"
            children={[
              <p
                key={1}
                onClick={() => clickPopUpLink("Poppy's Scuttle Slugging")}
              >
                |--{">"}{" "}
                <span className="pop-up-link">Poppy's_Scuttle_Slugging</span>
              </p>,
              <p
                key={2}
                onClick={() => clickPopUpLink("Operating Standards Project")}
              >
                |--{">"}{" "}
                <span className="pop-up-link">Operating_Standards_Project</span>
              </p>,
              <p key={3} onClick={() => clickPopUpLink("Portfolio Website")}>
                |--{">"} <span className="pop-up-link">Portfolio_Website</span>
              </p>,
              <p key={4} onClick={() => clickPopUpLink("No More Twitter Blue")}>
                |--{">"}{" "}
                <span className="pop-up-link">No_More_Twitter_Blue</span>
              </p>,
              <p
                key={5}
                onClick={() => clickPopUpLink("FIRST Robotics Scouting App")}
              >
                |--{">"}{" "}
                <span className="pop-up-link">FIRST_Robotics_Scouting_App</span>
              </p>,
              <p
                key={6}
                onClick={() => clickPopUpLink("Future's Market Banking")}
              >
                `--{">"}{" "}
                <span className="pop-up-link">Futures_Market_Banking</span>
              </p>,
            ]}
          />
          <br />
        </div>
        <div className="input">
          <p>
            C:\WINDOWS\system32{">"}start <span className="blink">_</span>
          </p>
        </div>
      </div>
    </div>
  );
}

/*
C:/ (Home)
../ (Go back)
about_me/
socials/
projects/ ((expands on hover, all 'text/' will have these little dropdown menus appear one line at a time))
|--> Project 1
|--> Project 2

*/

/*
When you select something that opens a pop-up window (PopUpWindow), it should type "start cmd /C folder/file", then "cls", "then dir /b"
*/

export default NavWindowBox;
