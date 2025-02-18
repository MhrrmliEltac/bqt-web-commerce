import React, { useState } from "react";
import Group from "../../assets/Group.svg";
import Logo from "../../assets/bqt 2.svg";
import "./navbar.css";
import { Link } from "react-router";
import favorite from "../../assets/favorite.svg";
import user from "../../assets/solar_user-broken.svg";
import basket from "../../assets/basket.svg";
import box from "../../assets/box.svg";
import BasicDialog from "../general/Modal";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <header className="w-[100%]">
      <nav className="flex py-[40px] h-min w-full justify-between items-center">
        <div className="inline-flex  items-center gap-2 justify-start">
          <select
            name="language"
            id="language"
            className="bg-transparent outline-none border-none custom-select"
            onClick={handleOpen}
          >
            <option value="English">English</option>
            <option value="English">English</option>
            <option value="English">English</option>
          </select>
          <BasicDialog open={open} handleClose={handleClose} />
          <div className="flex items-center gap-2 ">
            <img src={Group} alt="" width={21} height={26} />
            <div className="logo">Baku, AZ ₼</div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <img src={Logo} alt="" />
        </div>
        <div className="md:flex gap-[50px] hidden">
          <Link to="/">
            <img src={box} alt="" />
          </Link>
          <Link to="/">
            <img src={favorite} alt="" />
          </Link>
          <Link to="/">
            <img src={basket} alt="" />
          </Link>
          <Link to="/">
            <img src={user} alt="" />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
