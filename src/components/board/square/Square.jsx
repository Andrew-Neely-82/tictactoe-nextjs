import { DarkModeContext } from "@/context/DarkModeContext";
import { Button } from "@mui/material";
import { useContext } from "react";
import styled from "@emotion/styled";

const Square = ({ value, onClick }) => {
  const { darkMode } = useContext(DarkModeContext);

  const x = "text-custom-red";
  const o = "text-custom-blue";
  const size = "w-20 h-20";
  const bgTheme = `${darkMode ? "bg-custom-black" : "bg-custom-white"}`;
  const effects = `transform transition-transform transition-all ease-in-out hover:scale-110`;
  const font = "text-center text-5xl font-bold";
  const border = "border-none rounded-10%";
  const tailwind = `${bgTheme} ${size} shadow-md ${font} ${border} m-2 ${effects}`;

  const props = {
    className: `${value === "X" ? x : o} ${tailwind}`,
    variant: "contained",
    onClick: onClick,
  };

  return <Button {...props}>{value}</Button>;
};

export default Square;
