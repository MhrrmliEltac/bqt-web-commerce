import Tulip from "../../../assets/Tulip.svg";
import Rose from "../../../assets/Rose.svg";
import Sunflower from "../../../assets/Sunflowr.svg";
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
  return (
    <div className="mt-[60px] grid grid-cols-4 max-xl:grid-cols-4 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 gap-x-[20px] gap-y-[30px]">
      {flower.map((flower: FlowerCardItemProps) => (
        <FlowerCard key={flower.id} flower={flower} />
      ))}
    </div>
  );
};

export default FlowerCardItem;
