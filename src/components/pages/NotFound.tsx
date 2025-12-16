interface NotFoundProps {
  image: string;
  text: string;
}

const NotFound: React.FC<NotFoundProps> = ({ image, text }) => {
  return (
    <div className="flex flex-col items-center justify-center h-[300px] gap-2">
      <div className="relative">
        <img src={image} alt="" width={100} height={100} />
        <span className="absolute -top-0 -right-3 border-2 border-white rounded-full bg-[#2C4B42] flex justify-center items-center text-white w-10 h-10">
          0
        </span>
      </div>
      <div className="text-[22px] font-[500] text-[#2C4B42]">
        {text} is empty
      </div>
    </div>
  );
};

export default NotFound;
