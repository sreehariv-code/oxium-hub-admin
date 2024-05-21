import { Box, Modal } from "@mui/material";
import { useState } from "react";
import successSvg from "../assets/success.svg";
import { Image } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#2A2E2C",
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
  outline: 0,
  textAlign: "center",
  color: "#F7F8FC",
};

export default function StyledModal({ open, setOpen }) {
  const navigate = useNavigate();
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
        <Box sx={style}>
          <div className="space-y-7">
            <img src={successSvg} alt="" className="m-auto" />
            <h1>
              CMS : XOXO <br /> successfully added to the platform
            </h1>
            <button
              className="px-4 py-1 rounded-lg bg-primaryText text-bgColor"
              type="submit"
              onClick={() => {
                handleClose();
                navigate("/assets/log");
              }}
            >
              View Details
            </button>
          </div>
        </Box>
      </Modal>
    </>
  );
}
