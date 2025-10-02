import Row from "./Row";

const coefPerRow = [8.5, 6.0, 4.0, 3.2, 2.3, 1.5, 1.1];
const rottenApplesConfig = {
  0: 4,
  1: 4,
  2: 3,
  3: 3,
  4: 2,
  5: 2,
  6: 1,
};

const Board = ({ onWin, onLose, gameOver, currentRow, setCurrentRow }) => {
  const rows = 7;
  const cols = 5;

  return (
    <div className="board">
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <Row
          key={rowIndex}
          rowIndex={rowIndex}
          cols={cols}
          rottenCount={rottenApplesConfig[rowIndex]}
          coef={coefPerRow[rowIndex]}
          onWin={onWin}
          onLose={onLose}
          gameOver={gameOver}
          currentRow={currentRow}
          setCurrentRow={setCurrentRow}
        />
      ))}
    </div>
  );
};

export default Board;
