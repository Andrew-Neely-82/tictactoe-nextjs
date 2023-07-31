import SettingsIcon from "@mui/icons-material/Settings";
import { Button, Box, Tooltip } from "@mui/material";
import { visuallyHidden } from "@mui/utils";
import { useState } from "react";

const SettingsButton = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <Tooltip title="Settings" arrow>
    <Button className="bg-custom-blue" onClick={handleOpen}>
      <SettingsIcon />
      <Box sx={visuallyHidden}>Settings</Box>
    </Button>
  </Tooltip>  )
}
export default SettingsButton