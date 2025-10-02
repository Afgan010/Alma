import React, { useMemo } from "react";
import Cell from "./Cell";

const Row = ({
  rowIndex,
  cols,
  rottenCount,
  coef,
  onWin,
  onLose,
  gameOver,
  currentRow,
  setCurrentRow,
}) => {
  const rottenIndexes = useMemo(() => {
    const indexes = new Set();
    while (indexes.size < rottenCount) {
      indexes.add(Math.floor(Math.random() * cols));
    }
    return indexes;
  }, [cols, rottenCount]);

  const isActive = rowIndex === currentRow;

  const handleCellWin = (coef) => {
    onWin(coef);
    setCurrentRow((prev) => prev - 1);
  };

  return (
    <div className={`row ${!isActive ? "disabled" : ""}`}>
      <div className="cells">
        {Array.from({ length: cols }).map((_, colIndex) => (
          <Cell
            key={colIndex}
            isRotten={rottenIndexes.has(colIndex)}
            coef={coef}
            onWin={handleCellWin}
            onLose={onLose}
            gameOver={gameOver || !isActive}
          />
        ))}
      </div>
      <div className="coef">x{coef}</div>
    </div>
  );
};

export default Row;
