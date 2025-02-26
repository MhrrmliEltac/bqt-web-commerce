import { Box, FormControl, useMediaQuery } from "@mui/material";
import styled from "@emotion/styled";
import Dialog from "@mui/material/Dialog";
import Heading from "../general/Heading";
import React, { useState } from "react";
import VerificationStep from "../payment/VerificationStep";

interface ModalProps {
  open: boolean;
  handleClose: () => void;
}

const BlurryDialog = styled(Dialog)({
  backdropFilter: "blur(10px)",
});

const AddNewEmail: React.FC<ModalProps> = ({ open, handleClose }) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [openVerificaion, setOpenVerification] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");

  const handleOpenVerification = () => {
    setOpenVerification(!openVerificaion);
  };

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <section>
      <BlurryDialog open={open} onClose={handleClose}>
        <div className="text-center text-[20px] mt-16">
          <Heading name="Add new email" />
        </div>
        <Box
          sx={{
            maxWidth: "440px",
            width: isMobile ? "100%" : "440px",
            color: "#2C4B42",
            display: "flex",
            flexDirection: "column",
            gap: "70px",
            padding: "10% 15% 10%",
          }}
        >
          <FormControl>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleChangeEmail(e)
              }
              className="w-full border-b border-[#2C4B42] h-[40px] mt-2 text-[18px] outline-none font-[400] font-kodchasan"
            />
          </FormControl>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <button
              disabled={email === "" ? true : false}
              onClick={handleOpenVerification}
              className={`flex justify-center items-center rounded-[15px] border-2 border-[#2C4B42] bg-[#2C4B42] text-white w-full px-2 py-2 font-kodchasan ${
                email === "" ? "opacity-60" : "opacity-100"
              }
            `}
            >
              Add
            </button>
            <button
              onClick={handleClose}
              className="flex justify-center items-center rounded-[15px] border-2 border-[#2C4B42] bg-transparent text-[#2C4B42] w-full px-2 py-2 font-kodchasan"
            >
              Cancel
            </button>

            <VerificationStep
              otp=""
              setOtp={() => {}}
              handleVerificationClose={handleOpenVerification}
            />
          </Box>
        </Box>
      </BlurryDialog>
    </section>
  );
};

export default AddNewEmail;
