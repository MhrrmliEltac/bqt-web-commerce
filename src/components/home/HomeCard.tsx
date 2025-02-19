import { useNavigate } from "react-router";
import { motion } from "framer-motion";
import flower from "../../../public/flower.svg";
import cake from "../../../public/cake.svg";
import chocolate from "../../../public/chocolate.svg";
import plant from "../../../public/plant.svg";

type cardItemType = {
  id: number;
  title: string;
  image: string;
  url: string;
};

const cardItem: cardItemType[] = [
  {
    id: 1,
    title: "Flowers & Bouquets",
    image: flower,
    url: "/flowers",
  },
  {
    id: 2,
    title: "Cakes & Pastries",
    image: cake,
    url: "/cakes",
  },
  {
    id: 3,
    title: "Premium Chocolates",
    image: chocolate,
    url: "/chocolates",
  },
  {
    id: 4,
    title: "Potted Plants",
    image: plant,
    url: "/plants",
  },
];

const HomeCard = () => {
  const navigate = useNavigate();
  const navigateTo = (path: string) => {
    navigate(path);
  };

  const parentVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        duration: 0.5,
      },
    },
  };

  const imgVariant = {
    initial: { scale: 1.1, transition: { duration: 0.6 } },
    hover: { scale: 1.2, transition: { duration: 0.6 } },
  };

  const textVariant = {
    initial: { opacity: 1, transition: { duration: 0.3 } },
    hover: { opacity: 0, transition: { duration: 0.3 } },
  };

  const childVariant = {
    hidden: { opacity: 0, y: 0 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 w-full gap-5 p-4"
      variants={parentVariant}
      initial="hidden"
      animate="visible"
    >
      {cardItem.map((item: cardItemType) => (
        <motion.div variants={childVariant}>
          <motion.div
            className="relative duration-300 shadow-lg hover:shadow-2xl rounded-[30px] lg:aspect-[315/380] aspect-[950/380] overflow-hidden cursor-pointer"
            onClick={() => navigateTo(item.url)}
            initial="initial"
            whileHover="hover"
            key={item.id}
          >
            <div className="absolute inset-0">
              <motion.img
                variants={imgVariant}
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <motion.div
                className="absolute inset-0 bg-black/50 backdrop-blur-md"
                variants={textVariant}
              ></motion.div>
            </div>

            <motion.div
              className="relative z-10 flex items-center justify-center h-full text-white text-center font-bold text-xl lg:text-3xl px-6"
              variants={textVariant}
            >
              <p>{item.title}</p>
            </motion.div>
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default HomeCard;
