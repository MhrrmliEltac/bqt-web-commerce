import { Box, FormControl, FormLabel } from "@mui/material";
import styled from "@emotion/styled";
import Dialog from "@mui/material/Dialog";
import Heading from "../general/Heading";

interface ModalProps {
  open: boolean;
  handleClose: () => void;
}

const BlurryDialog = styled(Dialog)({
  backdropFilter: "blur(10px)",
});

const CheckboxLabel = styled.label({
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
  position: "relative",
  gap: "8px",
});

const CheckboxInput = styled.input({
  appearance: "none",
  position: "absolute",
  opacity: 0,
  pointerEvents: "none",
});

const CheckboxSpan = styled.span<{ checked: boolean }>((props) => ({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: "20px",
  height: "20px",
  border: "2px solid #2C4B42",
  borderRadius: "4px",
  position: "relative",
  transition: "background-color 0.2s, border-color 0.2s",
  backgroundColor: props.checked ? "#2C4B42" : "transparent",
  color: props.checked ? "#fff" : "transparent",

  "&::after": {
    content: props.checked ? '"✓"' : '""',
    fontSize: "14px",
    fontWeight: "bold",
  },
}));

const AddNewCard: React.FC<ModalProps> = ({ open, handleClose }) => {
  return (
    <section>
      <BlurryDialog open={open} onClose={handleClose}>
        <div className="text-center text-[20px] my-5">
          <Heading name="Add a new card" />
        </div>
        <Box
          sx={{
            maxWidth: "440px",
            width: "100%",
            color: "#2C4B42",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            padding: "20px",
          }}
        >
          <FormControl>
            <FormLabel
              sx={{
                fontSize: "14px",
                color: "#2C4B42",
                fontWeight: 600,
                fontFamily: "Kodchasan, sans-serif",
              }}
            >
              Card holders name
            </FormLabel>
            <input
              type="text"
              className="w-full border-b border-[#2C4B42] h-[40px] mt-2 text-[18px] outline-none font-[400] font-kodchasan"
            />
          </FormControl>
          <FormControl>
            <FormLabel
              sx={{
                fontSize: "14px",
                color: "#2C4B42",
                fontWeight: 600,
                fontFamily: "Kodchasan, sans-serif",
              }}
            >
              Card number{" "}
            </FormLabel>
            <input
              type="text"
              className="w-full border-b border-[#2C4B42] h-[40px] mt-2 text-[18px] outline-none font-[400] font-kodchasan"
            />
          </FormControl>
          <Box
            sx={{
              display: "flex",
              gap: 5,
              flexDirection: { xs: "column", sm: "row" },
            }}
          >
            <FormControl>
              <FormLabel
                sx={{
                  fontSize: "14px",
                  color: "#2C4B42",
                  fontWeight: 600,
                  fontFamily: "Kodchasan, sans-serif",
                }}
              >
                Expiry date
              </FormLabel>
              <input
                type="text"
                value={"11/28"}
                className="w-full text-[18px] border-b border-[#2C4B42] outline-none h-[40px] mt-2 font-[400] font-kodchasan"
              />
            </FormControl>
            <FormControl>
              <FormLabel
                sx={{
                  fontSize: "14px",
                  color: "#2C4B42",
                  fontWeight: 600,
                  fontFamily: "Kodchasan, sans-serif",
                }}
              >
                CVV
              </FormLabel>
              <input
                type="text"
                value={"***"}
                className="w-full border-b border-[#2C4B42] outline-none h-[40px] mt-2"
              />
            </FormControl>
          </Box>
          <CheckboxLabel>
            <CheckboxInput type="checkbox" />
            <CheckboxSpan checked={true} />
            Save this card
          </CheckboxLabel>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: "10px",
            }}
          >
            <button
              onClick={handleClose}
              className="flex justify-center items-center rounded-[15px] border-2 border-[#2C4B42] bg-transparent text-[#2C4B42] w-full px-2 py-2 font-kodchasan"
            >
              Cancel
            </button>
            <button className="flex justify-center items-center rounded-[15px] border-2 border-[#2C4B42] bg-[#2C4B42] text-white w-full px-2 py-2 font-kodchasan">
              Add
            </button>
          </Box>
        </Box>
      </BlurryDialog>
    </section>
  );
};

export default AddNewCard;
