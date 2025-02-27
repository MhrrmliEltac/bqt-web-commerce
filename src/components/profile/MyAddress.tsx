import { motion } from "framer-motion";
import { sectionVariant } from "./Profile";
import AddNewAddress from "../payment/AddNewAddress";
import { useState } from "react";
import { Box, FormControl, FormLabel } from "@mui/material";

interface AddressType {
  id: number;
  title: string;
  location: string;
}

const address: AddressType[] = [
  { id: 1, title: "Home", location: "Azerbaijan, Baku, Azadlıq pr. 28F" },
  { id: 2, title: "Work", location: "AZ, Baku, 28 May küç. 13" },
];

const MyAddress = () => {
  const [openAddress, setOpenAddress] = useState<{
    edit: boolean;
    new: boolean;
  }>({
    edit: false,
    new: false,
  });
  const [addressArr, _] = useState<AddressType[]>(address);
  const handleClose = () => {
    setOpenAddress((prev) => ({
      ...prev,
      new: false,
      edit: false,
    }));
  };

  const handleOpenNew = () => {
    setOpenAddress({ edit: false, new: true });
  };

  const handleOpenEdit = () => {
    setOpenAddress({ edit: true, new: false });
  };

  return (
    <motion.section
      variants={sectionVariant}
      initial="initial"
      animate="animate"
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-10">
          {address &&
            address.length > 0 &&
            addressArr.map((item: AddressType) => (
              <FormControl key={item.id}>
                <FormLabel
                  sx={{
                    fontFamily: "Kodchasan, sans-serif",
                    color: "#2c4b24",
                    fontWeight: "600",
                    fontSize: "14px",
                  }}
                >
                  {item.title}
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
                    type="text"
                    className="font-[400] font-kodchasan text-[#2c4b42] text-lg bg-transparent outline-none"
                    value={item.location}
                    readOnly
                  />
                  <button onClick={handleOpenEdit}>Edit</button>
                  {openAddress.edit && (
                    <AddNewAddress
                      open={openAddress.edit}
                      handleClose={handleClose}
                      headingName="change"
                    />
                  )}
                </Box>
              </FormControl>
            ))}
        </div>

        <Box
          sx={{
            width: { sx: "100%", sm: "408px" },
          }}
        >
          <button
            onClick={handleOpenNew}
            className="rounded-[10px] border-2 border-[#2C4B42] flex justify-center items-center w-full py-2 hover:bg-[#2c4b42] transition-colors duration-200 hover:text-[#FFF9F3]"
          >
            Add new address
          </button>
          {openAddress.new && (
            <AddNewAddress
              open={openAddress.new}
              handleClose={handleClose}
              headingName=""
            />
          )}
        </Box>
      </div>
    </motion.section>
  );
};

export default MyAddress;
