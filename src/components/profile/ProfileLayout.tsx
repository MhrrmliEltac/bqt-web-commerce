import { useState } from "react";
import Heading from "../general/Heading";
import { AnimatePresence, motion } from "framer-motion";
import Profile from "./Profile";
import { sectionVariant } from "./Profile";
import MyAddress from "./MyAddress";
import MyCards from "./MyCards";
import ChangePassword from "./ChangePassword";

const ProfileLayout = () => {
  const [tabArr, _] = useState<string[]>([
    "Personal info",
    "My addresses",
    "My cards",
    "Change password",
  ]);
  const [activeTab, setActiveTab] = useState<string>("Personal info");

  const handleChangeActive = (text: string) => {
    setActiveTab(text);
  };

  return (
    <motion.section
      variants={sectionVariant}
      initial="initial"
      animate="animate"
      transition={{ duration: 0.5 }}
    >
      <div>
        <div className="flex max-sm:justify-center">
          <Heading name="Profile" />
        </div>
        <div className="mt-10 flex flex-col gap-10 mb-10">
          <div className="w-full overflow-auto">
            <ul className="flex justify-between items-center gap-5 lg:w-[70%] md:w-[80%] text-lg overflow-auto max-sm:w-[550px]">
              {tabArr.map((item, index) => (
                <motion.li
                  initial={{ opacity: activeTab === item ? 1 : 0.5 }}
                  animate={{ opacity: activeTab === item ? 1 : 0.5 }}
                  transition={{ duration: 0.6 }}
                  onClick={() => handleChangeActive(item)}
                  key={index}
                  className={`${
                    activeTab === item && "border-b-2"
                  } border-[#2C4B42] font-kodchasan cursor-pointer text-[#2C4B42] font-[500]`}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
            >
              {activeTab === tabArr[0] ? (
                <Profile />
              ) : activeTab === tabArr[1] ? (
                <MyAddress />
              ) : activeTab === tabArr[2] ? (
                <MyCards />
              ) : activeTab === tabArr[3] ? (
                <ChangePassword />
              ) : null}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  );
};

export default ProfileLayout;
