import { CopyAllOutlined } from "@mui/icons-material";

export default function CopyInput() {
  return (
    <div className="flex items-center justify-between gap-2">
      <input
        type="text"
        className="flex-1 pl-3 py-[4px] bg-[#161616] border-[1px] border-sideBgSelect outline-none caret-accent rounded-lg "
      />
      <button>
        <CopyAllOutlined fontSize="medium" />
      </button>
    </div>
  );
}
