import { ArrowBackIosNew } from "@mui/icons-material";
import { Link } from "react-router-dom";
import styled from "styled-components";

import evStation from "../../../assets/ev-station.svg";
import DataTable from "../../../ui/DataTable";

const StyledInput = styled.input``;

const StyledHeader = styled.header`
  border-bottom: 1px solid hsla(0 0 100% / 20%);
  display: flex;
  padding-block: 14.5px;
  padding-inline: 25px;
  color: #b5b8c5;
  gap: 2px;
  align-items: center;
`;

export default function ChargePointDetail() {
  return (
    <div className="flex-grow px-6 pt-6 ">
      <header className="flex justify-between">
        <div className="flex gap-5 left font-semibold text-[1.25rem] items-center">
          <Link to={-1}>
            <ArrowBackIosNew />
          </Link>
          <h1>Charging Point Details</h1>
        </div>
        <div className="flex gap-5">
          <button className="px-4 py-1 font-[500] tracking-wider text-[12px] text-white rounded-md bg-bgFillSuccess ">
            View Charger Logs
          </button>
          <button className="bg-white px-4 py-1 rounded-md text-[12px] font-[500] text-[#303030] tracking-wider">
            Add EMSP
          </button>
        </div>
      </header>
      <p className="mt-3 text-sideBarText text-[0.75rem]">
        Showing 124 Results
      </p>

      <div className="grid min-h-[533px] grid-cols-5 grid-rows-[auto_minmax(0,1fr)] mt-10 gap-3 relative">
        <div className="col-span-2 row-span-5 bg-[#1C1E1F] rounded-md details">
          <StyledHeader>
            <img src={evStation} alt="" />
            <h1>GOEC4578</h1>
          </StyledHeader>
        </div>
        <div className="col-span-1 row-span-3 rounded-md actions bg-[#1C1E1F]">
          <StyledHeader>
            <h1>Actions</h1>
          </StyledHeader>
        </div>
        <div className="col-span-2 row-span-3 bg-[#1C1E1F] rounded-md connectors">
          <StyledHeader>
            <h1>Connectors</h1>
          </StyledHeader>
        </div>
        <div className="col-span-3 row-span-2 rounded-md analytics h-full bg-[#1c1e1f]">
          <StyledHeader>
            <h1>Analytics</h1>
          </StyledHeader>
          <section className="flex flex-col items-center justify-around pt-10 text-center md:flex-row md:text-left ">
            <div className="">
              <p className="text-[14px]">
                Total Charging <br /> sessions
              </p>
              <p className="font-bold text-[24px] pl-5 before:content-[''] before:left-0 before:h-full before:w-1 mt-5  relative before:absolute before:bg-accent before:rounded-md">
                999
              </p>
            </div>
            <div className="">
              <p className="text-[14px]">
                Total units <br /> (kWh)
              </p>
              <p className="font-bold text-[24px] pl-5 before:content-[''] before:left-0 before:h-full before:w-1 mt-5  relative before:absolute before:bg-accent before:rounded-md">
                43274523
              </p>
            </div>
          </section>
        </div>
      </div>
      <DataTable />
    </div>
  );
}
