import BasicDialog from "./Modal";

interface SelectProps {
  handleOpen?: () => void;
  handleShow?: () => void;
  handleDontShow?: () => void;
  handleClose?: () => void;
  show: boolean;
  open?: boolean;
  Group?: string;
  arrowDownType?: string;
  name?: string;
}

const Select: React.FC<SelectProps> = ({
  handleOpen,
  handleDontShow,
  handleShow,
  handleClose,
  show,
  open,
  arrowDownType,
  name,
}) => {
  return (
    <>
      <div
        className={`flex gap-2 relative justify-center group`}
        onMouseEnter={handleShow}
        onMouseLeave={handleDontShow}
      >
        <p className="p-0 m-0 cursor-pointer text-lg" onClick={handleOpen}>
          {name}
        </p>
        <img
          src={arrowDownType}
          alt="arrow-down"
          className={`arrow-down cursor-pointer  transition-all duration-300 group-hover:rotate-180`}
        />

        <div
          className={`absolute top-5 left-0 bg-transparent text-xl z-10 pt-5 rounded-[10px] ₼{
            ${show ? "opacity-100 visible" : "opacity-0 invisible"}
          }`}
        >
          <ul
            className={`pl-2 pr-5 py-2 text-xl z-10 m-0 bg-[#F5EFE9] shadow-lg duration-200 rounded-[10px]`}
          >
            <li className="cursor-pointer">Azərbaycanca</li>
            <li className="cursor-pointer">English</li>
            <li className="cursor-pointer">Azerbaijani</li>
          </ul>
        </div>
      </div>
      <BasicDialog
        open={open ?? false}
        handleClose={handleClose ?? (() => {})}
      />
    </>
  );
};

export default Select;
