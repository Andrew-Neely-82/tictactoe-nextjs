import { backgroundChange, darkModeClasses, styling, propsButton } from "./index";
import React, { forwardRef, useContext, useEffect } from "react";
import { DarkModeContext } from "@/context/DarkModeContext";
import { Box, Button, Typography } from "@mui/material";
import DarkModeToggle from "./DarkModeToggle";

const SettingsModalBox = forwardRef(({ onClick }, ref) => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  useEffect(() => {
    // Update the body class based on the darkMode value
    backgroundChange(darkMode);

    // Apply the "box" class directly to all elements with the "box" class
    const boxElements = document.querySelectorAll(".box");
    const scoreElements = document.querySelectorAll(".score");
    const shadowElements = document.querySelectorAll(".ScoreBoard__group");
    const modalElements = document.querySelectorAll(".MuiBox-root");

    darkModeClasses(boxElements, scoreElements, shadowElements, modalElements, darkMode);
  }, [darkMode]);

  const handleDarkModeToggle = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  const style = styling;

  const buttonStyling = "bg-custom-red px-4";
  const buttonProps = propsButton(buttonStyling, onClick);

  return (
    <Box sx={style}>
      <Typography id="modal-modal-title" aria-label="Settings" variant="h6" component="h2">
        <span>Settings</span>
      </Typography>
      <Typography id="modal-modal-description" sx={{ mt: 2, display: "flex", justifyContent: "space-between" }}>
        <span>Dark Mode</span>
        <span aria-label="Dark Mode Toggle">
          <DarkModeToggle checked={darkMode} onChange={handleDarkModeToggle} />
        </span>
      </Typography>
      <Button {...buttonProps} aria-label="Close Settings">
        <span>X</span>
      </Button>
    </Box>
  );
});

SettingsModalBox.displayName = "SettingsModalBox";

export default SettingsModalBox;
