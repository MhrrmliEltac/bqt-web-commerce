type HeadingProps = {
  name: string;
};

const Heading: React.FC<HeadingProps> = ({ name }) => {
  return (
    <div
      className={`text-[#2C4B42] md:text-[24px] sm:text-[20px] font-[500] font-kodchasan`}
    >
      {name}
    </div>
  );
};

export default Heading;
