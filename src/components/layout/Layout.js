import { playerSwitch, resetTheBoard, updateScores, winnerCheck } from ".";
import { useState } from "react";
import { Board, Controls, ScoreBoard } from "../export";

const Layout = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xPlaying, setXPlaying] = useState(true);
  const [scores, setScores] = useState({ xScore: 0, oScore: 0 });
  const [gameOver, setGameOver] = useState(false);

  const handleBoxClick = (boxIndex) => {
    const updatedBoard = board.map((val, index) => {
      if (index === boxIndex) {
        return xPlaying === true ? "X" : "O";
      } else {
        return val;
      }
    });

    const winner = checkWinner(updateScores);
  };

  const clearScores = () => {
    return setScores({ xScore: 0, oScore: 0 });
  };

  const checkWinner = winnerCheck(setGameOver);
  const resetBoard = resetTheBoard(setGameOver, setBoard);
  const switchPlayer = playerSwitch(xPlaying, setXPlaying);

  return (
    <>
      <ScoreBoard scores={scores} xPlaying={xPlaying} onClick={switchPlayer} />
      {/* <Board board={board} onClick={gameOver ? resetBoard : handleBoxClick} /> */}
      <Controls resetBoard={resetBoard} clearScore={clearScores} />
    </>
  );
};

export default Layout;
