import EqualizerIcon from "@mui/icons-material/Equalizer";
import { Button, Box, Tooltip } from "@mui/material";
import { visuallyHidden } from "@mui/utils";

const ScoreButton = ({ clearScores }) => {
  const tooltipProps = {
    title: "Clear Scores",
    placement: "bottom",
  };

  const buttonProps = {
    className: "bg-custom-blue",
    variant: "contained",
    onClick: clearScores,
  };

  return (
    <Tooltip {...tooltipProps} arrow>
      <Button {...buttonProps}>
        <EqualizerIcon />
        <Box sx={visuallyHidden}>Reset Scores</Box>
      </Button>
    </Tooltip>
  );
};

export default ScoreButton;
