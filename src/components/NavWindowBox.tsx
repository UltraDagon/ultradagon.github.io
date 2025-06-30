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

  // Allows the window to be movable
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });

      if (grabbed) {
        setXpos(xpos + mousePosition.x - mouseOldPosition.x);
        setYpos(ypos + mousePosition.y - mouseOldPosition.y);
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

  return (
    <div
      className="window"
      style={{
        "--xpos": xpos + "px",
        "--ypos": ypos + "px",
        "--width": props.width + "px",
        "--height": props.height + "px",
      }}
    >
      <div className="header" onMouseDown={Grab} onMouseUp={Release}>
        <p>[C:\] C:\WINDOWS\system32\cmd.exe</p>
      </div>
      <div className="content">
        <div className="output">
          <p>
            C:\{">"}dir /b{"\n\n"}
          </p>
          <p>C:\ (Home)</p>
          <p>..\ (Go Back){"\n\n"}</p>
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
                onClick={() =>
                  props.onClickPopUp("Operating Standards Project")
                }
              >
                |--{">"}{" "}
                <span className="popUpLink">Operating_Standards_Project</span>
              </p>,
              <p key={2}>|--{">"} Portfolio_Website</p>,
              <p key={3}>|--{">"} No_More_Twitter_Blue</p>,
              <p key={4}>`--{">"} FIRST_Robotics_Scouting_App</p>,
            ]}
          />
        </div>
        <div className="input">
          <p>
            C:\WINDOWS\system32{">"}
            <span className="blink">_</span>
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
