import { Box } from "@mui/material";

const ActionButtons = ({
  primaryAction,
  primaryText,
  secondaryAction,
  secondaryText,
}: {
  primaryAction: () => void;
  primaryText: string;
  secondaryAction: () => void;
  secondaryText: string;
}) => (
  <Box
    sx={{
      display: "flex",
      flexDirection: { xs: "column", sm: "row" },
      gap: "10px",
    }}
  >
    <button
      onClick={secondaryAction}
      className="flex justify-center items-center rounded-[15px] border-2 border-[#2C4B42] bg-transparent text-[#2C4B42] w-full px-2 py-2 font-kodchasan"
    >
      {secondaryText}
    </button>
    <button
      onClick={primaryAction}
      className="flex justify-center items-center rounded-[15px] border-2 border-[#2C4B42] bg-[#2C4B42] text-white w-full px-2 py-2 font-kodchasan"
    >
      {primaryText}
    </button>
  </Box>
);

export default ActionButtons;
