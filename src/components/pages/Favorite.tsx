import Heading from "../general/Heading";
import FlowerCard from "../MainFlow/flowers/FlowerCard";
import Tulip from "../../assets/Tulip.svg";
import Rose from "../../assets/Rose.svg";
import Sunflower from "../../assets/Sunflowr.svg";
import { motion } from "framer-motion";
import { useState } from "react";
import NotFound from "./NotFound";
import favorite from "../../assets/favorite.svg";

interface flowerType {
  id: number;
  name: string;
  image: string;
  price: number;
}

const flower: flowerType[] = [
  { id: 1, name: "Tulip", image: Tulip, price: 5 },
  { id: 2, name: "Rose", image: Rose, price: 5 },
  { id: 3, name: "Sunflower", image: Sunflower, price: 5 },
];

const Favorite = () => {
  const [flowerData] = useState<flowerType[]>(flower);
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

  const parentVariant = {
    initial: { opacity: 0, scale: 0.9, y: 100, transition: { duration: 0.5 } },
    animate: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      variants={parentVariant}
      initial="initial"
      animate="animate"
      className="flex flex-col"
    >
      {flowerData.length > 0 && flowerData ? (
        <>
          <Heading name="Favourites" />
          <div className="grid grid-rows-1 grid-cols-4 gap-7 my-5">
            {flowerData?.map((item: flowerType) => (
              <motion.div
                key={item.id}
                className="w-full h-full rounded-[20px] bg-[#FFF9F3] transition-shadow duration-300 hover:shadow-[0px_4px_6px_0px_rgba(0,0,0,0.13)] cursor-pointer"
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{
                  once: true,
                }}
                custom={item.id}
              >
                <FlowerCard flower={item} />
              </motion.div>
            ))}
          </div>
        </>
      ) : (
        <NotFound text="Wishlist" image={favorite} />
      )}
    </motion.section>
  );
};

export default Favorite;
