import { ResetButton, ScoreButton, SettingsButton } from "../export";
import { ButtonGroup } from "@mui/material";

const Controls = ({ resetBoard, openSettings, clearScores }) => {
  return (
    <>
      <ButtonGroup variant="contained" aria-label="outlined primary button group">
        <ResetButton resetBoard={resetBoard} />
        <ScoreButton clearScores={clearScores} />
        <SettingsButton openSettings={openSettings} />
      </ButtonGroup>
    </>
  );
};
export default Controls;
