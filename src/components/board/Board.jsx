import { Square } from "../export";

const Board = ({ board, onClick }) => {
  const tailwind = "grid grid-cols-3 gap-x-1 justify-center my-10";

  return (
    <div className={tailwind}>
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
