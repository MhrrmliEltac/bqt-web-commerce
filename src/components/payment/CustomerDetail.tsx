import { motion } from "framer-motion";
import { useState } from "react";
import AddNewAddress from "./AddNewAddress";
import AddNewNumber from "./AddNewNumber";

interface Number {
  id: number;
  tel?: string;
}

const number: Number[] = [
  {
    id: 1,
    tel: "+994 50 123 45 67",
  },
  {
    id: 2,
    tel: "+994 50 123 54 76",
  },
];

interface Address extends Number {
  title: string;
  location: string;
}

const address: Address[] = [
  { id: 1, title: "Home", location: "Azerbaijan, Baku, Azadlıq pr. 28F" },
  { id: 2, title: "Work", location: "AZ, Baku, 28 May küç. 13" },
];

const CustomerDetail = () => {
  const [openNumber, setNumberOpen] = useState<boolean>(false);
  const [openAddress, setAddressOpen] = useState<boolean>(false);
  const [addressArr] = useState<Address[]>(address);
  const [addressColor, setAddressColor] = useState<number>(1);
  const [numberArr, _] = useState<Number[]>(number);
  const [numberColor, setNumberColor] = useState<number>(1);

  const handleChangeAddressColor = (id: number) => {
    let index = id - 1;
    addressArr[index].id === id && setAddressColor(id);
  };

  const handleChangeNumberColor = (id: number) => {
    let index = id - 1;
    numberArr[index].id === id && setNumberColor(id);
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
          {address &&
            address.length > 0 &&
            address?.map((address: Address) => (
              <div
                key={address.id}
                onClick={() => handleChangeAddressColor(address.id)}
                className={`flex-col rounded-[10px] border-2 border-[#2C4B42] flex justify-center items-start px-2 w-full py-2 transition-all duration-300 cursor-pointer bg-${
                  addressColor === address.id && "[#2C4B42]"
                } ${addressColor === address.id && "text-[#FFF9F3]"}`}
              >
                <span className="text-sm">{address.title}</span>
                <p>{address.location}</p>
              </div>
            ))}
          <button
            onClick={() => handleOpen("Address")}
            className="rounded-[10px] border-2 border-[#2C4B42] flex justify-center items-center w-full py-2"
          >
            Add new address
          </button>
          <AddNewAddress
            open={openAddress}
            handleClose={() => handleClose("Address")}
            headingName=""
          />
        </div>
        <div className="text-[#2C4B42] w-full flex justify-between gap-4 flex-col px-4 py-2 rounded-[10px] bg-[#FFF9F3]">
          <h5 className="border-b border-[#2C4B42] py-2 text-xl">Phone</h5>
          {number &&
            number.length > 0 &&
            number?.map((number: Number) => (
              <div
                key={number.id}
                onClick={() => handleChangeNumberColor(number.id)}
                className={`flex-col rounded-[10px] border-2 border-[#2C4B42] flex justify-center items-start px-2 w-full py-2 transition-all duration-300 cursor-pointer bg-${
                  numberColor === number.id && "[#2C4B42]"
                } ${numberColor === number.id && "text-[#FFF9F3]"}`}
              >
                <p>{number.tel}</p>
              </div>
            ))}
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
