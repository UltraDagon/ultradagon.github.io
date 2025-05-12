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

      /*childrenTextString +=
          "\n" +
          (i < childrenCount - 1 ? "|" : "`") +
          "--> " +
      props.children[i];*/

      setChildrenText(<p>{props.children.slice(0, childrenCount)}</p>);
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
    <p onMouseOver={Expand} onMouseOut={Contract}>
      {props.head}
      {expanding ? "/" : "\\"}
      {childrenText}
    </p>
  );
}

export default ExpandingConsoleText;
