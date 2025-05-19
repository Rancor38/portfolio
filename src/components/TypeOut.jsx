import React, { useState, useEffect } from 'react';

function TypeOut({ inputString, time, typeSpeed, onComplete }) {
  const [outputString, setOutputString] = useState('');
  const [index, setIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  // Safely extract text content from inputString
  const extractTextContent = (input) => {
    if (typeof input === 'string') {
      return input;
    }
    if (!input) {
      return '';
    }
    // Handle React elements
    if (React.isValidElement(input)) {
      if (typeof input.props.children === 'string') {
        return input.props.children;
      }
      if (Array.isArray(input.props.children)) {
        return input.props.children
          .map(child => extractTextContent(child))
          .join('');
      }
      return extractTextContent(input.props.children);
    }
    // Handle array of elements
    if (Array.isArray(input)) {
      return input.map(item => extractTextContent(item)).join('');
    }
    return '';
  };

  // Process the input string safely
  const processedInputString = extractTextContent(inputString);

  useEffect(() => {
    if (index === 0 && processedInputString.length > 0) {
      setTimeout(() => {
        setOutputString(outputString + processedInputString[index]);
        setIndex(index + 1);
      }, time || 0);
    }

    if (index > 0) {
      const intervalId = setInterval(() => {
        if (index < processedInputString.length) {
          setOutputString(outputString + processedInputString[index]);
          setIndex(index + 1);
        } else {
          clearInterval(intervalId);
          setIsTyping(false);
          // Notify parent component when typing is complete
          if (onComplete) onComplete();
        }
      }, typeSpeed || 25);

      return () => clearInterval(intervalId);
    }
  }, [processedInputString, index, outputString, time, typeSpeed, onComplete]);

  // Simple typed text with cursor
  return (
    <span className={isTyping ? 'typing-animation' : 'typing-done'}>
      {outputString}
      <span className="cursor"></span>
    </span>
  );
}

export default TypeOut;

