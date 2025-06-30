import "./ExpandingConsoleText.css";

import { useState, useEffect, ReactElement } from "react";

interface Props {
  head: ReactElement | string;
  children: Array<ReactElement>;
}

function ExpandingConsoleText(props: Props) {
  const [expanding, setExpanding] = useState(false);
  const [childrenText, setChildrenText] = useState(<p></p>);
  const [childrenCount, setChildrenCount] = useState(0);

  // Timer
  useEffect(() => {
    let interval = 0;

    interval = setInterval(() => {
      if (expanding && childrenCount < props.children.length) {
        setChildrenCount(childrenCount + 1);
      }
      if (!expanding && childrenCount > 0) {
        setChildrenCount(childrenCount - 1);
      }

      setChildrenText(<>{props.children.slice(0, childrenCount)}</>);
    }, 100);

    return () => clearInterval(interval);
  }, [expanding, childrenText, childrenCount]);

  function Expand() {
    setExpanding(true);
  }

  function Contract() {
    setExpanding(false);
  }

  return (
    <div
      className="expanding-console-text"
      onMouseOver={Expand}
      onMouseOut={Contract}
    >
      {props.head}
      {expanding ? "/" : "\\"}
      {childrenText}
    </div>
  );
}

export default ExpandingConsoleText;
