import { useState } from "react";
import StyledModal from "../../ui/Modal";
import styled from "styled-components";
import DataTable from "../../ui/DataTable";

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
      <p>Dashboard</p>
    </div>
  );
}
