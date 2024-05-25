import { Box, Modal } from "@mui/material";

import { useNavigate } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",

  bgcolor: "#2A2E2C",
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
  outline: 0,

  color: "#F7F8FC",
};

export default function StyledModal({ open, setOpen, children }) {
  function handleClose() {
    setOpen(false);
  }
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...style }}>{children}</Box>
      </Modal>
    </>
  );
}
