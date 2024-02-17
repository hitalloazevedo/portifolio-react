import React, { useState, useEffect } from "react";

const TypeWriter = ( {yourtext, letterDelay = 60, phraseDelay = 2000} ) => {
  const [text, setText] = useState("");
  const outputRef = React.useRef(null);

  const typeWriter = async (text) => {
    let textArray = text.split("");
    let stringReverse = [...textArray].reverse();

    while (true) {
      for (let l in textArray) {
        await delay(letterDelay);
        setText((prevText) => prevText + textArray[l]);
      }

      await delay(phraseDelay);

      for (let l in stringReverse) {
        await delay(letterDelay - 20);
        setText((prevText) => prevText.slice(0, -1));
      }

      await delay(phraseDelay);
    }
  };

  const delay = (time) => new Promise((resolve) => setTimeout(resolve, time));

  useEffect(() => {
    typeWriter(yourtext);
  }, []);

  return (
    <p
      className="console-output console-text"
      id="console-output"
      ref={outputRef}
    >
      &#62;&#62;&#62; {text}
    </p>
  );
};

export default TypeWriter;
