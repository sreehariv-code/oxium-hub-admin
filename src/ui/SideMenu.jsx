import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";

import SpaceDashboardOutlinedIcon from "@mui/icons-material/SpaceDashboardOutlined";
import AirportShuttleOutlinedIcon from "@mui/icons-material/AirportShuttleOutlined";
import LinkOutlinedIcon from "@mui/icons-material/LinkOutlined";
import SettingsIcon from "@mui/icons-material/Settings";

const StyledNavLink = styled(NavLink)`
  display: flex;
  width: 100%;
  padding: 0.5rem 1.5rem;
  border-radius: 0.5rem;
  font-size: 0.8rem;
  align-items: center;
  gap: 5px;
  &.active,
  &:hover {
    background-color: #292c2d;
    color: #03cd70;
    transition: background-color 100ms ease-in, color 100ms ease-in;
  }
`;

const SubMenu = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 3px;
  padding-left: 1rem;
  margin: 0;
`;

export default function SideMenu() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const currentPath = location.pathname;
    console.log(currentPath);
    if (currentPath.startsWith("/assets")) {
      setOpen(true);
    }
  }, [location.pathname]);

  const toggleSubMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <nav className="bg-sideBg min-w-[280px] flex flex-col justify-between">
      <ul className="flex flex-col gap-1 px-5 py-6">
        {/* <li>
          <StyledNavLink to="/dashboard">
            <SpaceDashboardOutlinedIcon />
            <span>Dashboard</span>
          </StyledNavLink>
        </li> */}
        <li>
          <StyledNavLink to="/assets" onClick={toggleSubMenu}>
            <AirportShuttleOutlinedIcon />
            <span>Assets</span>
          </StyledNavLink>
          <SubMenu>
            <li
              className={`${
                open
                  ? "h-full opacity-1 transition-all duration-250"
                  : "h-0 opacity-0 pointer-events-none"
              } `}
            >
              {/* <StyledNavLink to="/" className="my-2">
                Charge Stations
              </StyledNavLink> */}
              <StyledNavLink to="/assets/charge-points" className="mt-2">
                Charge Points
              </StyledNavLink>
            </li>
          </SubMenu>
        </li>
        {/* <li>
          <StyledNavLink to="/auctions">
            <LinkOutlinedIcon />
            <span>Auctions</span>
          </StyledNavLink>
        </li> */}
      </ul>
      {/* <footer className="pb-2">
        <div className="px-[20px] py-[13px] flex gap-2">
          <SettingsIcon />
          <span>Settings</span>
        </div>
      </footer> */}
    </nav>
  );
}
