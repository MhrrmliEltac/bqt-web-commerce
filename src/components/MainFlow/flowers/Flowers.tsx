import FlowerCardItem from "./FlowerCardItem";
import FlowerHeader from "./FlowerHeader";
import { motion } from "framer-motion";

const Flowers = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      className="my-10 md:my-5"
    >
      <FlowerHeader />
      <FlowerCardItem />
    </motion.section>
  );
};

export default Flowers;
