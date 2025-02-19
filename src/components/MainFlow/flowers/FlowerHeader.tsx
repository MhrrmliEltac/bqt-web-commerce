import filter from "../../../assets/solar_filter-broken.svg";
import mask from "../../../assets/MaskGroup.svg";
import search from "../../../assets/search-icon.svg";
import FilterDialog from "./FilterModal";
import { useState } from "react";

const FlowerHeader = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-[24px]">
        <img
          src={filter}
          alt=""
          onClick={handleOpen}
          className="cursor-pointer"
        />
        <select
          name="language"
          id="language"
          className="bg-transparent text-[18px] font-[400] text-[#2C4B42] outline-none border-none custom-select"
        >
          <option value="all-category">All categories</option>
          <option value="English">English</option>
          <option value="English">English</option>
        </select>
        <select
          name="language"
          id="language"
          className="bg-transparent text-[18px] font-[400] text-[#2C4B42] outline-none border-none custom-select"
        >
          <option value="popular">Popular first</option>
          <option value="English">English</option>
          <option value="English">English</option>
        </select>
        <FilterDialog open={open} handleClose={handleClose} />
      </div>
      <div className="flex items-center gap-3 text-[24px] text-[#2C4B42]">
        <img src={mask} alt="" />
        <h1>Flowers & Bouquets</h1>
      </div>
      <div className="flex items-center gap-3 px-4 py-2 relative bg-[#E0E0E0] border-[#888888] border-2 rounded-[20px] h-[40px] w-[315px]">
        <img src={search} alt="" className="absolute right-4 cursor-pointer" />
        <input
          type="search"
          name="search"
          id="search"
          className="bg-transparent placeholder-[#00000078] outline-none appearance-no"
          placeholder="Search"
        />
      </div>
    </div>
  );
};

export default FlowerHeader;
