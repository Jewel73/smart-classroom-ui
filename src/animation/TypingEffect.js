import React, { useState, useEffect } from 'react';

const TypingEffect = ({ text, speed = 100, repeatDelay = 5000 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text.charAt(index));
        setIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setDisplayedText('');
        setIndex(0);
      }, repeatDelay);
      return () => clearTimeout(timeout);
    }
  }, [index, text, speed, repeatDelay]);

  return <h4 className="welcome-text text-end mb-2.5 text-6xl font-bold text-navy-700 dark:text-white">{displayedText}</h4>;
};

export default TypingEffect;
