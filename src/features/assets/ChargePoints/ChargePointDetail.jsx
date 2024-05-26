import { ArrowBackIosNew } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import evStation from "../../../assets/ev-station.svg";
import filterIcon from "../../../assets/icons/filter.png";
import StyledModal from "../../../ui/Modal";

import ContentCopyRoundedIcon from "@mui/icons-material/ContentCopyRounded";
import { formatDate } from "../../../utilities/helpers";
import { useState } from "react";
import ModalForm from "../../../ui/ModalForm";
import Connectors from "../../../ui/Connectors";
import { Button } from "@mui/material";
import SearchInput from "../../../ui/SearchInput";
import EMSPSection from "./EMSPSection";

const today = new Date();

const chargePointDetails = {
  configUrl: "ws://goeccms.numocity.com:9033/ocpp/go1",
  location: "Oberon Mall, Ernakulam",
  oem: "DELTA",
  model: "DIHEVE50CSCS00",
  type: "DC",
  serailNo: "0651561151",
  protocol: "OCPP(1.6)",
  commission_date: formatDate(today),
  published: "YES",
};

const StyledHeader = styled.header`
  border-bottom: 1px solid hsla(0 0 100% / 20%);
  display: flex;
  padding-block: 14.5px;
  padding-inline: 25px;
  color: #b5b8c5;
  gap: 2px;
  align-items: center;
  font-weight: 550;
  letter-spacing: 1px;
`;

const StyledButton = styled.button`
  color: ${(props) => props.color || "black"};
  background-color: ${(props) => props.backgroundcolor || "white"};
  padding: 1rem;
  border-radius: 5px;
  &:hover {
    box-shadow: 0 0 15px 0 rgba(64, 63, 63, 0.1);
  }
`;

export default function ChargePointDetail() {
  const [openModal, setOpenModal] = useState(false);
  const [openEmsp, setOpenEmsp] = useState(false);

  const navigate = useNavigate();

  function handleClick(event) {
    setOpenModal(true);
  }
  return (
    <div className="flex-grow px-6 pt-6 pb-20">
      {/* {EMSP Modal} */}
      <ModalForm
        open={openModal}
        setOpen={setOpenModal}
        setOpenEmsp={setOpenEmsp}
      />
      <header className="flex justify-between">
        <div className="flex gap-5 left font-semibold text-[1.25rem] items-center">
          <Link to="/assets/charge-points">
            <ArrowBackIosNew />
          </Link>
          <h1>Charging Point Details</h1>
        </div>
        <div className="flex gap-5">
          <SearchInput />
          <button>
            <img src={filterIcon} alt="" />
          </button>
          <button
            onClick={() => navigate("charge-logs")}
            className="px-4 py-1 font-[500] tracking-wider text-[12px] text-white rounded-md bg-bgFillSuccess "
          >
            View Charger Logs
          </button>
          {!openEmsp && (
            <button
              className="bg-white px-4 py-1 rounded-md text-[12px] font-[500] text-[#303030] tracking-wider"
              onClick={handleClick}
            >
              Add EMSP
            </button>
          )}
        </div>
      </header>
      <p className="mt-3 text-sideBarText text-[0.75rem]">
        Showing 124 Results
      </p>

      <div className="grid min-h-[533px] grid-cols-5 grid-rows-[repeat(5,minmax(100px,auto))] mt-10 gap-[20px] relative">
        <div className="col-span-2 row-span-6 bg-[#1C1E1F] rounded-md details">
          <StyledHeader>
            <img src={evStation} alt="" />
            <h1>GOEC4578</h1>
          </StyledHeader>
          <section className="px-[25px] pt-[35px]">
            <div className="form-container">
              <label htmlFor="config_url">Configuration URL</label>
              <div className="input-container bg-[#161616] flex justify-between py-3 px-4 border-[1px] rounded-[4px] border-[rgba(255_255_255/0.5)] mt-2">
                <input
                  type="text"
                  defaultValue={chargePointDetails.configUrl}
                  className="bg-[#161616] outline-none w-full"
                />
                <Button sx={{ color: "white", ":hover": { color: "white" } }}>
                  <ContentCopyRoundedIcon />
                </Button>
              </div>
              <div className="point-details gap-5 flex flex-col mt-5 text-[14px]">
                <p className="flex justify-between">
                  <span className="text-[#828282]">Charge Location</span>
                  <span className="text-[#F7F8FC]">
                    {chargePointDetails.location}
                  </span>
                </p>
                <p className="flex justify-between">
                  <span className="text-[#828282]">OEM</span>
                  <span className="text-[#F7F8FC]">
                    {chargePointDetails.oem}
                  </span>
                </p>
                <p className="flex justify-between">
                  <span className="text-[#828282]">Model</span>
                  <span className="text-[#F7F8FC]">
                    {chargePointDetails.model}
                  </span>
                </p>
                <p className="flex justify-between">
                  <span className="text-[#828282]">Type</span>
                  <span className="text-[#F7F8FC]">
                    {chargePointDetails.type}
                  </span>
                </p>
                <p className="flex justify-between">
                  <span className="text-[#828282]">Serial Number</span>
                  <span className="text-[#F7F8FC]">
                    {chargePointDetails.serailNo}
                  </span>
                </p>
                <p className="flex justify-between">
                  <span className="text-[#828282]">
                    Communication Protocol (Version){" "}
                  </span>
                  <span className="text-[#F7F8FC]">
                    {chargePointDetails.protocol}
                  </span>
                </p>
                <p className="flex justify-between">
                  <span className="text-[#828282]">Commissioned On</span>
                  <span className="text-[#F7F8FC]">
                    {chargePointDetails.commission_date}
                  </span>
                </p>
                <p className="flex justify-between">
                  <span className="text-[#828282]">Published</span>
                  <span className="text-[#F7F8FC]">
                    {chargePointDetails.published}
                  </span>
                </p>
              </div>
            </div>
          </section>
        </div>
        <div className="col-span-1 row-span-3 rounded-md actions bg-[#1C1E1F] flex flex-col">
          <StyledHeader>
            <h1>Actions</h1>
          </StyledHeader>
          <div className="flex flex-col flex-1 px-3 mt-[22px] gap-[25px] btn-section">
            <StyledButton color="white" backgroundcolor="#6C3333">
              Hard Reset
            </StyledButton>
            <StyledButton color="white" backgroundcolor="#885324">
              Soft Reset
            </StyledButton>
            <StyledButton color="white" backgroundcolor="#26426F">
              Clear Cache
            </StyledButton>
          </div>
        </div>
        <div className="col-span-2 row-span-3 bg-[#1C1E1F] flex flex-col rounded-md connectors min-h-[300px]">
          <StyledHeader>
            <h1>Connectors</h1>
          </StyledHeader>
          <div className="flex p-[21px] h-full gap-5">
            <Connectors />
            <Connectors />
          </div>
        </div>
        <div className="col-span-3 row-span-3 rounded-md analytics h-full bg-[#1c1e1f] flex flex-col">
          <StyledHeader>
            <h1>Analytics</h1>
          </StyledHeader>
          <section className="flex flex-col items-center justify-around flex-grow text-center md:flex-row md:text-left">
            <div className="">
              <p className="text-[14px] text-[rgba(255_255_255/0.5)]">
                Total Charging <br /> sessions
              </p>
              <p className="font-bold text-[24px] pl-5 before:content-[''] before:left-0 before:h-full before:w-1 mt-5  relative before:absolute before:bg-accent before:rounded-md">
                999
              </p>
            </div>
            <div className="">
              <p className="text-[14px] text-[rgba(255_255_255/0.5)]">
                Total units <br /> (kWh)
              </p>
              <p className="font-bold text-[24px] pl-5 before:content-[''] before:left-0 before:h-full before:w-1 mt-5  relative before:absolute before:bg-accent before:rounded-md">
                43274523
              </p>
            </div>
            <div className="">
              <p className="text-[14px] text-[rgba(255_255_255/0.5)]">
                Total <br />
                Revenue (INR)
              </p>
              <p className="font-bold text-[24px] pl-5 before:content-[''] before:left-0 before:h-full before:w-1 mt-5  relative before:absolute before:bg-accent before:rounded-md">
                24234345
              </p>
            </div>
          </section>
        </div>
      </div>

      {/* EMSP Table */}
      {openEmsp && <EMSPSection />}
    </div>
  );
}
