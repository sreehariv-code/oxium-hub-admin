import { useLocation } from "react-router-dom";
import DataTable from "../../../ui/DataTable";

export default function ChargePoints() {
  const location = useLocation();
  let crumb =
    location.pathname.split("/")[location.pathname.split("/").length - 1];
  const words = crumb
    .split("-")
    .map((word) => <>{word[0].toUpperCase() + word.slice(1)} </>);

  return (
    <div className="p-10">
      <h1 className="text-2xl font-semibold">{words} </h1>
      <DataTable />
    </div>
  );
}
