import { useState, useEffect } from "react";

declare module "react" {
  interface CSSProperties {
    [key: `--${string}`]: string | number;
  }
}

interface Props {
  title: string;
  xpos: number;
  ypos: number;
  width: number;
  height: number;
  onClickCloseWindow: Function;
}

const popupContent = new Map([
  [
    "Operating Standards Project",
    <div className="content popup-content">
      <a
        href="https://github.com/UltraDagon/ultradagon.github.io"
        target="_blank"
        className="github-link"
      >
        View on GitHub!
      </a>
      <br></br>
      <p>
        "Operating Standards Update" is a tool used to transfer data from
        meeting minutes taken on a Google Doc into a Google Sheet.
      </p>
    </div>,
  ],
  [
    "Poppy's Scuttle Slugging",
    <div className="content popup-content">
      <a
        href="https://github.com/UltraDagon/PoppysScuttleSlugging"
        target="_blank"
        className="github-link"
      >
        View on GitHub!
      </a>
      <br></br>
      <p>
        "Poppy's Scuttle Slugging" is the name of a fan game I made over the
        summer of 2025. It was written with C++ using the SDL2 library for
        graphics, and was inspired by Riot Games's{" "}
        <a href="https://www.leagueoflegends.com/en-us/" target="_blank">
          League of Legends
        </a>{" "}
        and Juicy Beast's{" "}
        <a href="https://burritobison.com/" target="_blank">
          Burrito Bison
        </a>
        .
      </p>
    </div>,
  ],
]);

function PopUpWindow(props: Props) {
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
      <div className="header" onMouseDown={Grab} onMouseUp={Release}>
        <p>
          {props.title}
          <button
            className="close"
            onClick={() => props.onClickCloseWindow(props.title)}
          >
            &#128473;
          </button>
          <button>&#128470;</button>
          <button>&#128469;</button>
        </p>
      </div>
      {popupContent.get(props.title)}
    </div>
  );
}

export default PopUpWindow;
