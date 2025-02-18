import { useNavigate } from "react-router";
import ItemCard from "./ItemCard";

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
    image: "/src/assets/flower.svg",
    url: "/flowers",
  },
  {
    id: 2,
    title: "Cakes & Pastries",
    image: "/src/assets/cake.svg",
    url: "/cakes",
  },
  {
    id: 3,
    title: "Premium Chocolates",
    image: "/src/assets/chocolate.svg",
    url: "/chocolates",
  },
  {
    id: 4,
    title: "Potted Plants",
    image: "/src/assets/plant.svg",
    url: "/plants",
  },
];

const HomeCard = () => {
  const navigate = useNavigate();
  const navigateTo = (path: string) => {
    navigate(path);
  };

  return (
    <div className="flex justify-center gap-5 flex-wrap">
      {cardItem.map((item: cardItemType) => (
        <ItemCard
          key={item.id}
          cardItem={item}
          onClick={() => navigateTo(item.url)}
        />
      ))}
    </div>
  );
};

export default HomeCard;
