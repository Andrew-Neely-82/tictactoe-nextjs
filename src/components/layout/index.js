export const WIN_CONDITIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export const playerSwitch = (xPlaying, setXPlaying) => {
  return () => {
    if (xPlaying === true) {
      setXPlaying(false);
    } else {
      setXPlaying(true);
    }
  };
};

export const resetTheBoard = (setGameOver, setBoard) => {
  return () => {
    setGameOver(false);
    setBoard(Array(9).fill(null));
  };
};

export const winnerCheck = (setGameOver) => {
  return (board) => {
    for (let i = 0; i < WIN_CONDITIONS.length; i++) {
      const [x, y, z] = WIN_CONDITIONS[i];

      if (board[x] && board[x] === board[y] && board[y] === board[z]) {
        setGameOver(true);
        return board[x];
      }
    }
  };
};

export const updateScores = (winner, scores, setScores) => {
  if (winner) {
    if (winner === "O") {
      let { oScore } = scores;
      oScore += 1;
      setScores({ ...scores, oScore });
    } else {
      let { xScore } = scores;
      xScore += 1;
      setScores({ ...scores, xScore });
    }
  }
};