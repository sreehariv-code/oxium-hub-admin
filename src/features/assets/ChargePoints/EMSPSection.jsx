import { useState } from "react";
import filterIcon from "../../../assets/icons/filter.png";

import StyledModal from "../../../ui/Modal";
import SearchInput from "../../../ui/SearchInput";
import EMSPTable from "../../../ui/EMSPTable";
import ModalForm from "../../../ui/ModalForm";

export default function EMSPSection() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <section className="mt-10 emsp-section">
      <ModalForm open={openModal} setOpen={setOpenModal} />
      <header className="flex justify-between">
        <div className="flex gap-5 left font-semibold text-[1.25rem] items-center">
          <h1>List EMSP&apos;s</h1>
        </div>
        <div className="flex gap-5">
          <SearchInput />
          <button>
            <img src={filterIcon} alt="" />
          </button>

          <button
            className="bg-white px-4 py-1 rounded-md text-[12px] font-[500] text-[#303030] tracking-wider"
            onClick={() => setOpenModal(true)}
          >
            Add New EMSP
          </button>
        </div>
      </header>
      <EMSPTable />
    </section>
  );
}
