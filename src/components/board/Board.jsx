import { Square } from "../export";

const Board = ({ board, onClick }) => {
  return (
    <div className="grid grid-cols-3 gap-x-1 justify-center">
      {board.map((value, index) => {
        const props = {
          value: value,
          onClick: () => value === null && onClick(index),
        };

        return <Square className="" {...props} key={index} />;
      })}
    </div>
  );
};

export default Board;
