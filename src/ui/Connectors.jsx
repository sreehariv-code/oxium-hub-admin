import QrCode2RoundedIcon from "@mui/icons-material/QrCode2Rounded";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import Vector from "../assets/Vector.svg";
import { Box } from "@mui/material";

export default function Connectors() {
  return (
    <div className="w-full min-h-[200px] bg-[#262B29] rounded-md p-[7.45px]">
      <header className="flex justify-end">
        <QrCode2RoundedIcon fontSize="large" />
      </header>
      <main className="flex flex-col items-center mt-5 grow ">
        <Box
          bgcolor="#1C1D22"
          color="#B5B8C5"
          borderRadius={50}
          sx={{
            textAlign: "center",
            width: 100,
            aspectRatio: "1/1",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={Vector} alt="vector-img" />
          <p>CSS</p>
        </Box>
      </main>
      <button className="text-white w-full flex justify-center py-3 mt-5 rounded-lg self-end bg-[#29845A] gap-2">
        <LockOpenIcon />
        <p>Unlock</p>
      </button>
    </div>
  );
}
