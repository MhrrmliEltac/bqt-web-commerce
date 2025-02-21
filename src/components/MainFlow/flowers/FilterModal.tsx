import { Box, DialogTitle, Slider, styled } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Button from "../../general/Button";
import Heading from "../../general/Heading";
import { useState } from "react";
import NumberFlow from "@number-flow/react";

interface ModalProps {
  open: boolean;
  handleClose: () => void;
}

type liItem = {
  id: number;
  color: string;
};

const colors: liItem[] = [
  { id: 1, color: "#E34141" },
  { id: 2, color: "#BC6980" },
  { id: 3, color: "#E0E34C" },
  { id: 4, color: "#85E34C" },
  { id: 5, color: "#4C9BE3" },
  { id: 6, color: "#E34CD4" },
  { id: 7, color: "#E34141" },
];

const BlurryDialog = styled(Dialog)(({}) => ({
  backdropFilter: "blur(10px)",
}));

export default function FilterModal({ handleClose, open }: ModalProps) {
  const [selectedColor, setSelectedColor] = useState<number | null>(null);
  const [displayValue, setValue] = useState<number[]>([10, 550]);

  const handleBorder = (id: number) => {
    setSelectedColor(id);
  };

  const handleChange = (_: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  return (
    <BlurryDialog open={open} onClose={handleClose}>
      <div className="text-center text-[20px] my-5">
        <Heading name="Filter" />
      </div>
      <Box sx={{ width: "440px", color: "#2C4B42" }}>
        <DialogTitle sx={{ fontSize: "20px" }}>Type</DialogTitle>
        <DialogContent>
          <ul className="flex gap-5 items-center flex-wrap">
            {["Birthday", "Wedding", "Anniversary", "Date", "Theater"].map(
              (type, index) => (
                <li key={index} className="flex gap-2 items-center text-[15px]">
                  <label className="cl-checkbox flex items-center justify-center">
                    <input type="checkbox" />
                    <span></span>
                    {type}
                  </label>
                </li>
              )
            )}
          </ul>
        </DialogContent>
        <DialogTitle sx={{ fontSize: "20px" }}>Colors</DialogTitle>
        <DialogContent>
          <ul className="flex gap-3 items-center flex-wrap">
            {colors.map((color) => (
              <li
                key={color.id}
                onClick={() => handleBorder(color.id)}
                style={{
                  backgroundColor: color.color,
                  transition: "border 0.1s ease",
                  borderWidth: selectedColor === color.id ? 2 : 0,
                  borderColor:
                    selectedColor === color.id ? "#2C4B42" : "transparent",
                }}
                className="rounded-full w-6 h-6 shadow-sm cursor-pointer hover:opacity-90 transition-opacity duration-200"
              ></li>
            ))}
          </ul>
        </DialogContent>
        <DialogTitle sx={{ fontSize: "20px" }}>Price range</DialogTitle>
        <DialogContent>
          <Box sx={{ width: "100%", color: "#2C4B42" }}>
            <Slider
              value={displayValue}
              sx={{ color: "#2C4B42" }}
              onChange={handleChange}
              valueLabelDisplay="auto"
              min={10}
              max={550}
            />
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box
              sx={{
                borderRadius: "12px",
                backgroundColor: "whitef",
                color: "#2C4B42",
                padding: "5px 10px",
                border: "1px solid #B9B9B9",
                fontFamily: "Kodchasan, sans-serif",
              }}
            >
              <NumberFlow value={displayValue[0]} /> ₼
            </Box>
            <Box
              sx={{
                borderRadius: "12px",
                backgroundColor: "whitef",
                color: "#2C4B42",
                padding: "5px 10px",
                border: "1px solid #B9B9B9",
                fontFamily: "Kodchasan, sans-serif",
              }}
            >
              <NumberFlow value={displayValue[1]} /> <span>₼</span>
            </Box>
          </Box>
        </DialogContent>

        <DialogActions>
          <Button onClick={() => {}} buttonName="Apply" />
        </DialogActions>
      </Box>
    </BlurryDialog>
  );
}
