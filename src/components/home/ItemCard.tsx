import { motion } from "framer-motion";

interface CardItem {
  id: number;
  title: string;
  image: string;
}

interface ItemCardProps {
  cardItem: CardItem;
  onClick: () => void;
}

const cardVariants = {
  initial: { width: "20%", x: "-100%", transition: { duration: 0.5 } },
  hover: { width: "33%", transition: { duration: 0.5 } },
  animate: { width: "20%", x: "0%", transition: { duration: 1 } },
};

const ItemCard = ({ cardItem, onClick }: ItemCardProps) => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      variants={cardVariants}
      className="h-[380px] border rounded-[20px] overflow-hidden cursor-pointer relative"
      onClick={onClick}
    >
      <div className="absolute h-full object-cover w-full z-0">
        <img
          src={cardItem.image}
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
      <div className="w-full h-full flex justify-end flex-col p-4 text-xl text-white relative shadow-lg z-20">
        {cardItem.title}
      </div>
      <div className="gradient absolute h-full w-full z-10 top-0"></div>
    </motion.div>
  );
};

export default ItemCard;
