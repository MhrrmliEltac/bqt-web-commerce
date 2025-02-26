import { Box, FormControl, FormLabel } from "@mui/material";
import ActionButtons from "./ActionButtons";
import OTPInput from "./OTPInput";

const formLabelStyles = {
  fontSize: "14px",
  color: "#2C4B42",
  fontWeight: 600,
  fontFamily: "Kodchasan, sans-serif",
};

const VerificationStep = ({
  otp,
  setOtp,
  handleVerificationClose,
}: {
  otp: string;
  setOtp: (value: string) => void;
  handleVerificationClose: () => void;
}) => (
  <>
    <FormControl>
      <FormLabel
        sx={{ ...formLabelStyles, textAlign: "center", marginBottom: "1rem" }}
      >
        We have sent a verification code <br /> to +994501234567 phone number
      </FormLabel>
      <div className="grid grid-cols-4 gap-5">
        <OTPInput valueLength={4} value={otp} onChange={setOtp} />
      </div>
    </FormControl>
    <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <ActionButtons
        primaryAction={() => {}}
        primaryText="Verify"
        secondaryAction={handleVerificationClose}
        secondaryText="Cancel"
      />
      <Box
        sx={{
          fontWeight: 500,
          color: "#2C4B42",
          fontSize: "20px",
          fontFamily: "Kodchasan, sans-serif",
          textAlign: "center",
          marginTop: "1rem",
        }}
      >
        Resend a code in 00:56
      </Box>
    </Box>
  </>
);

export default VerificationStep;
