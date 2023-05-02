import React, { useState, useEffect } from 'react';

function TypeOut({ inputString }) {
  const [outputString, setOutputString] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (index < inputString.length) {
        setOutputString(outputString + inputString[index]);
        setIndex(index + 1);
      } else {
        clearInterval(intervalId);
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, [inputString, index, outputString]);

  return <div>{outputString}</div>;
}

export default TypeOut;

  