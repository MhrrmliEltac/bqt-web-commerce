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
    <footer className="bg-[#2C4B42] w-full h-[137px] flex items-center justify-center">
      <div className="w-full flex justify-center items-center max-w-[1164px]">
        <div className="flex h-min justify-between items-center w-[100%]">
          <img src={logo} alt="" width={40} height={60} />
          <div className="flex items-center justify-end gap-4 w-[20%]">
            {socialMedia.map((social: SocialMedia) => (
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
          <div className="bg-white flex items-center justify-center gap-2 py-2 px-4 rounded-full">
            <img src={phone} alt="" />
            <p>+994504800800</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
