import { Box } from "@mui/material";
import styled from "@emotion/styled";
import Dialog from "@mui/material/Dialog";
import Heading from "../general/Heading";
import { useState } from "react";
import PhoneNumberStep from "./PhoneNumberStep";
import VerificationStep from "./VerificationStep";

interface ModalProps {
  open: boolean;
  handleClose: () => void;
}

const BlurryDialog = styled(Dialog)({
  backdropFilter: "blur(10px)",
});

const AddNewNumber: React.FC<ModalProps> = ({ open, handleClose }) => {
  const [openVerification, setOpenVerification] = useState(false);
  const [otp, setOtp] = useState("");

  const toggleVerification = () => setOpenVerification((prev) => !prev);

  const handleVerificationClose = () => {
    handleClose();
    setTimeout(toggleVerification, 1000);
  };
  return (
    <section>
      <BlurryDialog
        open={open}
        onClose={handleVerificationClose}
        disableEnforceFocus
        disableAutoFocus
        aria-hidden={true}
      >
        <div className="text-center text-[20px] my-5">
          <Heading
            name={openVerification ? "Verification" : "Add new phone number"}
          />
        </div>
        <Box
          sx={{
            maxWidth: "440px",
            width: { xs: "100%", sm: "440px" },
            color: "#2C4B42",
            display: "flex",
            flexDirection: "column",
            gap: openVerification ? "7rem" : "80px",
            padding: "20px",
          }}
        >
          {openVerification ? (
            <VerificationStep
              otp={otp}
              setOtp={setOtp}
              text="text"
              handleClose={handleClose}
            />
          ) : (
            <PhoneNumberStep
              toggleVerification={toggleVerification}
              handleClose={handleClose}
            />
          )}
        </Box>
      </BlurryDialog>
    </section>
  );
};

export default AddNewNumber;
