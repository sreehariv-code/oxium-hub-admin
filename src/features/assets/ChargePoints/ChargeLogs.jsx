import { Link, useLocation } from "react-router-dom";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import filterIcon from "../../../assets/icons/filter.png";

import LogTable from "../../../ui/LogTable";
import SearchInput from "../../../ui/SearchInput";

export default function ChargeLogs() {
  // const location = useLocation();
  // const path = location.pathname.split("/");
  // let first = 3,
  //   last = path.length - 1;
  // const crumbs = path.splice(first, last);

  // function pathToStringConverter(crumb) {
  //   return crumb
  //     .split("-")
  //     .map((word) => word[0].toUpperCase() + word.slice(1, word.length))
  //     .join(" ");
  // }

  return (
    <div className="px-6 pt-6">
      <header className="flex justify-between">
        <div className="flex bread-crumbs text-[20px] gap-5">
          <div className="flex items-center gap-5 bread-crumb">
            <Link to="/assets/charge-points">
              <ArrowForwardIosIcon className="rotate-180" />
            </Link>
            <span className="text-[16px]">Charge Point Details</span>
          </div>
          <div className="flex items-center gap-5 font-semibold bread-crumb">
            <Link to="/assets/charge-points/charge-point-details">
              <ArrowForwardIosIcon className="rotate-180" />
            </Link>
            <span className="text-[20px]">Charger Logs</span>
          </div>
        </div>
        <div className="flex gap-5 search">
          <SearchInput />
          <button>
            <img src={filterIcon} alt="" />
          </button>
        </div>
      </header>
      <main className="pt-[78px]">
        <LogTable />
      </main>
    </div>
  );
}
