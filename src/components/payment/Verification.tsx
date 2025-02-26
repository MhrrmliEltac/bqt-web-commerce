import { Box, FormControl, FormLabel, useMediaQuery } from "@mui/material";
import styled from "@emotion/styled";
import Dialog from "@mui/material/Dialog";
import Heading from "../general/Heading";

interface ModalProps {
  open: boolean;
  handleClose: () => void;
  text: string;
}

const BlurryDialog = styled(Dialog)({
  backdropFilter: "blur(10px)",
});

const Verification: React.FC<ModalProps> = ({ open, handleClose, text }) => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <section>
      <BlurryDialog open={open} onClose={handleClose}>
        <div className="text-center text-[20px] my-5">
          <Heading name="Verification" />
        </div>
        <Box
          sx={{
            maxWidth: "440px",
            width: isMobile ? "100%" : "440px",
            color: "#2C4B42",
            display: "flex",
            flexDirection: "column",
            gap: "7rem",
            padding: "20px",
          }}
        >
          <FormControl>
            <FormLabel
              sx={{
                fontSize: "18px",
                color: "#2C4B42",
                fontWeight: 600,
                fontFamily: "Kodchasan, sans-serif",
                margin: "0 0 1rem 0",
                display: "flex",
                justifyContent: "center",
              }}
            >
              We have sent a verification code <br /> to {text}
            </FormLabel>
            <div className="grid grid-cols-4 gap-5">
              <input
                type="tel"
                autoComplete="one-time-code"
                maxLength={1}
                inputMode="numeric"
                pattern="[0-9]*"
                className="aspect-square text-center border text-xl focus:border-[#2C4B42] dark:text-white bg-transparent rounded-[20px] focus:outline-none focus:ring-2 duration-200 focus:ring-transparent border-[#2C4B42] focus:ring-offset-0 font-kodchasan"
              />
              <input
                type="tel"
                autoComplete="one-time-code"
                maxLength={1}
                inputMode="numeric"
                pattern="[0-9]*"
                className="aspect-square text-center border text-xl focus:border-[#2C4B42] dark:text-white bg-transparent rounded-[20px] focus:outline-none focus:ring-2 duration-200 focus:ring-transparent border-[#2C4B42] focus:ring-offset-0 font-kodchasan"
              />
              <input
                type="tel"
                autoComplete="one-time-code"
                maxLength={1}
                inputMode="numeric"
                pattern="[0-9]*"
                className="aspect-square text-center border text-xl focus:border-[#2C4B42] dark:text-white bg-transparent rounded-[20px] focus:outline-none focus:ring-2 duration-200 focus:ring-transparent border-[#2C4B42] focus:ring-offset-0 font-kodchasan"
              />
              <input
                type="tel"
                autoComplete="one-time-code"
                maxLength={1}
                inputMode="numeric"
                pattern="[0-9]*"
                className="aspect-square text-center border text-xl focus:border-[#2C4B42] dark:text-white bg-transparent rounded-[20px] focus:outline-none focus:ring-2 duration-200 focus:ring-transparent border-[#2C4B42] focus:ring-offset-0 font-kodchasan"
              />
            </div>
          </FormControl>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <button className="flex justify-center items-center rounded-[15px] border-2 border-[#2C4B42] bg-[#2C4B42] text-white w-full px-2 py-2 font-kodchasan">
              Verify
            </button>
            <button
              onClick={handleClose}
              className="flex justify-center items-center rounded-[15px] border-2 border-[#2C4B42] bg-transparent text-[#2C4B42] w-full px-2 py-2 font-kodchasan"
            >
              Cancel
            </button>
            <Box
              sx={{
                fontWeight: 500,
                color: "#2C4B42",
                fontSize: "20px",
                fontFamily: "Kodchasan, sans-serif",
                display: "flex",
                justifyContent: "center",
                marginTop: "1rem",
              }}
            >
              Resend a code in 00:56
            </Box>
          </Box>
        </Box>
      </BlurryDialog>
    </section>
  );
};

export default Verification;
