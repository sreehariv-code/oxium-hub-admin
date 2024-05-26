import "./tooltip.css";
export default function CustomToolTip({ label, tooltip }) {
  return (
    <div
      style={{
        width: "100%",
        overflow: "hidden",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
        position: "relative",
        zIndex: 1000,
      }}
      className="tooltip tooltip-scroll max-w-[400px] overflow-hidden text-ellipsis "
    >
      {label || "Hover Me"}
      <div className="wrapper">
        <span className="tooltip-text">{tooltip || "Hello world"}</span>
      </div>
    </div>
  );
}
