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

const imgVariant = {
  initial: { scale: 1.1, transition: { duration: 0.6 } },
  hover: { scale: 1.2, transition: { duration: 0.6 } },
};

const textVariant = {
  initial: { opacity: 1, transition: { duration: 0.3 } },
  hover: { opacity: 0, transition: { duration: 0.3 } },
};

const ItemCard = ({ cardItem, onClick }: ItemCardProps) => {
  return (
    <motion.div
      className="relative duration-300 shadow-lg hover:shadow-2xl rounded-[30px] lg:aspect-[315/380] md:aspect-[950/380] overflow-hidden cursor-pointer"
      onClick={onClick}
      initial="initial"
      whileHover="hover"
    >
      <div className="absolute inset-0">
        <motion.img
          variants={imgVariant}
          src={cardItem.image}
          alt={cardItem.title}
          className="w-full h-full object-cover"
        />
        <motion.div
          className="absolute inset-0 bg-black/50 backdrop-blur-md"
          variants={textVariant}
        ></motion.div>
      </div>

      <motion.div
        className="relative z-10 flex items-center justify-center h-full text-white text-center font-bold text-xl md:text-3xl px-6"
        variants={textVariant}
      >
        <p>{cardItem.title}</p>
      </motion.div>
    </motion.div>
  );
};

export default ItemCard;
