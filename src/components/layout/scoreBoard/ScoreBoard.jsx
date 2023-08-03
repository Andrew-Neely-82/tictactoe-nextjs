import { playerColor, playerBorderX, playerBorderO } from "./styles";
import { DarkModeContext } from "@/context/DarkModeContext";
import { ButtonGroup, Button, Box } from "@mui/material";
import { visuallyHidden } from "@mui/utils";
import styles from "./style.module.scss";
import styled from "@emotion/styled";
import { useContext } from "react";

const ScoreBoard = ({ scores, xPlaying, onClick }) => {
  const { xScore, oScore } = scores;
  const { darkMode } = useContext(DarkModeContext);

  // * Button Score Styling

  const theme = `${darkMode ? "bg-custom-black" : "bg-custom-white"}`;

  const scoreBackgroundHover = darkMode ? "hover:contrast-125" : "hover:bg-bg-hover";
  const scoreX = `${playerColor}-red ${playerBorderX} ${scoreBackgroundHover}`;
  const scoreO = `${playerColor}-blue ${playerBorderO} ${scoreBackgroundHover}`;

  const StyledButton = styled(Button)({
    width: "100% !important",
    height: "64px !important",
    borderTop: "0px solid transparent !important",
    borderInline: "0px solid transparent !important",
    borderBottomWidth: "4px transparent !important",
    lineHeight: 2,
    ":hover": {},
  });

  return (
    <div className="mx-auto">
      <ButtonGroup className="flex justify-center items-center min-w-md w-80 border-rad m-auto my-12 shadow-md">
        <StyledButton className={`${theme} border-b-4 hover:border-t-transparent hover:border-x-transparent hover:border-solid hover:border-b-4 py-4 mx-auto transition-all ease-in-out ${scoreX} ${!xPlaying && styles.inactive}`} onClick={onClick}>
          X - {xScore}
          <Box sx={visuallyHidden}>X - {xScore}</Box>
        </StyledButton>
        <StyledButton className={`${theme} border-b-4 hover:border-t-transparent hover:border-x-transparent hover:border-solid hover:border-b-4 py-4 mx-auto transition-all ease-in-out ${scoreO} ${xPlaying && styles.inactive}`} onClick={onClick}>
          O - {oScore}
          <Box sx={visuallyHidden}> O - {oScore}</Box>
        </StyledButton>
      </ButtonGroup>
    </div>
  );
};

export default ScoreBoard;
