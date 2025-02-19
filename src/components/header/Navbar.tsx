import React, { useState } from "react";
import Group from "../../assets/Group.svg";
import Logo from "../../assets/bqt 2.svg";
import "./navbar.css";
import { Link, useNavigate } from "react-router";
import favorite from "../../assets/favorite.svg";
import user from "../../assets/solar_user-broken.svg";
import basket from "../../assets/basket.svg";
import box from "../../assets/box.svg";
import BasicDialog from "../general/Modal";
import { motion } from "framer-motion";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();

  const items = {
    hidden: { opacity: 0, y: -100, transition: { duration: 1 } },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const navigateTo = () => {
    navigate("/");
  };

  return (
    <header className="w-[100%]">
      <motion.nav
        initial="hidden"
        animate="visible"
        variants={items}
        className="flex py-[40px] h-min w-full justify-between items-center"
      >
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
          <img
            src={Logo}
            alt=""
            className="cursor-pointer"
            onClick={navigateTo}
          />
        </div>
        <div className="md:flex gap-[50px] hidden">
          <Link to="/" className="relative group box-link">
            <motion.div whileHover={{ scale: 1.1 }}>
              <img src={box} alt="" />
            </motion.div>
            <div className="absolute -left-3 top-10 font-[400] text-sm text-black opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              Sifarişlər
            </div>
          </Link>

          <Link to="/" className="relative group box-link">
            <motion.div whileHover={{ scale: 1.1 }}>
              <img src={favorite} alt="" />
            </motion.div>
            <div className="absolute -left-5 top-10 font-[400] text-sm text-black opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              Seçilmişlər
            </div>
          </Link>
          <Link to="/" className="relative group box-link">
            <motion.div whileHover={{ scale: 1.1 }}>
              <img src={basket} alt="" />
            </motion.div>
            <div className="absolute -left-2 top-10 font-[400] text-sm text-black opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              Səbət
            </div>
          </Link>
          <Link to="/" className="relative group box-link">
            <motion.div whileHover={{ scale: 1.1 }}>
              <img src={user} alt="" />
            </motion.div>
            <div className="absolute -left-2 top-10 font-[400] text-sm text-black opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              Hesab
            </div>
          </Link>
        </div>
      </motion.nav>
    </header>
  );
};

export default Navbar;
