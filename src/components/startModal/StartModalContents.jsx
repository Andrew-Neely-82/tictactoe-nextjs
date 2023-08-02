import { Box, Button, Typography } from "@mui/material";
import { style, descriptionStyle } from "./style";
import React, { forwardRef } from "react";

const StartModalContents = forwardRef(({ onClick }, ref) => {
  return (
    <Box ref={ref} sx={style}>
      <Typography id="modal-modal-title" variant="h5" component="h2" sx={{ py: 2, textAlign: "center" }}>
        <span>Tic Tac Toe</span>
      </Typography>
      <Typography id="modal-modal-description" sx={descriptionStyle}>
        <span>Red goes First Then Blue</span>
      </Typography>
      <Typography id="modal-modal-description" sx={descriptionStyle}>
        <span>3 boxes in any row wins!</span>
      </Typography>
      <Typography id="modal-modal-description" sx={{ ...descriptionStyle, marginTop: 5 }}>
        <span>
          <span className="underline">To Switch Player Color</span>
          <br />
          select from the scoreboard <br />
        </span>
      </Typography>
      <Button className="absolute top-0 right-3 bg-custom-red min-w-0 px-4" variant="contained" aria-label="close" onClick={onClick} sx={{ mt: 2 }}>
        X
      </Button>
    </Box>
  );
});

StartModalContents.displayName = "StartModalContents";

export default StartModalContents;
