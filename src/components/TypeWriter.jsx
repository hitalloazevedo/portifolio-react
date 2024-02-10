import React, { useState, useEffect } from 'react';

const TypeWriter = () => {
  const [text, setText] = useState('');
  const outputRef = React.useRef(null);

  const typeWriter = async (text) => {
    let textArray = text.split('');
    let stringReverse = [...textArray].reverse();

    while (true) {
      for (let l in textArray) {
        await delay(60);
        setText(prevText => prevText + textArray[l]);
      }

      await delay(2000);

      for (let l in stringReverse) {
        await delay(40);
        setText(prevText => prevText.slice(0, -1));
      }

      await delay(2000);
    }
  };

  const delay = (time) => new Promise(resolve => setTimeout(resolve, time));

  useEffect(() => {
    typeWriter('Welcome to my portfolio website!');
  }, []);

  return <p className='console-output console-text' id="console-output" ref={outputRef}>&#62;&#62;&#62;{text}</p>;
};

export default TypeWriter;