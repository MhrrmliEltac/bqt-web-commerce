import { motion } from "framer-motion";
import { useState } from "react";
import AddNewCard from "./AddNewCard";

const PaymentMethods = () => {
  const [selectedMethod, setSelectedMethod] = useState<string | null>("Cash");
  const [open, setOpen] = useState<boolean>(false);

  const handleClose = () => {
    setOpen(!open);
  };

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleSelectMethod = (method: string) => {
    setSelectedMethod(method);
  };

  return (
    <motion.section
      initial={{ y: 100, transition: { duration: 0.3 } }}
      animate={{ y: 0, transition: { duration: 0.3 } }}
      exit={{ y: 100, transition: { duration: 0.3 } }}
      className="mt-10"
    >
      <div className="flex flex-col w-1/2 max-sm:w-full gap-5">
        <div
          onClick={() => handleSelectMethod("Cash")}
          className="flex justify-between items-center px-3 py-3 rounded-[20px] cursor-pointer transition-all duration-300 bg-[#FFF9F3]"
        >
          <span className="text-xl font-[500] text-[#2C4B42]">Cash</span>
          <div className="flex items-center justify-center border-2 border-[#2C4B42] rounded-full w-[25px] h-[25px]">
            <span
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                selectedMethod === "Cash" ? "bg-[#2C4B42]" : "bg-transparent"
              }`}
            ></span>
          </div>
        </div>

        <div className="flex flex-col gap-5 justify-between px-3 py-3 rounded-[20px] bg-[#FFF9F3]">
          <div className="flex justify-between items-center">
            <span className="text-xl font-[500] text-[#2C4B42]">Card</span>
            <div className="flex items-center justify-center border-2 border-[#2C4B42] rounded-full w-[25px] h-[25px]">
              <span
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  selectedMethod !== "Cash" ? "bg-[#2C4B42]" : "bg-transparent"
                }`}
              ></span>
            </div>
          </div>

          {["9903", "9905", "0010"]?.map((card, index) => (
            <div
              key={index}
              onClick={() => handleSelectMethod(card)}
              className={`flex justify-center items-center cursor-pointer border border-[#2C4B42] hover:shadow-md transition-shadow duration-200 px-10 rounded-[10px] h-[40px] shrink-0 text-lg max-sm:text-sm ${
                selectedMethod === card
                  ? "bg-[#2C4B42] text-white"
                  : "text-[#2C4B42]"
              }`}
            >
              **** **** **** {card}
            </div>
          ))}

          <button
            onClick={handleOpen}
            className="border border-[#2C4B42] hover:shadow-md transition-shadow duration-200 px-10 text-[#2C4B42]  rounded-[10px] h-[40px] shrink-0 text-lg max-sm:text-sm"
          >
            Add new Card
          </button>
          <AddNewCard open={open} handleClose={handleClose} />
        </div>
      </div>
    </motion.section>
  );
};

export default PaymentMethods;
