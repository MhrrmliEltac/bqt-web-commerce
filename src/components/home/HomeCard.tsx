import { useNavigate } from "react-router";
import ItemCard from "./ItemCard";

const cardItem = [
  {
    id: 1,
    title: "Flowers & Bouquets",
    image: "/flower.svg",
    url: "/flowers",
  },
  {
    id: 2,
    title: "Cakes & Pastries",
    image: "/cake.svg",
    url: "/cakes",
  },
  {
    id: 3,
    title: "Premium Chocolates",
    image: "/chocolate.svg",
    url: "/chocolates",
  },
  {
    id: 4,
    title: "Potted Plants",
    image: "/plant.svg",
    url: "/plants",
  },
];

const HomeCard = () => {
  const navigate = useNavigate();
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 w-full gap-5 p-4">
      {cardItem.map((item) => (
        <ItemCard
          key={item.id}
          cardItem={item}
          onClick={() => navigate(item.url)}
        />
      ))}
    </div>
  );
};

export default HomeCard;
