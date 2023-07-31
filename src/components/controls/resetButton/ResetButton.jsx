import RestartAltIcon from "@mui/icons-material/RestartAlt";
import { Button, Box, Tooltip } from "@mui/material";
import { visuallyHidden } from "@mui/utils";

const ResetButton = ({ resetBoard }) => {
  const props = {
    className: "bg-custom-blue",
    variant: "contained",
    onClick: resetBoard,
  };

  return (
    <Tooltip title="Reset" placement="bottom" arrow>
      <Button {...props}>
        <RestartAltIcon />
        <Box sx={visuallyHidden}>Reset the board</Box>
      </Button>
    </Tooltip>
  );
};
export default ResetButton;
