import { scoreText, scoreBorder, scoreBorderHover, playerColor, playerBorderX, playerBorderO, flexBox } from "./styles";
import { DarkModeContext } from "@/context/DarkModeContext";
import { ButtonGroup, Button, Box } from "@mui/material";
import { visuallyHidden } from "@mui/utils";
import { useContext } from "react";
import styles from "./style.module.scss";

const ScoreBoard = ({ scores, xPlaying, onClick }) => {
  const { xScore, oScore } = scores;
  const { darkMode } = useContext(DarkModeContext);

  // * Button Group Styling - Don't touch
  const groupStyling = `${flexBox.join(" ")}`;

  // * Button Score Styling
  const scoreArray = scoreText.concat(scoreBorder, scoreBorderHover);

  const theme = `${darkMode ? "bg-custom-black" : "bg-custom-white"}`;
  const scoreStyling = `w-full ${theme} ${scoreArray.join(" ")} py-4 mx-auto transition-all	ease-in-out`;

  const scoreBackgroundHover = darkMode ? "hover:contrast-125" : "hover:bg-bg-hover";
  const scoreX = `${playerColor}-red ${playerBorderX} ${scoreBackgroundHover}`;
  const scoreO = `${playerColor}-blue ${playerBorderO} ${scoreBackgroundHover}`;

  return (
    <div className="mx-auto">
      <ButtonGroup className={groupStyling.concat('min-w-md w-80 border-rad m-auto my-12 shadow-md')}>
        <Button className={`${scoreStyling} ${scoreX} ${!xPlaying && styles.inactive}`} onClick={onClick}>
          X - {xScore}
          <Box sx={visuallyHidden}>X - {xScore}</Box>
        </Button>
        <Button className={`${scoreStyling} ${scoreO} ${xPlaying && styles.inactive}`} onClick={onClick}>
          O - {oScore}
          <Box sx={visuallyHidden}> O - {oScore}</Box>
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default ScoreBoard;
