import React, { useState } from "react";

function GameBoard({ currentGame, onGameEnd, updateScores }) {
  const [steps, setSteps] = useState({ player1: null, player2: null });

  const makeYourMove = (player, choice) => {
    setSteps({ ...steps, [player]: choice });

    if (steps.player1 && steps.player2) {
      gamePlayResult();
    }
  };

  const gamePlayResult = () => {
    const { player1, player2 } = currentGame;
    const move1 = steps.player1;
    const move2 = steps.player2;

    if (move1 === move2) {
      alert("It's a tie!");
    } else if (
      (move1 === "rock" && move2 === "scissors") ||
      (move1 === "scissors" && move2 === "paper") ||
      (move1 === "paper" && move2 === "rock")
    ) {
      alert(`${player1} Hurray wins This Game !`);
      updateScores(player1);
    } else {
      alert(`${player2} Hurray wins This Game !`);
      updateScores(player2);
    }

    onGameEnd();
    setSteps({ player1: null, player2: null });
  };

  return (
    <div>
      <h2>Game Board</h2>
      <div>
        <h3>{currentGame.player1}'s Turn</h3>
        <button onClick={() => makeYourMove("player1", "rock")}>Rock</button>
        <button onClick={() => makeYourMove("player1", "paper")}>Paper</button>
        <button onClick={() => makeYourMove("player1", "scissors")}>
          Scissors
        </button>
      </div>
      <div>
        <h3>{currentGame.player2}'s Turn</h3>
        <button onClick={() => makeYourMove("player2", "rock")}>Rock</button>
        <button onClick={() => makeYourMove("player2", "paper")}>Paper</button>
        <button onClick={() => makeYourMove("player2", "scissors")}>
          Scissors
        </button>
      </div>
    </div>
  );
}

export default GameBoard;
