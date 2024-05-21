import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div className="h-screen bg-bgColor text-primaryText">
      <h1>Sorry, there was no page found</h1>
      <Button>
        <NavLink to="/">Go back to Dashboard</NavLink>
      </Button>
    </div>
  );
}
