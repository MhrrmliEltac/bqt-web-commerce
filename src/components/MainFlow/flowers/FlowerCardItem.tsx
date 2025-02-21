import Tulip from "../../../assets/Tulip.svg";
import Rose from "../../../assets/Rose.svg";
import Sunflower from "../../../assets/Sunflowr.svg";
import { motion } from "framer-motion";
import "./flower.css";
import FlowerCard from "./FlowerCard";

interface FlowerCardItemProps {
  id: number;
  name: string;
  image: string;
  price: number;
}

const flower: FlowerCardItemProps[] = [
  { id: 1, name: "Tulip", image: Tulip, price: 5 },
  { id: 2, name: "Rose", image: Rose, price: 5 },
  { id: 3, name: "Sunflower", image: Sunflower, price: 5 },
  { id: 4, name: "Tulip", image: Tulip, price: 5 },
  { id: 5, name: "Rose", image: Rose, price: 5 },
  { id: 6, name: "Sunflower", image: Sunflower, price: 5 },
];

const FlowerCardItem = () => {
  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 10,
    },
    animate: (id: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * id,
      },
    }),
  };

  return (
    <div className="mt-[60px] grid grid-cols-4 max-xl:grid-cols-4 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 gap-x-[20px] gap-y-[30px]">
      {flower.map((flower: FlowerCardItemProps) => (
        <motion.div
          key={flower.id}
          className="w-full h-full rounded-[20px] bg-[#FFF9F3] transition-shadow duration-300 hover:shadow-[0px_4px_6px_0px_rgba(0,0,0,0.13)] cursor-pointer"
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          custom={flower.id}
        >
          <FlowerCard flower={flower} />
        </motion.div>
      ))}
    </div>
  );
};

export default FlowerCardItem;
