import React, { useState } from "react";
import Group from "../../assets/Group.svg";
import Logo from "../../assets/bqt 2.svg";
import arrowDown from "../../assets/Vector.svg";
import { Link, useNavigate } from "react-router-dom";
import favorite from "../../assets/favorite.svg";
import user from "../../assets/solar_user-broken.svg";
import basket from "../../assets/basket.svg";
import box from "../../assets/box.svg";
import { motion } from "framer-motion";
import "./navbar.css";
import Select from "../general/Select";
import { Icon } from "@iconify/react/dist/iconify.js";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("home");

  const items = {
    hidden: { opacity: 0, y: -100, transition: { duration: 1 } },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const navigateTo = () => {
    navigate("/");
  };

  const handleShow = () => {
    setShow(true);
  };
  const handleDontShow = () => {
    setShow(false);
  };

  const handleActiveTab = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <header className="w-[100%] relative">
      <motion.nav
        initial="hidden"
        animate="visible"
        variants={items}
        className="flex py-[40px] h-min w-full justify-between items-center relative md:flex-row "
      >
        <div
          className={`md:inline-flex items-center gap-4 justify-start flex-wrap grid md:text-lg text-xs md:pr-10`}
        >
          <Select
            name="English"
            open={open}
            Group={Group}
            arrowDownType={arrowDown}
            show={show}
            handleClose={handleClose}
            handleOpen={handleOpen}
            handleShow={handleShow}
            handleDontShow={handleDontShow}
          />
          <div className="flex items-center gap-2 ">
            <img src={Group} alt="" width={21} height={26} />
            <div className="logo">Baku, AZ ₼</div>
          </div>
        </div>
        <div className="md:flex md:items-center md:justify-end md:static absolute img-box">
          <img
            src={Logo}
            alt=""
            className="cursor-pointer md:W-[40px] md:h-[60px] w-[30px] h-[50px]"
            onClick={navigateTo}
          />
        </div>
        <div className="md:flex lg:gap-14 md:gap-5 hidden">
          <Link to="/orders" className="relative group box-link">
            <motion.div whileHover={{ scale: 1.1 }}>
              <img src={box} alt="" />
            </motion.div>
            <div className="absolute -left-3 top-10 font-[400] text-sm text-black opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              Sifarişlər
            </div>
          </Link>
          <Link to="/wishlist" className="relative group box-link">
            <motion.div whileHover={{ scale: 1.1 }}>
              <img src={favorite} alt="" />
              <span className="absolute -top-3 -right-2 border-2 border-white rounded-full bg-[#2C4B42] flex justify-center items-center w-6 h-6 text-white">
                1
              </span>
            </motion.div>
            <div className="absolute -left-5 top-10 font-[400] text-sm text-black opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              Seçilmişlər
            </div>
          </Link>
          <Link to="/cart" className="relative group box-link">
            <motion.div whileHover={{ scale: 1.1 }} className="relative">
              <img src={basket} alt="" />
              <span className="absolute -top-3 -right-2 border-2 border-white rounded-full bg-[#2C4B42] flex justify-center items-center w-6 h-6 text-white">
                1
              </span>
            </motion.div>
            <div className="absolute -left-2 top-10 font-[400] text-sm text-black opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              Səbət
            </div>
          </Link>
          <Link to="/profile" className="relative group box-link">
            <motion.div whileHover={{ scale: 1.1 }}>
              <img src={user} alt="" />
            </motion.div>
            <div className="absolute -left-2 top-10 font-[400] text-sm text-black opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              Hesab
            </div>
          </Link>
        </div>
      </motion.nav>
      <div className="max-sm:flex hidden justify-center items-center fixed bg-[#032C20C9] h-[50px] backdrop-blur-sm top-[90%] left-[20%] max-sm:w-[70%] rounded-[20px] px-2 py-2 z-50">
        <div className="w-[100%] flex justify-between">
          <Link to="/" className="group relative">
            <Icon
              icon="solar:home-smile-broken"
              width="28px"
              height="28px"
              style={{ color: "#fff" }}
              className={`cursor-pointer ${
                activeTab === "home" && "opacity-50"
              } transition-all duration-300 hover:opacity-50`}
              onClick={() => handleActiveTab("home")}
            />
          </Link>
          <Link to="/cart" className="group relative">
            <Icon
              icon="hugeicons:shopping-basket-02"
              width="28px"
              height="28px"
              style={{ color: "#fff" }}
              className={`cursor-pointer ${
                activeTab === "basket" && "opacity-50"
              } transition-all duration-300 hover:opacity-50`}
              onClick={() => handleActiveTab("basket")}
            />
            <span className="absolute -top-1 -right-2 border-2 border-white rounded-full bg-[#2C4B42] flex justify-center items-center w-5 h-5 text-white">
              1
            </span>
          </Link>
          <Link to="/wishlist" className="group relative">
            <Icon
              icon="solar:heart-broken"
              width="28px"
              height="28px"
              style={{ color: "#fff" }}
              className={`cursor-pointer ${
                activeTab === "favorite" && "opacity-50"
              } transition-all duration-300 hover:opacity-50`}
              onClick={() => handleActiveTab("favorite")}
            />
            <span className="absolute -top-1 -right-2 border-2 border-white rounded-full bg-[#2C4B42] flex justify-center items-center w-5 h-5 text-white">
              1
            </span>
          </Link>
          <Link to="/orders" className="group relative">
            <Icon
              icon="solar:box-broken"
              width="28px"
              height="28px"
              style={{ color: "#fff" }}
              className={`cursor-pointer ${
                activeTab === "box" && "opacity-50"
              } transition-all duration-300 hover:opacity-50`}
              onClick={() => handleActiveTab("box")}
            />
          </Link>
          <Link to="/profile" className="group relative">
            <Icon
              icon="solar:user-broken"
              width="28px"
              height="28px"
              style={{ color: "#fff" }}
              className={`cursor-pointer ${
                activeTab === "user" && "opacity-50"
              } transition-all duration-300 hover:opacity-50`}
              onClick={() => handleActiveTab("user")}
            />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
