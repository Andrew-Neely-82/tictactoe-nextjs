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
  const effects = `transform transition-transform hover:scale-110`;
  const font = "text-center text-5xl font-bold";
  const border = "border-none rounded-10%";
  const tailwind = `${bgTheme} ${size} shadow-md ${font} ${border} ${effects}`;

  const sx = {
    fontSize: "48px !important",
    margin: "0.5rem !important",
  };

  const props = {
    sx: sx,
    variant: "contained",
    onClick: onClick,
  };

  return (
    <Button className={`${value === "X" ? x : o} ${tailwind}`} {...props}>
      {value}
    </Button>
  );
};

export default Square;
