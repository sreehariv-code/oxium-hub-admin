import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNavLink = styled(NavLink)`
  display: flex;
  width: 100%;
  padding: 0.5rem 1.5rem;
  border-radius: 0.5rem;
  &.active,
  &:hover {
    background-color: #292c2d;
    color: #03cd70;
    transition: background-color 100ms ease-in, color 100ms ease-in;
  }
`;

export default function SideMenu() {
  return (
    <nav className="bg-sideBg min-w-[280px]">
      <ul className="px-5 py-6 flex flex-col space-y-5 ">
        <li>
          <StyledNavLink to="/dashboard">Dashboard</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/assets">Assets</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/auctions">Auctions</StyledNavLink>
        </li>
      </ul>
    </nav>
  );
}
