import { Square } from "../export";

const Board = ({ board, onClick }) => {
  return (
    <div className="grid grid-cols-3 gap-x-1 justify-center">
      {board.map((value, key) => {
        const props = {
          value: value,
          onClick: () => value === null && onClick(key),
        };

        return <Square {...props} key={key} />;
      })}
    </div>
  );
};

export default Board;
