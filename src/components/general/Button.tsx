import { motion } from "framer-motion";

interface ButtonProps {
  buttonName: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({ buttonName, onClick }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1, opacity: 0.9 }}
      onClick={onClick}
      className="flex font-kodchasan my-5 bg-[#2C4B42] text-white justify-center items-center w-full rounded-xl py-3"
    >
      {buttonName}
    </motion.button>
  );
};

export default Button;
