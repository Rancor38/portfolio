import React, { useState, useEffect } from 'react';

function TypeOut({ inputString, time, typeSpeed }) {
  const [outputString, setOutputString] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {


    if (index === 0) {
      setTimeout(() => {
        setOutputString(outputString + inputString[index]);
          setIndex(index + 1);
      }, time || 0)
    }
      
    if (index > 0) {
      
      const intervalId = setInterval(() => {
        if (index < inputString.length) {
          setOutputString(outputString + inputString[index]);
          setIndex(index + 1);
        } else {
          clearInterval(intervalId);
        }
      }, typeSpeed || 25);
      
      return () => clearInterval(intervalId);
    }
  }, [inputString, index, outputString, time, typeSpeed]);

  return <>{outputString}</>;
}

export default TypeOut;

  