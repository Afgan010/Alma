const Controls = ({
  balance,
  bet,
  winnings,
  gameOver,
  onRestart,
  onCollect,
}) => {
  return (
    <div className="controls">
      <div className="stats">
        <p>Balance: ${balance}</p>
        <p>Bet: ${bet}</p>
        <p>Winnings: ${winnings}</p>
      </div>

      {!gameOver && winnings > 0 && (
        <button onClick={onCollect} className="collect-btn">
          Collect Winnings
        </button>
      )}

      {gameOver && (
        <button onClick={onRestart} className="restart-btn">
          Restart
        </button>
      )}
    </div>
  );
};

export default Controls;
