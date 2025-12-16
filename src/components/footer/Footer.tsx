import React from "react";
import logo from "../../assets/bqt-logo-2.svg";
import instagram from "../../assets/insta-logo.svg";
import twitter from "../../assets/twitter-logo.svg";
import facebook from "../../assets/fb-logo.svg";
import phone from "../../assets/solar_phone-broken.svg";
import { motion } from "framer-motion";

interface SocialMedia {
  id: number;
  icon: string;
}

const socialMedia: SocialMedia[] = [
  {
    id: 1,
    icon: instagram,
  },
  {
    id: 2,
    icon: twitter,
  },
  {
    id: 3,
    icon: facebook,
  },
];

const socialMediaVariants = {
  animate: { scale: 1.1, transition: { duration: 0.5 } },
  hover: { scale: 1.1, rotate: 360, transition: { duration: 0.5 } },
  initial: { scale: 1.1, transition: { duration: 0.5 } },
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2C4B42] w-full sm:h-[137px] h-[70px] flex items-center justify-center pt-2 pb-2">
      <div className="w-full sm:flex hidden justify-center items-center px-6 lg:max-w-[1164px]">
        <div className="flex h-min justify-between items-center gap-5 max-sm:flex-wrap w-[100%]">
          <div>
            <img src={logo} alt="" width={40} height={60} />
          </div>
          <div className="flex items-center sm:justify-end justify-between gap-4 mx-auto">
            {socialMedia?.map((social: SocialMedia) => (
              <motion.div
                className="bg-white flex justify-center items-center rounded-full w-[40px] h-[40px] cursor-pointer"
                key={social.id}
                animate="animate"
                initial="initial"
                whileHover="hover"
                variants={socialMediaVariants}
              >
                <motion.img src={social.icon} alt="" />
              </motion.div>
            ))}
          </div>
          <div className="bg-white flex items-center justify-center gap-2 py-2 px-4 rounded-full h-12">
            <img src={phone} alt="" width={20} />
            <p className="sm:text-sm">+994504800800</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
