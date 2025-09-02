import { useState, useEffect } from "react";

interface TypingTextProps {
  text: string;
  delay?: number;
  className?: string;
}

const TypingText = ({ text, delay = 100, className = "" }: TypingTextProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let currentIndex = 0;
    const timer = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayedText(text.substring(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(timer);
        // Hide cursor after typing is complete
        setTimeout(() => setShowCursor(false), 1000);
      }
    }, delay);

    return () => clearInterval(timer);
  }, [text, delay]);

  return (
    <span className={className}>
      {displayedText}
      {showCursor && <span className="typing-cursor">|</span>}
    </span>
  );
};

export default TypingText;