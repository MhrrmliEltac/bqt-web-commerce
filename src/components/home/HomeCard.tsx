import { useNavigate } from "react-router";
import ItemCard from "./ItemCard";
import plant from "../../../public/plant.svg";
import cake from "../../../public/cake.svg";
import chocolate from "../../../public/chocolate.svg";
import flower from "../../../public/flower.svg";

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

  return (
    <div className="flex justify-between flex-wrap w-full">
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
