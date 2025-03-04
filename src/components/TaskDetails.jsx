import React, { useState } from "react";
import "./TaskDetails.css";

function Square({ isExiting, onAnimationEnd }) {
  return (
    <div
      className={`square ${isExiting ? "exiting" : ""}`}
      onAnimationEnd={onAnimationEnd}  
    ></div>
  );
}

export default function TaskDetails({handleButtonClick}) {
  const [showSquare, setShowSquare] = useState(false); 
  const [isExiting, setIsExiting] = useState(false);
  const handleButtonClick = () => {
    if (showSquare) {
      setIsExiting(true);
    } else {
      setShowSquare(true);
    }
  };

  const handleAnimationEnd = () => {
    if (isExiting) {
      setShowSquare(false);
      setIsExiting(false);
    }
  };

  return (
    <div>
      {showSquare && (
        <Square
          isExiting={isExiting}
          onAnimationEnd={handleAnimationEnd}
        />
      )}

    </div>
  );
}