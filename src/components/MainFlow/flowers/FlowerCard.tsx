import { useState } from "react";
import favorite from "../../../assets/favorite.svg";
import favoriteFill from "../../../assets/favorite-fill.svg";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

interface FlowerCardProps {
  id: number;
  name: string;
  image: string;
  price: number;
}

const FlowerCard = ({ flower }: { flower: FlowerCardProps }) => {
  const [icon, setIcon] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setIcon(!icon);
  };

  return (
    <div className="w-full h-full rounded-[20px] bg-[#FFF9F3] transition-shadow duration-300 hover:shadow-[0px_4px_6px_0px_rgba(0,0,0,0.13)] cursor-pointer flex flex-col justify-between pb-[10px]">
      <div className="relative h-full aspect-[1]">
        <motion.div
          whileTap={{ scale: 0.9 }}
          onClick={handleClick}
          className="absolute right-2 top-2 rounded-[10px] bg-white p-1"
        >
          <img
            src={icon ? favoriteFill : favorite}
            alt=""
            className="w-5 h-5 cursor-pointer"
          />
        </motion.div>
        <img
          onClick={() => navigate(`/flower/₼{flower.id}`)}
          src={flower.image}
          alt=""
          className="rounded-tr-[20px] rounded-tl-[20px] w-full aspect-video h-full object-cover"
        />
      </div>
      <div
        onClick={() => navigate(`/flower/₼{flower.id}`)}
        className="flex justify-between px-2 items-center py-2"
      >
        <p>{flower.name}</p>
        <p>{flower.price}₼</p>
      </div>
    </div>
  );
};

export default FlowerCard;
