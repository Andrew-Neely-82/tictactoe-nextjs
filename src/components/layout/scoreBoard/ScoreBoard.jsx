import { DarkModeContext } from "@/context/DarkModeContext";
import { ButtonGroup, Button, Box } from "@mui/material";
import { visuallyHidden } from "@mui/utils";
import { useContext } from "react";
import styles from "./style.module.scss"; // Import the local style module


const ScoreBoard = ({ scores, xPlaying, onClick }) => {
  const { xScore, oScore } = scores;
  const { darkMode } = useContext(DarkModeContext);

  // * Button Group Styling - Don't touch
  const flexBox = ["flex", "justify-center", "items-center"];
  const groupStyling = `${flexBox.join(" ")} max-w-xs border-rad m-auto my-12`;

  // * Button Score Styling
  const scoreText = ["text-base", "font-bold"];
  const scoreBorder = ["border-l-transparent", "border-solid", "border-b-4", "hover:border-b"];
  const scoreArray = scoreText.concat(scoreBorder);

  const theme = `${darkMode ? "bg-custom-black" : " bg-custom-white"}`;
  const scoreStyling = `w-full ${theme} ${scoreArray.join(" ")} py-4 mx-auto`;

  const playerColor = "text-custom";
  const playerBorderX = "border-b-custom-red";
  const playerBorderO = "border-b-custom-blue";
  const scoreX = `${playerColor}-red ${playerBorderX}`;
  const scoreO = `${playerColor}-blue ${playerBorderO}`;

  const inactive = "border-b-4 border-solid border-b-transparent";

  return (
    <div className="mx-auto">
      <ButtonGroup className={groupStyling}>
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
