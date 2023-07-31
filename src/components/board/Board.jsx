import { Square } from "../export";

const Board = ({ board, onClick }) => {
  return (
    <div className="Board__">
      {board.map((value, index) => {
        const props = {
          key: index,
          value: value,
          onClick: () => value === null && onClick(index),
        };

        return <Square {...props} />;
      })}
    </div>
  );
};

export default Board;
