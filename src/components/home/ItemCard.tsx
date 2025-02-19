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
      style={{ backgroundImage: `url(${cardItem.image})` }}
      className="h-[380px] border rounded-[20px] shadow-md overflow-hidden cursor-pointer bg-cover bg-center"
      onClick={onClick}
    >
      <div className="w-full h-full flex justify-end flex-col p-4 text-xl text-white">
        {cardItem.title}
      </div>
    </motion.div>
  );
};

export default ItemCard;
