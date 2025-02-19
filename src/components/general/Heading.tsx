type HeadingProps = {
  name: string;
};

const Heading: React.FC<HeadingProps> = ({ name }) => {
  return (
    <div className="text-[#2C4B42] text-[25px] font-kodchasan">{name}</div>
  );
};

export default Heading;
