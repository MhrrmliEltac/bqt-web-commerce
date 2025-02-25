import { Box, DialogTitle, Slider } from "@mui/material";
import styled from "@emotion/styled";
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
  backgroundColor: props.checked ? "#2C4B42" : "transparent",
  color: props.checked ? "#fff" : "transparent",
  "&::after": {
    content: props.checked ? '"✓"' : '""',
    fontSize: "14px",
    fontWeight: "bold",
  },
}));

export default function FilterModal({ handleClose, open }: ModalProps) {
  const [selectedColor, setSelectedColor] = useState<number | null>(null);
  const [displayValue, setValue] = useState<number[]>([10, 550]);
  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>(
    {}
  );

  const handleBorder = (id: number) => {
    setSelectedColor(selectedColor === id ? null : id);
  };

  const handleChange = (_: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  const handleCheckboxChange = (type: string) => {
    setCheckedItems((prev) => ({
      ...prev,
      [type]: !prev[type],
    }));
  };

  return (
    <BlurryDialog open={open} onClose={handleClose} fullWidth>
      <div className="text-center text-[20px] my-5">
        <Heading name="Filter" />
      </div>
      <Box
        sx={{
          width: "100%",
          color: "#2C4B42",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <DialogTitle sx={{ fontSize: "20px" }}>Type</DialogTitle>
        <DialogContent>
          <ul className="flex gap-5 items-center flex-wrap">
            {["Birthday", "Wedding", "Anniversary", "Date", "Theater"].map(
              (type) => (
                <li key={type} className="flex gap-4 items-center text-[15px]">
                  <CheckboxLabel>
                    <CheckboxInput
                      type="checkbox"
                      checked={checkedItems[type] || false}
                      onChange={() => handleCheckboxChange(type)}
                    />
                    <CheckboxSpan checked={checkedItems[type] || false} />
                    {type}
                  </CheckboxLabel>
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
                  border:
                    selectedColor === color.id ? "2px solid #2C4B42" : "none",
                  opacity: selectedColor === color.id ? 0.7 : 1,
                }}
                className="rounded-full w-6 h-6 shadow-sm cursor-pointer hover:opacity-90 transition-opacity duration-200"
              ></li>
            ))}
          </ul>
        </DialogContent>
        <DialogTitle sx={{ fontSize: "20px" }}>Price range</DialogTitle>
        <DialogContent>
          <Box sx={{ width: "100%" }}>
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
            <Box className="rounded-lg border p-2 border-gray-400">
              <NumberFlow value={displayValue[0]} /> ₼
            </Box>
            <Box className="rounded-lg border p-2 border-gray-400">
              <NumberFlow value={displayValue[1]} /> ₼
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
