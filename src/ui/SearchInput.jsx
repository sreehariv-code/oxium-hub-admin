import SearchIcon from "../assets/icons/search.png";

export default function SearchInput() {
  return (
    <div className="border-[0.05rem] search-input-container pl-[9px] border-sideBarText flex py-[1px] rounded-md">
      <span className="icon w-[15px] flex items-center">
        <img src={SearchIcon} alt="" />
      </span>
      <input
        type="text"
        placeholder="Search"
        className="bg-transparent outline-none placeholder:text-[15px] pl-[3.5px]"
      />
    </div>
  );
}
