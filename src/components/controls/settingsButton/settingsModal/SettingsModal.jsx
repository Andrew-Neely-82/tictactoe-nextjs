import SettingsModalBox from "./SettingsModalBox";
import { Modal } from "@mui/material";

const SettingsModal = ({ open, handleClose }) => {
  return (
    <div>
      <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <SettingsModalBox onClick={handleClose} />
      </Modal>
    </div>
  );
};
export default SettingsModal;
