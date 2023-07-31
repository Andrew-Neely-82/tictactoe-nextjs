import { Button } from "@mui/material";
import tailwindConfig from "../../../../tailwind.config";

const Square = ({ value, onClick }) => {
  const x = "text-custom-red";
  const o = "text-custom-blue";
  const tailwind = "border-none rounded-10% shadow-md w-20 h-20 text-center text-5xl font-bold leading-20 m-2 bg-custom-white transform transition-transform ease-in-out hover:scale-110";

  const props = {
    className: `box ${value === "X" ? x : o} ${tailwind}`,
    variant: "contained",
    onClick: onClick,
  };

  return <Button {...props}>{value}</Button>;
};

export default Square;