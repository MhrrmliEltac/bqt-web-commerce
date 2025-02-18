import ItemCard from "./ItemCard";

type cardItemType = {
  id: number;
  title: string;
  image: string;
};

const cardItem: cardItemType[] = [
  {
    id: 1,
    title: "Flowers & Bouquets",
    image: "/src/assets/flower.svg",
  },
  {
    id: 2,
    title: "Cakes & Pastries",
    image: "/src/assets/cake.svg",
  },
  {
    id: 3,
    title: "Premium Chocolates",
    image: "/src/assets/chocolate.svg",
  },
  {
    id: 4,
    title: "Potted Plants",
    image: "/src/assets/plant.svg",
  },
];

const HomeCard = () => {
  return (
    <div className="flex justify-center gap-5 flex-wrap">
      {cardItem.map((item: cardItemType) => (
        <ItemCard key={item.id} cardItem={item} />
      ))}
    </div>
  );
};

export default HomeCard;
