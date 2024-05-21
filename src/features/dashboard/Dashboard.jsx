import { useState } from "react";
import StyledModal from "../../ui/Modal";
import styled from "styled-components";

const Input = styled.input`
  padding: 0.1rem;
  padding-left: 0.7rem;
  border-radius: 0.5rem;
  border: 1px solid #ccc;
  box-sizing: border-box;
  background-color: inherit;
  caret-color: #03cd70;
  &:focus {
    outline: none;
  }
`;

export default function Dashboard() {
  const [open, setOpen] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setOpen(true);
  }

  return (
    <div className="pt-8 pl-10">
      <form
        action=""
        className=" max-w-[40%] space-y-7"
        onSubmit={handleSubmit}
      >
        <div className="flex justify-between min-w-max form-control">
          <label htmlFor="cms_url">Enter CMS Configuration URL</label>
          <Input type="text" id="cms_url" />
        </div>
        <div className="flex justify-between min-w-max form-control">
          <label htmlFor="cpid">CPID</label>
          <Input type="text" id="cpid" />
        </div>
        <div className="btn-group ">
          <button
            className="px-4 py-1 rounded-lg bg-primaryText text-bgColor"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
      <StyledModal open={open} setOpen={setOpen} />
    </div>
  );
}
