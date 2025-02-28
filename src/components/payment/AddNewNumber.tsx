import { Box, FormControl } from "@mui/material";
import styled from "@emotion/styled";
import Dialog from "@mui/material/Dialog";
import Heading from "../general/Heading";
import { useState } from "react";
import VerificationStep from "./VerificationStep";
import ActionButtons from "./ActionButtons";
import { toast } from "sonner";

interface ModalProps {
  open: boolean;
  handleClose: () => void;
}

const BlurryDialog = styled(Dialog)({
  backdropFilter: "blur(10px)",
});

const getFormattedValue = (number: string) => {
  const numberDigits = number.replace(/\D/g, "").slice(3, 12);
  let res = "+994";

  if (numberDigits.length > 0) {
    res += ` (${numberDigits.slice(0, 2)})`;
  }
  if (numberDigits.length >= 3) {
    res += ` ${numberDigits.slice(2, 5)}`;
  }
  if (numberDigits.length >= 6) {
    res += `-${numberDigits.slice(5, 7)}`;
  }
  if (numberDigits.length >= 8) {
    res += `-${numberDigits.slice(7)}`;
  }
  return res;
};

const AddNewNumber: React.FC<ModalProps> = ({ open, handleClose }) => {
  const [openVerification, setOpenVerification] = useState(false);
  const [otp, setOtp] = useState("");

  const toggleVerification = () => {
    if (inputValue.length === 5) {
      toast.info("Enter phone number");
    } else if (inputValue.length >= 5 && inputValue.length < 19) {
      toast.error("Invalid phone number");
    } else {
      setOpenVerification((prev) => !prev);
    }
  };

  const handleVerificationClose = () => {
    handleClose();
    setTimeout(toggleVerification, 0);
  };

  const [inputValue, setInputValue] = useState<string>("+994 ");

  const handleChangeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (!value.startsWith("+994")) return;

    const formattedValue = getFormattedValue(value);
    setInputValue(formattedValue);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && inputValue.length <= 5) {
      e.preventDefault();
    }
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
              text={`${inputValue} phone number`}
              handleClose={handleClose}
            />
          ) : (
            <>
              <FormControl>
                <input
                  type="tel"
                  value={inputValue}
                  placeholder="+994 50 123 45 67"
                  onChange={handleChangeInputValue}
                  onKeyDown={handleKeyDown}
                  className="w-full border-b border-[#2C4B42] h-[40px] mt-2 text-[18px] outline-none font-[400] font-kodchasan"
                />
              </FormControl>
              <ActionButtons
                primaryAction={toggleVerification}
                primaryText="Add"
                secondaryAction={handleClose}
                secondaryText="Cancel"
                inputValueLength={inputValue.length}
              />
            </>
          )}
        </Box>
      </BlurryDialog>
    </section>
  );
};

export default AddNewNumber;
