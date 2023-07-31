import { Square } from "../export";

const Board = ({ board, onClick }) => {
  const flexbox = ["grid", "grid-cols-3", "justify-center"];
  const tailwind = `${flexbox.join(" ")} w-fit my-10 m-auto`;

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
