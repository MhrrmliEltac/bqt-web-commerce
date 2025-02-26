import { FormControl, FormLabel } from "@mui/material";
import ActionButtons from "./ActionButtons";
import { useState } from "react";

const formLabelStyles = {
  fontSize: "14px",
  color: "#2C4B42",
  fontWeight: 600,
  fontFamily: "Kodchasan, sans-serif",
};

// Telefon nömrəsini formatlayan funksiya
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

const PhoneNumberStep = ({
  toggleVerification,
  handleClose,
}: {
  toggleVerification: () => void;
  handleClose: () => void;
}) => {
  const [inputValue, setInputValue] = useState<string>("+994 "); // Əvvəlcədən +994 olsun

  const handleChangeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (!value.startsWith("+994")) return; // Əgər istifadəçi +994-i silmək istəsə, icazə vermə

    const formattedValue = getFormattedValue(value);
    setInputValue(formattedValue);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && inputValue.length <= 5) {
      e.preventDefault(); // Əgər `+994 ` hissəsi silinmək istənirsə, icazə vermə
    }
  };

  return (
    <>
      <FormControl sx={{ marginTop: "2rem" }}>
        <FormLabel sx={formLabelStyles}>Complete address</FormLabel>
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
      />
    </>
  );
};

export default PhoneNumberStep;
