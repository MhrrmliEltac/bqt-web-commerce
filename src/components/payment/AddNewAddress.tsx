import { Box, FormControl, FormLabel } from "@mui/material";
import styled from "@emotion/styled";
import Dialog from "@mui/material/Dialog";
import Heading from "../general/Heading";
import { toast } from "sonner";

interface ModalProps {
  open: boolean;
  headingName: string;
  handleClose: () => void;
}

const BlurryDialog = styled(Dialog)({
  backdropFilter: "blur(10px)",
});

const AddNewAddress: React.FC<ModalProps> = ({
  open,
  handleClose,
  headingName,
}) => {
  const addAddressNotify = () => {
    handleClose();
    headingName === "change"
      ? toast.success("Change address")
      : toast.success("Address added");
  };

  return (
    <section>
      <BlurryDialog open={open} onClose={handleClose}>
        <div className="text-center text-[20px] my-5">
          <Heading
            name={
              headingName === "change" ? "Change address" : "Add new address"
            }
          />
        </div>
        <Box
          sx={{
            maxWidth: "440px",
            width: { xs: "100%", sm: "440px" },
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
              Complete address
            </FormLabel>
            <input
              type="text"
              placeholder="Adress"
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
              Comments
            </FormLabel>
            <input
              type="text"
              placeholder="Comments for courier"
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
              onClick={handleClose}
              className="flex justify-center items-center rounded-[15px] border-2 border-[#2C4B42] bg-transparent text-[#2C4B42] w-full px-2 py-2 font-kodchasan"
            >
              Cancel
            </button>
            <button
              className="flex justify-center items-center rounded-[15px] border-2 border-[#2C4B42] bg-[#2C4B42] text-white w-full px-2 py-2 font-kodchasan"
              onClick={addAddressNotify}
            >
              Add
            </button>
          </Box>
        </Box>
      </BlurryDialog>
    </section>
  );
};

export default AddNewAddress;
