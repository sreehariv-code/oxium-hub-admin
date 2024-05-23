import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Spinner from "./Spinner";

const StyledNavLink = styled(NavLink)`
  display: flex;
  width: 100%;
  padding: 0.5rem 1.5rem;
  border-radius: 0.5rem;
  font-size: 0.8rem;
  &.active,
  &:hover {
    background-color: #292c2d;
    color: #03cd70;
    transition: background-color 100ms ease-in, color 100ms ease-in;
  }
`;

const SubMenu = styled.ul`
  display: flex;
  flex-direction: column; /* Set default flex direction */
  gap: 3px; /* Set your desired gap */
  padding-left: 1rem; /* Inherit padding from parent li */
  margin: 0; /* Remove any margins */
`;

export default function SideMenu() {
  return (
    <nav className="bg-sideBg min-w-[280px]">
      <ul className="flex flex-col gap-1 px-5 py-6">
        <li>
          <StyledNavLink to="/dashboard">Dashboard</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/assets">Assets</StyledNavLink>
          <SubMenu>
            <li>
              <StyledNavLink to="/" className="my-2">
                Charge Stations
              </StyledNavLink>
              <StyledNavLink to="/assets/charge-points" className="mb-2">
                Charge Points
              </StyledNavLink>
              <StyledNavLink to="/assets/log">Charge Logs</StyledNavLink>
            </li>
          </SubMenu>
        </li>
        <li>
          <StyledNavLink to="/auctions">Auctions</StyledNavLink>
        </li>
      </ul>
    </nav>
  );
}
