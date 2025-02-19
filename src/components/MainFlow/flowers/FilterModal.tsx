import { Box, DialogTitle, experimentalStyled } from "@mui/material";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Button from "../../general/Button";
import Heading from "../../general/Heading";

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
      <div className="text-center">
        <Heading name="Filter" />
      </div>
      <Box sx={{ padding: "20px", width: "440px" }}>
        <DialogTitle sx={{ textAlign: "center" }}>Filter</DialogTitle>
        <DialogContent
          sx={{ display: "flex", flexDirection: "column", gap: "40px" }}
        ></DialogContent>
        <DialogActions>
          <Button onClick={() => {}} buttonName="Apply" />
        </DialogActions>
      </Box>
    </BlurryDialog>
  );
}
