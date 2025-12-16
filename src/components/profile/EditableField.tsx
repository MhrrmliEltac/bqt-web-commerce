import { useState } from "react";
import { FormControl, FormLabel, Box } from "@mui/material";
import { Icon } from "@iconify/react";

interface EditableFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (name: string, value: string) => void;
  open?: boolean;
  setOpen?: (open: boolean) => void;
  ModalComponent?: React.FC<{ open: boolean; handleClose: () => void }>;
}

const EditableField: React.FC<EditableFieldProps> = ({
  label,
  name,
  value,
  onChange,
  open,
  setOpen,
  ModalComponent,
}) => {
  const [isReadOnly, setIsReadOnly] = useState(true);

  const handleEditClick = () => {
    if (setOpen && ModalComponent) {
      setOpen(!open);
    } else {
      setIsReadOnly(!isReadOnly);
    }
  };

  const handleClose = () => {
    if (setOpen) setOpen(false);
    setIsReadOnly(true);
  };

  return (
    <FormControl>
      <FormLabel
        sx={{
          fontFamily: "Kodchasan, sans-serif",
          fontWeight: "600",
          fontSize: "14px",
        }}
      >
        {label}
      </FormLabel>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          borderBottom: "1px solid #2c4b42",
          width: { xs: "100%", sm: "75%", md: "40%" },
        }}
      >
        <input
          type={name === "email" ? "email" : "text"}
          name={name}
          readOnly={isReadOnly}
          value={value}
          onChange={(e) => onChange(name, e.target.value)}
          className="font-[400] font-kodchasan text-[#2c4b42] text-lg bg-transparent outline-none"
        />
        <div
          className="cursor-pointer text-[#2C4B42] text-base font-medium"
          onClick={handleEditClick}
        >
          {isReadOnly ? (
            "Edit"
          ) : (
            <div className="flex justify-between items-center w-12">
              <Icon
                icon="maki:cross"
                className="cursor-pointer text-[#2c4b42]"
                fontSize="20px"
                onClick={handleClose}
              />
              <Icon
                icon="material-symbols:check"
                fontSize="28px"
                onClick={handleClose}
              />
            </div>
          )}
        </div>
      </Box>
      {open && ModalComponent && (
        <ModalComponent open={open} handleClose={handleClose} />
      )}
    </FormControl>
  );
};

export default EditableField;
