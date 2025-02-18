interface ButtonProps {
  buttonName: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({ buttonName, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex font-kodchasan my-5 bg-[#2C4B42] text-white justify-center items-center w-full rounded-xl py-3"
    >
      {buttonName}
    </button>
  );
};

export default Button;
