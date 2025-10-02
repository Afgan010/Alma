import React, { useState } from "react";

const Cell = ({ isRotten, coef, onWin, onLose, gameOver }) => {
  const [revealed, setRevealed] = useState(false);

  const handleClick = () => {
    if (revealed || gameOver) return;
    setRevealed(true);
    if (isRotten) {
      onLose();
    } else {
      onWin(coef);
    }
  };

  return (
    <div
      className={`cell ${revealed ? (isRotten ? "rotten" : "apple") : ""}`}
      onClick={handleClick}
    >
      {revealed ? (isRotten ? "💀" : "🍎") : "❓"}
    </div>
  );
};

export default Cell;
