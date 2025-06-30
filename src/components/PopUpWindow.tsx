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
      <div className="content">C-c-content</div>
    </div>
  );
}

export default PopUpWindow;
