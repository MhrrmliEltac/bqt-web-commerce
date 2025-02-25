import { motion } from "framer-motion";
import { useState } from "react";
import AddNewAddress from "./AddNewAddress";
import AddNewNumber from "./AddNewNumber";

const CustomerDetail = () => {
  const [openNumber, setNumberOpen] = useState<boolean>(false);
  const [openAddress, setAddressOpen] = useState<boolean>(false);
  const [color, setColor] = useState<string>("Home");
  const [numberColor, setNumberColor] = useState<string>("67");

  const handleChangeAddressColor = (address: string) => {
    address === "Home"
      ? setColor("Home")
      : address === "Work"
      ? setColor("Work")
      : setColor("Home");
  };

  const handleChangeNumberColor = (number: string) => {
    number === "67"
      ? setNumberColor("67")
      : number === "76"
      ? setNumberColor("76")
      : setNumberColor("67");
  };

  const handleClose = (text: string) => {
    text === "Number"
      ? setNumberOpen(!openNumber)
      : text === "Address"
      ? setAddressOpen(!openAddress)
      : null;
  };

  const handleOpen = (text: string) => {
    text === "Number"
      ? setNumberOpen(!openNumber)
      : text === "Address"
      ? setAddressOpen(!openAddress)
      : null;
  };

  return (
    <motion.section
      initial={{ y: 100, transition: { duration: 0.3 } }}
      animate={{ y: 0, transition: { duration: 0.3 } }}
      exit={{ y: 100, transition: { duration: 0.3 } }}
      className="mt-10"
    >
      <div className="flex md:flex-row flex-col gap-5 justify-between">
        <div className="w-full flex justify-between gap-4 flex-col px-4 py-2 rounded-[10px] bg-[#FFF9F3]">
          <h5 className="border-b border-[#2C4B42] py-2 text-xl">Address</h5>
          <div
            onClick={() => handleChangeAddressColor("Home")}
            className={`flex-col rounded-[10px] border-2 border-[#2C4B42] bg-${
              color === "Home" ? "[#2C4B42]" : "[#FFF9F3]"
            } flex justify-center items-start px-2 w-full py-2 ${
              color === "Home" ? "text-[#FFF9F3]" : "text-[#2C4B42]"
            } transition-all duration-300 cursor-pointer`}
          >
            <span className="text-sm">Home</span>
            <p>Azerbaijan, Baku, Azadlıq pr. 28F</p>
          </div>
          <div
            onClick={() => handleChangeAddressColor("Work")}
            className={`flex-col rounded-[10px] border-2 border-[#2C4B42] flex justify-center items-start px-2 w-full py-2 bg-${
              color === "Work" ? "[#2C4B42]" : "[#FFF9F3]"
            } ${
              color === "Work" ? "text-[#FFF9F3]" : "text-[#2C4B42]"
            }  transition-all duration-300 cursor-pointer`}
          >
            <span className="text-sm">Work</span>
            <p>AZ, Baku, 28 May küç. 13</p>
          </div>
          <button
            onClick={() => handleOpen("Address")}
            className="rounded-[10px] border-2 border-[#2C4B42] flex justify-center items-center w-full py-2"
          >
            Add new address
          </button>
          <AddNewAddress
            open={openAddress}
            handleClose={() => handleClose("Address")}
          />
        </div>
        <div className="text-[#2C4B42] w-full flex justify-between gap-4 flex-col px-4 py-2 rounded-[10px] bg-[#FFF9F3]">
          <h5 className="border-b border-[#2C4B42] py-2 text-xl">Phone</h5>
          <div
            onClick={() => handleChangeNumberColor("67")}
            className={`flex-col rounded-[10px] border-2 border-[#2C4B42] flex justify-center items-start px-2 w-full py-2 bg-${
              numberColor === "67" ? "[#2C4B42]" : "[#FFF9F3]"
            } ${
              numberColor === "67" ? "text-[#FFF9F3]" : "text-[#2C4B42]"
            }  transition-all duration-300 cursor-pointer`}
          >
            <p>+994 50 123 45 67</p>
          </div>
          <div
            onClick={() => handleChangeNumberColor("76")}
            className={`flex-col rounded-[10px] border-2 border-[#2C4B42] bg-${
              numberColor === "76" ? "[#2C4B42]" : "[#FFF9F3]"
            } flex justify-center items-start px-2 w-full py-2 ${
              numberColor === "76" ? "text-[#FFF9F3]" : "text-[#2C4B42]"
            } transition-all duration-300 cursor-pointer`}
          >
            <p>+994 50 123 54 76</p>
          </div>
          <button
            onClick={() => handleOpen("Number")}
            className="rounded-[10px] border-2 border-[#2C4B42] flex justify-center items-center w-full py-2"
          >
            Add another number
          </button>
          <AddNewNumber
            open={openNumber}
            handleClose={() => handleClose("Number")}
          />
        </div>
      </div>
    </motion.section>
  );
};

export default CustomerDetail;
