import Heading from "../general/Heading";
import profile from "../../assets/profile.svg";
import edit from "../../assets/edit-icon.svg";
import { Box, FormControl, FormLabel } from "@mui/material";
import { useState } from "react";
import { motion } from "framer-motion";

interface User {
  name: string;
  email: string;
  phone: string;
}

const Profile = () => {
  const [activeTab, setActiveTab] = useState<string>("Personal info");
  const [disable, setDisabled] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<User[]>([
    {
      name: "Edward Norton",
      email: "emailtest@mail.com",
      phone: "+994 50 123 45 67",
    },
  ]);

  const handleChangeActive = (text: string) => {
    setActiveTab(text);
  };

  const handleInputDisable = () => {
    setDisabled(!disable);
  };

  return (
    <section>
      <div>
        <Heading name="Profile" />
      </div>
      <div className="mt-10 flex flex-col gap-10  mb-10">
        <ul className="flex justify-between items-center w-full gap-5 md:w-[75%] text-lg">
          {["Personal info", "My addresses", "My cards", "Change password"].map(
            (item, index) => (
              <motion.li
                initial={{ transition: { duration: 0.6 } }}
                animate={{ transition: { duration: 0.6 } }}
                onClick={() => handleChangeActive(item)}
                key={index}
                className={`${
                  activeTab === item && "border-b-2"
                } border-[#2C4B42] font-kodchasan cursor-pointer text-[22px] text-[#2C4B42] font-[500]`}
              >
                {item}
              </motion.li>
            )
          )}
        </ul>
        <div className="flex flex-col gap-10 mt-5 ">
          <div className="rounded-full relative">
            <img
              src={profile}
              alt=""
              width={80}
              height={80}
              className="rounded-full object-cover bg-center bg-cover w-[150px] h-[150px]"
            />
            <div className="absolute top-[75%] left-[100px] bg-[#2C4B42] rounded-full w-10 h-10 flex justify-center items-center">
              <img src={edit} alt="" />
            </div>
          </div>
          <FormControl>
            <FormLabel
              sx={{
                fontFamily: "Kodchasan, sans-serif",
                color: "#2c4b24",
                fontWeight: "600",
                fontSize: "14px",
              }}
            >
              Name
            </FormLabel>
            <Box
              sx={{
                display: "flex",
                width: { xs: "100%", sm: "408px" },
                justifyContent: "space-between",
                borderBottom: "1px solid #2c4b42",
              }}
            >
              <input
                type="name"
                name="name"
                id="name"
                disabled={disable}
                value={inputValue[0].name}
                className="font-[400] font-kodchasan text-[#2C4B42] text-lg bg-transparent outline-none"
              />
              <p className="cursor-pointer text-[#2C4B42] text-base font-medium">
                Edit
              </p>
            </Box>
          </FormControl>
          <FormControl>
            <FormLabel
              sx={{
                fontFamily: "Kodchasan, sans-serif",
                color: "#2c4b24",
                fontWeight: "600",
                fontSize: "14px",
              }}
            >
              Phone
            </FormLabel>
            <Box
              sx={{
                display: "flex",
                width: { xs: "100%", sm: "408px" },
                justifyContent: "space-between",
                borderBottom: "1px solid #2c4b42",
              }}
            >
              <input
                type="tel"
                name="phone"
                id="phone"
                disabled={disable}
                value={inputValue[0].phone}
                className="font-[400] font-kodchasan text-[#2c4b42] text-lg bg-transparent outline-none"
              />
              <p className="cursor-pointer text-[#2c4b42] text-base font-medium">
                Edit
              </p>
            </Box>
          </FormControl>
          <FormControl>
            <FormLabel
              sx={{
                fontFamily: "Kodchasan, sans-serif",
                color: "#2c4b24",
                fontWeight: "600",
                fontSize: "14px",
              }}
            >
              Email
            </FormLabel>
            <Box
              sx={{
                display: "flex",
                width: { xs: "100%", sm: "408px" },
                justifyContent: "space-between",
                borderBottom: "1px solid #2c4b42",
              }}
            >
              <input
                type="email"
                name="email"
                id="email"
                value={inputValue[0].email}
                disabled={disable}
                className="font-[400] font-kodchasan text-[#2c4b42] text-lg bg-transparent outline-none"
              />
              <p
                onClick={handleInputDisable}
                className="cursor-pointer text-[#2c4b42] text-base font-medium"
              >
                Edit
              </p>
            </Box>
          </FormControl>
        </div>
        <div className="flex flex-col gap-5 justify-start items-start">
          <button className="text-[#2C4B42] font-[500] text-lg font-kodchasan">
            Log out
          </button>
          <button className="text-[#656565] font-[500] text-lg font-kodchasan">
            Delete account
          </button>
        </div>
      </div>
    </section>
  );
};

export default Profile;
