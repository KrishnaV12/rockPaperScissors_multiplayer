import React, { useState } from "react";
import PlayerList from "./components/PlayerList";
import GameBoard from "./components/GameBoard";
import ScoreBoard from "./components/ScoreBoard";
import WaitingList from "./components/WaitingList";


function App() {
  const [players, setPlayers] = useState([]);
  const [currentGame, setCurrentGame] = useState({
    player1: null,
    player2: null,
  });
  const [waitingList, setWaitingList] = useState([]);
  console.log(waitingList , "waitingList");
  
  const [scores, setScores] = useState({});

  const addPlayer = (name) => {
    if (players.length < 2) {
      setPlayers([...players, name]);
      if (players.length === 1) {
        setCurrentGame({ ...currentGame, player2: name });
      } else {
        setCurrentGame({ player1: name });
      }
    } else {
      setWaitingList([...waitingList, name]);
    }
  };

  const updateScores = (winner) => {
    setScores({ ...scores, [winner]: (scores[winner] || 0) + 1 });
  };

  const onGameEnd = () => {
    if (waitingList.length > 0) {
      const nextPlayer = waitingList.shift();
      setCurrentGame({ player1: players[0], player2: nextPlayer });
      setPlayers([players[0], nextPlayer]);
    }
  };

  return (
    <div className="game_dashboard">
      <h1>Welcome to Rock Paper Scissors Game</h1>
      <PlayerList players={players} addPlayer={addPlayer} />
      <GameBoard
        currentGame={currentGame}
        onGameEnd={onGameEnd}
        updateScores={updateScores}
      />
      <ScoreBoard scores={scores} />
      <WaitingList waitingList={waitingList} />
    </div>
  );
}

export default App;
