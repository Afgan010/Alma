import React, { useState } from "react";
import Board from "./Board";
import Controls from "./Controls";

const AppleOfFortune = () => {
  const [balance, setBalance] = useState(100);
  const [bet, setBet] = useState(10);
  const [winnings, setWinnings] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [resetKey, setResetKey] = useState(0);
  const [currentRow, setCurrentRow] = useState(6);
  const [gameStarted, setGameStarted] = useState(false);

  const handleWin = (coef) => {
    setWinnings((prev) => +(prev - bet + bet * coef).toFixed(2));
  };

  const handleLose = () => {
    setBalance((prev) => prev - bet);
    setGameOver(true);
    setWinnings(0);
  };

  const addWinningsToBalance = () => {
    setBalance((prev) => +(prev + winnings).toFixed(2));
    setWinnings(0);
    setGameOver(true);
  };

  const restartGame = () => {
    setWinnings(0);
    setGameOver(false);
    setResetKey((k) => k + 1);
    setCurrentRow(6);
    setGameStarted(false);
  };

  const startGame = () => {
    if (bet > balance) return alert("Bet balance-dan çox ola bilməz!");
    setGameStarted(true);
  };

  return (
    <div className="apple-game">
      <h1>Apple Of Fortune</h1>

      {!gameStarted && (
        <div className="bet-selection">
          <p>Balance: ${balance}</p>
          <p>Choose your bet:</p>
          <input
            type="number"
            min="1"
            max={balance}
            value={bet === 0 ? "" : bet}
            onChange={(e) => {
              const val = e.target.value;
              if (val === "") {
                setBet(0);
              } else {
                setBet(Number(val));
              }
            }}
          />

          <button onClick={startGame}>Start Game</button>
        </div>
      )}

      {gameStarted && (
        <>
          <Controls
            balance={balance}
            bet={bet}
            winnings={winnings}
            gameOver={gameOver}
            onRestart={restartGame}
            onCollect={addWinningsToBalance}
          />

          <Board
            key={resetKey}
            onWin={handleWin}
            onLose={handleLose}
            gameOver={gameOver}
            currentRow={currentRow}
            setCurrentRow={setCurrentRow}
          />
        </>
      )}
    </div>
  );
};

export default AppleOfFortune;
