import StartModalContents from "./StartModalContents";
import React, { useState } from "react";
import Modal from "@mui/material/Modal";

const RulesModal = () => {
  const [open, setOpen] = useState(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <StartModalContents onClick={handleClose} />
      </Modal>
    </>
  );
};

export default RulesModal;
