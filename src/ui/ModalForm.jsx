import React, { useState } from "react";
import StyledModal from "./Modal";
import { useNavigate } from "react-router-dom";
import successSvg from "../assets/success.svg";
import chargeZoneImg from "../assets/chargezone.svg";
import { Button } from "@mui/material";

export default function ModalForm({ open, setOpen, setOpenEmsp }) {
  const [success, setSuccess] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSuccess(true);
    if (setOpenEmsp) {
      setOpenEmsp(true);
    }
  }
  return (
    <StyledModal open={open} setOpen={setOpen}>
      <div className="p-12">
        {success ? <SuccessLayout /> : <FormLayout onSubmit={handleSubmit} />}
      </div>
    </StyledModal>
  );
}

function FormLayout({ onSubmit }) {
  return (
    <div className="min-w-[700px]">
      <h1 className="font-semibold text-[1.25rem]">Add EMSP</h1>

      <div className="form-container mt-[50px]">
        <form action="" className="" onSubmit={onSubmit}>
          <div className="flex items-center gap-6 input-container">
            <label htmlFor="">Enter CMS Configuration URL</label>
            <input
              type="text"
              className="outline-none px-3 py-1 bg-[#161616] caret-accent w-1/2 border-[1px] border-[#616161] rounded-md"
            />
          </div>
          <div className="text-center btn-section mt-7">
            <Button
              type="submit"
              sx={{
                backgroundColor: "white",
                color: "black",
                textTransform: "none",
                "&:hover": { backgroundColor: "white", color: "black" },
              }}
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

function SuccessLayout() {
  return (
    <div className="flex flex-col gap-5 text-center">
      <img src={successSvg} alt="" className="m-auto" />
      <p>
        <span>EMSP: </span>
        <img src={chargeZoneImg} alt="" className="inline-block" />
        <span className="ml-2">Charge Zone</span>
      </p>
      <p>Successfully added to the platform</p>
    </div>
  );
}
