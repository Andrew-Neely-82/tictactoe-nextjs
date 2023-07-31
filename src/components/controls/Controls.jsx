import { ResetButton, ScoreButton, SettingsButton } from "../export";
import { ButtonGroup } from "@mui/material";

const Controls = ({ resetBoard, openSettings, clearScores }) => {
  const flexbox = ["flex", "justify-center"];
  const tailwind = `${flexbox.join(" ")}`;

  return (
    <div className={tailwind}>
      <ButtonGroup variant="contained" aria-label="outlined primary button group">
        <ResetButton resetBoard={resetBoard} />
        <ScoreButton clearScores={clearScores} />
        <SettingsButton openSettings={openSettings} />
      </ButtonGroup>
    </div>
  );
};

export default Controls;
