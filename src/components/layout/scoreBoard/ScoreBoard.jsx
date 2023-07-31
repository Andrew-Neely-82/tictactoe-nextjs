import { ButtonGroup, Button, Box } from "@mui/material";
import { visuallyHidden } from "@mui/utils";

const ScoreBoard = ({ scores, xPlaying, onClick }) => {
  const { xScore, oScore } = scores;

  return (
    <div className="ScoreBoard__">
      <ButtonGroup className="ScoreBoard__group shadow">
        <Button className={`score score-x ${!xPlaying && "inactive"}`} onClick={onClick}>
          X - {xScore}
          <Box sx={visuallyHidden}>X - {xScore}</Box>
        </Button>
        <Button className={`score score-o ${xPlaying && "inactive"}`} onClick={onClick}>
          O - {oScore}
          <Box sx={visuallyHidden}> O - {oScore}</Box>
        </Button>
      </ButtonGroup>
    </div>
  );
};
export default ScoreBoard;
