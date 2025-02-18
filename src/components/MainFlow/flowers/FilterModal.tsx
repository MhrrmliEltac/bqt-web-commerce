import { Box, experimentalStyled, FormControl } from "@mui/material";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Button from "../../general/Button";

interface ModalProps {
  open: boolean;
  handleClose: () => void;
}

const BlurryDialog = experimentalStyled(Dialog)<DialogProps>(({}) => ({
  backdropFilter: "blur(10px)",
}));

export default function FilterModal({ handleClose, open }: ModalProps) {
  return (
    <BlurryDialog open={open} onClose={handleClose}>
      <Box sx={{ padding: "20px", width: "440px" }}>
        <DialogContent
          sx={{ display: "flex", flexDirection: "column", gap: "40px" }}
        >
          <FormControl fullWidth>
            <p className="text-sm text-[#2C4B42] font-[600]">Location</p>
            <select
              name="location"
              id="location"
              className="flex font-kodchasan text-lg outline-none text-[#2C4B42] justify-between items-center border-bottom border-[#2C4B42] w-full custom-select"
            >
              <option value="baku">Baku, Azerbaijan</option>
              <option value="baku">Baku, Azerbaijan</option>
              <option value="baku">Baku, Azerbaijan</option>
            </select>
          </FormControl>
          <FormControl fullWidth>
            <p className="text-sm text-[#2C4B42] font-[600]">Currency</p>
            <select
              className="flex font-kodchasan text-lg outline-none text-[#2C4B42] justify-between items-center border-bottom border-[#2C4B42] w-full custom-select"
              name="currency"
              id="currency"
            >
              <option value="currency">Azerbaijani manat (₼)</option>
              <option value="currency">Azerbaijani manat (₼)</option>
              <option value="currency">Azerbaijani manat (₼)</option>
            </select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => {}} buttonName="Apply" />
        </DialogActions>
      </Box>
    </BlurryDialog>
  );
}
