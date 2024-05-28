import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";

import AirportShuttleOutlinedIcon from "@mui/icons-material/AirportShuttleOutlined";
import LinkOutlinedIcon from "@mui/icons-material/LinkOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import { useData } from "../context/DataContext";

// Styled component for main menu links
const MainNavLink = styled(NavLink)`
  display: flex;
  width: 100%;
  padding: 0.5rem 1.5rem;
  border-radius: 0.5rem;
  align-items: center;
  font-size: 0.8rem;
  gap: 8px;
  &.active,
  &:hover {
    background-color: #292c2d;
    color: #03cd70; /* Green color for active and hover states */
    transition: background-color 100ms ease-in, color 100ms ease-in;
  }
`;

// Styled component for submenu links
const SubNavLink = styled(NavLink)`
  display: flex;
  width: 100%;
  padding: 0.5rem 1.5rem;
  border-radius: 0.5rem;
  align-items: center;
  font-size: 0.8rem;
  gap: 8px;
  &.active,
  &:hover {
    background-color: #292c2d;
    color: inherit; /* No color change for active and hover states */
    transition: background-color 100ms ease-in;
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
  const { userType } = useData();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const currentPath = location.pathname;
    console.log(currentPath);
    if (currentPath.startsWith("/assets")) {
      setOpen(true);
    }
  }, []);

  const toggleSubMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <nav className="bg-sideBg min-w-[280px] flex flex-col justify-between">
      <ul className="flex flex-col gap-1 px-5 py-6">
        {userType !== "seller" && (
          <li>
            <MainNavLink to="/assets" onClick={toggleSubMenu} className="main">
              <AirportShuttleOutlinedIcon fontSize="small" />
              <span>Assets</span>
            </MainNavLink>
            <SubMenu>
              <li
                className={`${
                  open
                    ? "h-full opacity-1 transition-all duration-250"
                    : "h-0 opacity-0 pointer-events-none"
                } `}
              >
                <SubNavLink to="/assets/charge-points" className="mt-2">
                  Charge Points
                </SubNavLink>
              </li>
            </SubMenu>
          </li>
        )}
        {userType === "seller" && (
          <li>
            <MainNavLink to="/assets" onClick={toggleSubMenu} className="main">
              <AirportShuttleOutlinedIcon fontSize="small" />
              <span>Assets</span>
            </MainNavLink>
          </li>
        )}
        <li>
          <MainNavLink to="/auctions">
            <LinkOutlinedIcon fontSize="small" />
            <span>Auction List</span>
          </MainNavLink>
        </li>
        <li>
          <MainNavLink to="/bidder">
            <GroupsOutlinedIcon fontSize="small" />
            <span>Bidders List</span>
          </MainNavLink>
        </li>
      </ul>
      <footer className="pb-2">
        <div className="px-[20px] py-[13px] flex gap-2">
          <SettingsIcon />
          <span>Settings</span>
        </div>
      </footer>
    </nav>
  );
}
