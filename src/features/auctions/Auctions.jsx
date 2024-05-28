import { useData } from "../../context/DataContext";

export default function Auctions() {
  const { data } = useData();
  console.log("context: ", data);
  return (
    <div className="grid h-full place-items-center">
      <p>Under Development!...</p>
    </div>
  );
}
