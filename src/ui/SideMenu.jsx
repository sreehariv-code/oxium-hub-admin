import { NavLink } from "react-router-dom";

export default function SideMenu() {
  return (
    <aside className="bg-sideBg min-w-[200px]">
      <ul>
        <li>
          <NavLink to="/">Dashboard</NavLink>
        </li>
      </ul>
    </aside>
  );
}
