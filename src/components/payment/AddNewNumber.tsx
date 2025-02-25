import { Box, FormControl, FormLabel, useMediaQuery } from "@mui/material";
import styled from "@emotion/styled";
import Dialog from "@mui/material/Dialog";
import Heading from "../general/Heading";
import { useState } from "react";
import Verification from "./Verification";

interface ModalProps {
  open: boolean;
  handleClose: () => void;
}

const BlurryDialog = styled(Dialog)({
  backdropFilter: "blur(10px)",
});

const AddNewNumber: React.FC<ModalProps> = ({ open, handleClose }) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [openVerificaion, setOpenVerification] = useState<boolean>(false);

  const handleOpenVerification = () => {
    setOpenVerification(!openVerificaion);
  };

  return (
    <section>
      <BlurryDialog open={open} onClose={handleClose}>
        <div className="text-center text-[20px] my-5">
          <Heading name="Add new phone number" />
        </div>
        <Box
          sx={{
            maxWidth: "440px",
            width: isMobile ? "100%" : "440px",
            color: "#2C4B42",
            display: "flex",
            flexDirection: "column",
            gap: "210px",
            padding: "20px",
          }}
        >
          <FormControl sx={{ marginTop: "2rem" }}>
            <FormLabel
              sx={{
                fontSize: "14px",
                color: "#2C4B42",
                fontWeight: 600,
                fontFamily: "Kodchasan, sans-serif",
              }}
            >
              Complete address
            </FormLabel>
            <input
              type="tel"
              placeholder="+994 50 123 45 67"
              className="w-full border-b border-[#2C4B42] h-[40px] mt-2 text-[18px] outline-none font-[400] font-kodchasan"
            />
          </FormControl>
          <Box
            sx={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              gap: "10px",
            }}
          >
            <button
              onClick={handleClose}
              className="flex justify-center items-center rounded-[15px] border-2 border-[#2C4B42] bg-transparent text-[#2C4B42] w-full px-2 py-2 font-kodchasan"
            >
              Cancel
            </button>
            <button
              onClick={handleOpenVerification}
              className="flex justify-center items-center rounded-[15px] border-2 border-[#2C4B42] bg-[#2C4B42] text-white w-full px-2 py-2 font-kodchasan"
            >
              Add
            </button>
            <Verification open={openVerificaion} handleClose={handleClose} />
          </Box>
        </Box>
      </BlurryDialog>
    </section>
  );
};

export default AddNewNumber;
