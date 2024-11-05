import { useState, useEffect } from "react";

let fullTitle = "u?ltradagon.github.io"; //Really not sure why the ? doesnt show up but for some reason index 1 isnt typed
let typingIndex = -3;
let cursorTimer = 20;
let mistakeIndex = Math.floor(Math.random() * (fullTitle.length - 4) + 2);
let mistakeChar = "abcdeghijklmnopqrstuvwxyz".charAt(
  Math.floor(Math.random() * 25)
);
let mistakeDuration = Math.floor(
  Math.random() * (fullTitle.length - mistakeIndex - 2) + 1
);
let mistakeNoticed = false;
let pause = 0;

function SiteTitle() {
  const [title, setTitle] = useState(" ");
  const [cursor, setCursor] = useState("_");

  function Reset() {
    setTitle("");
    typingIndex = -3;
    cursorTimer = 20;
    mistakeIndex = Math.floor(Math.random() * (fullTitle.length - 4) + 2);
    mistakeChar = "abcdeghijklmnopqrstuvwxyz".charAt(
      Math.floor(Math.random() * 25)
    );
    mistakeDuration = Math.floor(
      Math.random() * (fullTitle.length - mistakeIndex - 2) + 1
    );
    mistakeNoticed = false;
  }

  useEffect(() => {
    // Typing out the title
    let interval = 0;

    interval = setInterval(() => {
      if (document.readyState === "complete" && cursorTimer <= 10) {
        // If document is loaded and the cursor is ready
        if (0 <= typingIndex && typingIndex < fullTitle.length) {
          if (pause > 0) {
            //Paused (realizing mistake has happened)
            pause -= 1;
            typingIndex -= 1;
          } else if (typingIndex == mistakeIndex && !mistakeNoticed) {
            //Type mistake character
            setTitle((title) => title + mistakeChar);
          } else if (
            typingIndex == mistakeIndex + mistakeDuration &&
            !mistakeNoticed
          ) {
            //Mistake has been noticed (runs once)
            setTitle((title) => title + fullTitle.charAt(typingIndex));
            mistakeNoticed = true;
            pause = 5;
          } else if (mistakeNoticed && mistakeDuration >= 0) {
            //Backspacing to fix mistake
            setTitle((title) => title.slice(0, -1));
            mistakeDuration -= 1;
            typingIndex -= 2;
          } else {
            //Normal typing
            setTitle((title) => title + fullTitle.charAt(typingIndex)); // Adds the character for the current index to the current title
            cursorTimer = 10; // Reset Cursor timer
          }
        }
        typingIndex += 1;
      }

      //Blinking cursor
      cursorTimer -= 1;
      if (cursorTimer <= 10) {
        setCursor("_");
        if (cursorTimer === 0) cursorTimer = 20;
      } else {
        setCursor(" ");
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <h1 style={{ cursor: "pointer" }} onClick={Reset}>
      {title + cursor}
    </h1>
  );
}

export default SiteTitle;
