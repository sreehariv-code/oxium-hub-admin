import { Avatar, Badge } from "@mui/material";
import profilePic from "../assets/profile.png";
import notificationIcon from "../assets/Notification.svg";
import { green } from "@mui/material/colors";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-5 py-3 border-b-2 border-sideBgSelect">
      <h1 className="font-semibold uppercase tracking-widest text-[1.125rem]">
        Oxium
      </h1>
      <div className="flex items-center gap-5 right">
        <Badge
          sx={{ fontSize: "0.2rem", marginRight: "1.2rem" }}
          badgeContent={2}
          variant="standard"
          color="error"
        >
          <img src={notificationIcon} alt="" width={20} />
        </Badge>
        <p className="capitalize">Admin</p>
        <Avatar
          sx={{ bgcolor: green[500] }}
          variant="rounded"
          src={profilePic}
        />
      </div>
    </header>
  );
}
