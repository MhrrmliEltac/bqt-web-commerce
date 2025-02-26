import filter from "../../../assets/solar_filter-broken.svg";
import mask from "../../../assets/MaskGroup.svg";
import arrowDown from "../../../assets/Vector.svg";
import search from "../../../assets/search-icon.svg";
import sortIcon from "../../../assets/sort-icon.svg";
import FilterDialog from "./FilterModal";
import { useState, useEffect } from "react";
import Select from "../../general/Select";

const FlowerHeader = () => {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="flex justify-between items-center relative md:flex-row flex-row-reverse">
      <div className="flex items-center gap-[10px] ml-2 md:ml-0">
        <img
          src={filter}
          alt=""
          onClick={handleOpen}
          className="cursor-pointer"
        />
        {isMobile ? (
          <img src={sortIcon} alt="Sort" className="cursor-pointer" />
        ) : (
          <>
            <Select
              name="All categories"
              show={false}
              arrowDownType={arrowDown}
            />
            <Select
              name="Popular first"
              show={false}
              arrowDownType={arrowDown}
            />
          </>
        )}
        <FilterDialog open={open} handleClose={handleClose} />
      </div>
      <div className="flex items-center gap-3 text-[24px] text-[#2C4B42] max-lg:max-w-max min-md:w-[45%] md:static  absolute left-[30%] max-sm:left-100 -top-[50px]">
        <img src={mask} alt="" />
        <h1>Flowers & Bouquets</h1>
      </div>
      <div className="flex items-center gap-3 md:px-4 px-2 md:py-2 relative bg-[#E0E0E0] border-[#888888] border-2 rounded-[20px] h-[40px] min-lg:w-[315px] max-md:w-[85%]">
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
